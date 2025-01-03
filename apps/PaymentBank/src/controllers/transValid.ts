import express from "express";
import { addMoneySchema } from "@repo/validation/bankschemas";
import prisma from "@repo/database/client";
import axios, { AxiosError } from "axios";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("bank response received");
  const validatedData = addMoneySchema.safeParse(req.body);
  if (!validatedData.success) {
    console.log(validatedData.error);

    res.status(401).json({
      error: validatedData,
    });
  } else {
    console.log("else block");
    console.log(validatedData.data);

    try {
      const customer = await prisma.customer.findUnique({
        where: {
          customerId: validatedData.data.customerId,
        },
      });
      console.log("database");

      if (customer && customer.balance < validatedData.data.amount) {
        console.log("if block");
        console.log(customer.balance, validatedData.data.amount);
        try {
          const response = await axios.patch(
            `${process.env.NEXT_PUBLIC_WEBHOOK_URL}/insufficientfunds`,
            {
              token: validatedData.data.token,
            }
          );

          if (response.status === 200) {
            res.status(400).json({
              error: "Insufficient funds",
            });
          }
        } catch (error) {
          res.status(400).json({
            error: "Insufficient funds",
          });
        }
      } else {
        await prisma.$transaction(async (tx) => {
          console.log("hi");

          await tx.customer.update({
            where: {
              customerId: validatedData.data.customerId,
            },
            data: {
              balance: {
                decrement: validatedData.data.amount,
              },
            },
          });
          console.log("hi2");

          await tx.transactions.create({
            data: {
              createdAt: new Date(),
              updatedAt: new Date(),
              execBy: validatedData.data.customerId,
              transStatus: "Success",
              transType: "transfer",
              amount: validatedData.data.amount,
              token: validatedData.data.token,
              toUserId: 100,
            },
          });
        });
        try {
          console.log("webhook block");
          const webhook = await axios.post(
            `${process.env.NEXT_PUBLIC_WEBHOOK_URL}/hdfcWebhook`,
            {
              token: validatedData.data.token,
              amount: validatedData.data.amount,
              userId: validatedData.data.from,
            }
          );

          if (webhook.status === 200) {
            console.log("webhook success");
            res.status(200).json({
              message: "Transaction completed Successfully",
            });
          }
        } catch (error: any) {
          if (error instanceof AxiosError) {
            console.log("webhook if block");
            if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
              res.status(500).json({
                error: "Error occurred.. Please try again later",
              });
            } else {
              console.log("ellif block");

              res.status(error.response?.status || 500).json({
                error: error.response?.data.error,
              });
            }
          } else {
            console.log("webhook else block");

            res.status(500).json({
              error: "processsing",
            });
          }
        }
      }
    } catch (error) {
      console.log("webhook last catch block");
      res.status(500).json({
        error: "Can't able to connect to database",
      });
    }
  }
});

export default router;
