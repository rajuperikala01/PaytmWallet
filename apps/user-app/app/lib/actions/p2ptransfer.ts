"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/database/client";
import { redirect } from "next/navigation";

interface objectP2p {
  to: string;
  amount: number;
}

export default async function transferTo({ to, amount }: objectP2p) {
  const session = await getServerSession(authOptions);
  console.log("hi");

  if (!session?.user.id) {
    return {
      message: "UnAuthenticated request",
    };
  }

  const from = await prisma.user.findUnique({
    where: {
      id: Number(session.user.id),
    },
  });
  console.log(from);

  if (!from) {
    return {
      message: "User Deosn't Exist",
    };
  }

  const toUser = await prisma.user.findUnique({
    where: {
      number: to,
    },
  });
  console.log(toUser);

  if (!toUser) {
    return {
      message: "User Deosn't Exist",
    };
  }

  await prisma.$transaction(async (tx) => {
    await tx.$queryRaw`SELECT * FROM "User" WHERE "id" = ${Number(from)} FOR UPDATE`;
    const fromBalance = await tx.user.findUnique({
      where: {
        id: Number(session.user.id),
      },
    });

    if (fromBalance && fromBalance.Balance / 100 < amount) {
      return {
        message: "Insufficient Funds",
      };
    }

    await tx.user.update({
      where: {
        id: Number(session.user.id),
      },
      data: {
        Balance: {
          decrement: amount * 100,
        },
      },
    });

    await tx.user.update({
      where: {
        id: toUser.id,
      },
      data: {
        Balance: {
          increment: amount * 100,
        },
      },
    });
  });
  redirect("/success");
}
