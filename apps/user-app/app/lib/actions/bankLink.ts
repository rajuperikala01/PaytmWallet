"use server";

import prisma from "@repo/database/client";

export default async function bankLink(userId: string) {
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id: Number(userId),
      },
    });

    if (user.bankCustomerId) {
      return;
    }
  } catch (error) {}
}
