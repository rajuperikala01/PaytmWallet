"use server";
import { getServerSession } from "next-auth";
import prisma from "@repo/database/client";
import { authOptions } from "../auth";

export default async function onRampTransaction(
  provider: string,
  value: number
) {
  if (value <= 0) {
    return {
      message: "Amount should be greater than 0",
    };
  }

  const session = await getServerSession(authOptions);
  const amount = value * 100;
  if (!session) {
    return {
      message: "Unauthenticated request",
    };
  }

  try {
    const token = (Math.random() * 10000).toString();
    await prisma.onRampTransaction.create({
      data: {
        userId: Number(session.user.id),
        token: token,
        provider: provider,
        amount: amount,
        status: "Processing",
        startTime: new Date(),
      },
    });
    return {
      status: "Captured",
    };
  } catch (error) {
    return {
      status: "Unsuccessful",
    };
  }
}
