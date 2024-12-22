import prisma from "@repo/database/client";
import axios, { AxiosError } from "axios";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";

export const POST = async (req: NextRequest) => {
  const userId = await req.json();
  const session = await getServerSession(authOptions);
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id: Number(userId.id),
      },
    });

    if (user?.bankCustomerId) {
      return NextResponse.json(
        {
          message: "Already Linked account",
        },
        {
          status: 400,
        }
      );
    }

    try {
      const request = await axios.post(
        `${process.env.NEXT_PUBLIC_BANK_URL}/BankLink`,
        {
          number: user?.number,
        }
      );
      console.log(request);

      if (request.status === 200) {
        try {
          const updatedUser = await prisma.user.update({
            where: {
              id: user?.id,
            },
            data: {
              bankCustomerId: request.data.customerId,
            },
          });

          return NextResponse.json(
            {
              message: "Successfully Added your Account",
            },
            { status: 200 }
          );
        } catch (error) {
          return NextResponse.json(
            {
              error: "unable to process your request",
            },
            { status: 500 }
          );
        }
      }
    } catch (error: any) {
      if (error instanceof AxiosError) {
        if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
          return NextResponse.json(
            {
              error: "Couldn't connect with the Bank server",
            },
            { status: 500 }
          );
        }
        if (error.status === 401) {
          return NextResponse.json({
            error: error.response?.data.error,
          });
        }
        return NextResponse.json(
          {
            error: error.response?.data.error,
          },
          { status: error.response?.status }
        );
      }
      return NextResponse.json(
        {
          error:
            "An Unexpected Error Occurred Please try again after some time",
        },
        { status: 500 }
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
