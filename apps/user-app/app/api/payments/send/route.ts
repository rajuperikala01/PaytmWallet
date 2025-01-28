import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { p2pTransfer } from "@repo/validation/bankschemas";
import prisma, { Prisma } from "@repo/database/client";

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      {
        error: "Unauthenticated Request",
      },
      { status: 403 }
    );
  }

  const data = await req.json();

  const validation = p2pTransfer.safeParse(data);
  if (!validation.success) {
    return NextResponse.json(
      {
        error: validation.error.issues[0]?.message,
      },
      { status: 401 }
    );
  }

  try {
    const fromUser = await prisma.user.findUniqueOrThrow({
      where: {
        id: Number(session.user.id),
      },
    });

    if (fromUser.number === validation.data.to) {
      return NextResponse.json(
        {
          error: "Invalid Transaction",
        },
        { status: 400 }
      );
    }

    if (fromUser && fromUser.Balance / 100 < validation.data.amount) {
      try {
        const toUser = await prisma.user.findUniqueOrThrow({
          where: {
            number: validation.data.to,
          },
        });

        await prisma.walletTransactions.create({
          data: {
            amount: validation.data.amount * 100,
            senderId: fromUser.id,
            reciverId: toUser.id,
            status: "Failed",
            createdAt: new Date(validation.data.createdAt),
          },
        });
        return NextResponse.json(
          {
            error: "Insufficient Funds",
          },
          { status: 400 }
        );
      } catch (error) {
        return NextResponse.json(
          {
            error: "Insufficient Funds",
          },
          { status: 400 }
        );
      }
    }

    try {
      const toUser = await prisma.user.findUniqueOrThrow({
        where: {
          number: validation.data.to,
        },
      });

      try {
        await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
          await tx.$queryRaw`SELECT * FROM "User" WHERE "id" = ${fromUser?.id} FOR UPDATE`;

          await tx.user.update({
            where: {
              id: fromUser?.id,
            },
            data: {
              Balance: {
                decrement: validation.data.amount * 100,
              },
            },
          });

          await tx.user.update({
            where: {
              id: toUser?.id,
            },
            data: {
              Balance: {
                increment: validation.data.amount * 100,
              },
            },
          });
          if (fromUser && toUser) {
            await tx.walletTransactions.create({
              data: {
                amount: validation.data.amount * 100,
                status: "Success",
                createdAt: new Date(validation.data.createdAt),
                senderId: fromUser.id,
                reciverId: toUser.id,
              },
            });
          }
        });

        return NextResponse.json(
          {
            message: "Successful",
          },
          { status: 200 }
        );
      } catch (error) {
        return NextResponse.json(
          {
            error: "Internal Server Error, please try again later",
          },
          { status: 500 }
        );
      }
    } catch (error) {
      return NextResponse.json(
        {
          error: "User with this mobile number doesn't Exists",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: "User not Found",
      },
      { status: 400 }
    );
  }
};
