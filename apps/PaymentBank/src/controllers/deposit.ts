import prisma from "@repo/database/client";
import express, { Request, Response } from "express";
import { depositSchema } from "@repo/validation/bankschemas";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const validatedData = depositSchema.safeParse(req.body);
  if (!validatedData.success) {
    res.status(401).json({
      error: validatedData.error.issues[0]?.message,
    });
  } else {
    try {
      console.log(validatedData.data);
      const amount = validatedData.data?.amount || 0;

      await prisma.$transaction(async (tx) => {
        await tx.customer.update({
          where: {
            customerId: validatedData.data?.id,
          },
          data: {
            balance: {
              increment: amount * 100,
            },
          },
        });
        const token = (Math.random() * 1000).toString();
        await tx.transactions.create({
          data: {
            createdAt: new Date(),
            updatedAt: new Date(),
            transType: "deposit",
            transStatus: "Success",
            amount: amount * 100,
            token: token,
            execBy: validatedData.data.id,
            toUserId: 0,
          },
        });
      });

      res.status(200).json({
        message: "Successfully deposited",
      });
    } catch (error) {
      res.status(400).json({
        error: "Didn't find Customer",
      });
    }
  }
});

export default router;
