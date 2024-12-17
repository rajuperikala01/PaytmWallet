import prisma from "@repo/database/client";
import express from "express";
import zod from "zod";

const mobile = zod.object({
  number: zod.string().regex(/^\d{10}$/, {
    message: "Mobile number must be exactly 10 digits",
  }),
});
const router = express.Router();

router.post("/", async (req: express.Request, res: express.Response) => {
  const number = mobile.safeParse(req.body);

  if (!number.success) {
    res.status(401).json({
      error: number.error.issues[0],
    });
  } else {
    try {
      const customer = await prisma.customer.findUniqueOrThrow({
        where: {
          mobile: number.data.number,
        },
      });

      res.status(200).json({
        customerId: customer.customerId,
      });
    } catch (error) {
      res.status(400).json({
        error:
          "Didn't find any accounts with this mobile number in selected bank. Open an account to continue",
      });
    }
  }
});

export default router;
