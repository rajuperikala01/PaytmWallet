import prisma from "@repo/database/client";
import express, { Request, Response } from "express";
import zod from "zod";
const router = express.Router();

const mobile = zod.string().regex(/^\d{10}$/, {
  message: "Mobile number must be exactly 10 digits",
});
router.post("/", async (req: Request, res: Response) => {
  const validatedData = mobile.safeParse(req.body.mobile);
  if (!validatedData.success) {
    res.status(401).json({
      error: validatedData.error.issues[0]?.message,
    });
  } else {
    try {
      const customer = await prisma.customer.findUniqueOrThrow({
        where: {
          mobile: validatedData.data,
        },
      });
      if (customer) {
        res.status(200).json({
          message: "Login Successful",
        });
      }
    } catch (error) {
      res.status(404).json({
        error: "Cannot find user with this mobile number",
      });
    }
  }
});

export default router;
