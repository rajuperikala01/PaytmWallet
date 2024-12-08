import prisma from "@repo/database/client";
import express from "express";

const router = express.Router();

router.patch("/", async (req, res) => {
  const token = req.body;
  await prisma.onRampTransaction.update({
    where: {
      token: token,
    },
    data: {
      status: "Failure",
    },
  });

  res.status(200).json({
    status: "completed",
  });
});

export default router;
