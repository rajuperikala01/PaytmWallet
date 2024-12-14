import prisma from "@repo/database/client";
import axios, { AxiosError } from "axios";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";
import { signIn } from "next-auth/react";
export const POST = async (req: NextRequest) => {
  const userId = await req.json();
  const session = await getServerSession(authOptions);
  try {
    console.log(userId);

    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id: userId.id,
      },
    });
    console.log(user);

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
      console.log("bank");

      const request = await axios.post(
        "http://localhost:3010/api/v1/BankLink",
        {
          number: user?.number,
        }
      );
      if (request.status === 200) {
        console.log(200);
        try {
          const updatedUser = await prisma.user.update({
            where: {
              id: user?.id,
            },
            data: {
              bankCustomerId: request.data.customerId,
            },
          });

          await signIn("credentials", { redirect: false });

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
        return NextResponse.json({
          error: error.response?.data.error,
        });
      }
      return NextResponse.json({
        error: "An Unexpected Error Occurred Please try again after some time",
      });
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
