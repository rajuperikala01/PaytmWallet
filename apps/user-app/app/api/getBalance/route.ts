import prisma from "@repo/database/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("id");

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }
  const data = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
  });
  const balance = data && data?.Balance / 100;
  return NextResponse.json({
    Balance: balance,
  });
};
