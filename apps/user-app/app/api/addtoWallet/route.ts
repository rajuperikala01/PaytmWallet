import prisma from "@repo/database/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../lib/auth";
import axios, { AxiosError } from "axios";
import { schema } from "@repo/validation/bankschemas";

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);
  console.log(session);
  console.log("HI");

  if (!session) {
    console.log("If block");

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
    console.log("Validation block");
    return NextResponse.json(
      {
        error: validatedData.error,
      },
      { status: 401 }
    );
  }

  const token = (Math.random() * 1000).toString();

  try {
    console.log("try block");
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
    console.log("before bank response");
    try {
      const bankReq = await axios.post(
        "http://localhost:3010/api/v1/paytmTransfer",
        {
          amount: validatedData.data.amount * 100,
          from: parseInt(session.user.id),
          token: token,
          customerId: session.user.bankCustomerId,
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
