import prisma from "@repo/database/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../lib/auth";
import axios, { AxiosError } from "axios";
import { schema } from "@repo/validation/bankschemas";

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      {
        message: "Unauthenticated Request",
      },
      { status: 403 }
    );
  }
  const body = await req.json();
  const validatedData = schema.safeParse(body);

  if (!validatedData.success) {
    return NextResponse.json(
      {
        error: validatedData.error,
      },
      { status: 401 }
    );
  }

  const token = (Math.random() * 1000).toString();

  try {
    const transaction = await prisma.onRampTransaction.create({
      data: {
        token: token,
        amount: validatedData.data.amount * 100,
        status: "Processing",
        startTime: new Date(),
        provider: validatedData.data.providerId.toString(),
        userId: Number(session.user.id),
      },
    });

    const user = await prisma.user.findFirstOrThrow({
      where: {
        id: Number(session.user.id),
      },
    });
    try {
      const bankReq = await axios.post(
        `${process.env.NEXT_PUBLIC_BANK_URL}/paytmTransfer`,
        {
          amount: validatedData.data.amount * 100,
          from: Number(session.user.id),
          token: token,
          customerId: user.bankCustomerId || undefined,
          to: validatedData.data.providerId,
        }
      );
      if (bankReq.status === 200) {
        return NextResponse.json(
          {
            message: "Transaction Succesfully completed",
          },
          { status: 200 }
        );
      }
    } catch (error: unknown) {
      console.log("catch block");

      console.log(error);

      if (error instanceof AxiosError) {
        if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
          return NextResponse.json(
            {
              error: "Can't able to connect with your Bank",
            },
            { status: 500 }
          );
        }

        return NextResponse.json(
          {
            error: error.response?.data.error,
          },
          { status: error.status || 500 }
        );
      }
      return NextResponse.json(
        {
          error: "Unknown Error",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal Server error",
      },
      { status: 500 }
    );
  }
};
