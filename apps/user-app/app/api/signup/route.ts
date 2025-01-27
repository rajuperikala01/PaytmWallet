import prisma from "@repo/database/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signupSchema } from "@repo/validation/signupschema";

export const POST = async (req: NextRequest) => {
  const body = await req?.json();

  const validatedData = signupSchema.safeParse(body);

  if (!validatedData.success) {
    console.log(validatedData.error);

    return NextResponse.json(
      {
        message: "Validation Error",
        error: validatedData.error.issues[0]?.message,
      },
      { status: 400 }
    );
  }

  const { email, mobile, username, password } = validatedData.data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return NextResponse.json(
      {
        error: "Email already Exists",
      },
      { status: 400 }
    );
  }
  const existingNumber = await prisma.user.findUnique({
    where: {
      number: mobile,
    },
  });

  if (existingNumber) {
    return NextResponse.json(
      {
        error: "Mobile already Exists",
      },
      { status: 400 }
    );
  }
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email: email,
        number: mobile,
        password: hash,
        name: username,
        Balance: 2000 * 100,
      },
    });

    return NextResponse.json(
      {
        user: {
          id: user.id,
          email: user.email,
          mobile: user.number,
          username: user.name,
        },
      },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json(
      {
        error: "Server not working",
      },
      { status: 500 }
    );
  }
};
