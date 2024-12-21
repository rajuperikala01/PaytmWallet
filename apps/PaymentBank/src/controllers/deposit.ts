import prisma from "@repo/database/client";
import express, { Request, Response } from "express";
import { depositSchema } from "@repo/validation/bankschemas";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const validatedData = depositSchema.safeParse(req.body);
  if (!validatedData.success) {
    res.status(401).json({
      error: validatedData.error.issues[1],
    });
  }

  try {
    const deposit = await prisma.customer.update({
      where: {
        customerId: validatedData.data?.id,
      },
      data: {
        balance: {
          increment: validatedData.data?.amount,
        },
      },
    });
    res.status(200).json({
      message: "Successfully deposited",
    });
  } catch (error) {
    res.status(400).json({
      error: "Didn't find Customer",
    });
  }
});

export default router;
