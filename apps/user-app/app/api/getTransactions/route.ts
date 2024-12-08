import prisma from "@repo/database/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export const GET = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth/signin");
  }
  try {
    const data = await prisma.walletTransactions.findMany({
      take: 7,
      where: {
        OR: [
          { senderId: Number(session.user.id) },
          { reciverId: Number(session.user.id) },
        ],
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
          },
        },
        receiver: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      {
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "couldn't get Transactions",
      },
      { status: 500 }
    );
  }
};
