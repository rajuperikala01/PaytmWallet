import prisma from "@repo/database/client";
import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const customerId = req.body;
  try {
    const customer = await prisma.customer.findUnique({
      where: {
        customerId: customerId,
      },
    });

    res.status(200).json({
      balance: (customer && customer?.balance / 100) || 0,
    });
  } catch (error) {
    res.status(400).json({
      error: "cannot find customer",
    });
  }
});

export default router;
