"use server";
import prisma from "@repo/database/client";
import { redirect } from "next/navigation";

export default async function createUser({
  email,
  mobile,
  password,
  username,
}: {
  email: string;
  mobile: string;
  password: string;
  username: string;
}) {
  console.log(email);

  const existingEmail = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingEmail) {
    return {
      message: "Email Already exists",
    };
  }

  const existingMobile = await prisma.user.findUnique({
    where: {
      number: mobile,
    },
  });

  if (existingMobile) {
    return {
      message: "mobile already exists",
    };
  }

  const user = await prisma.user.create({
    data: {
      email: email,
      password: password,
      name: username,
      number: mobile,
    },
  });
  console.log(user);

  return {
    user,
  };
}
