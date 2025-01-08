import express, { Request, Response } from "express";
import prisma from "@repo/database/client";
import { transferSchema } from "@repo/validation/transferschema";
import dotenv from "dotenv";
const app = express();
app.use(express.json());
dotenv.config();

app.get("/", async (req, res) => {
  const result = await prisma.user.findMany();
  console.log(prisma);

  res.status(200).json({
    message: "Success",
  });
});
app.post(
  "/api/v2/hdfcWebhook",
  async (req: express.Request, res: express.Response) => {
    const validatedData = transferSchema.safeParse(req.body);
    if (validatedData.success) {
      try {
        const transactionDetails = await prisma.onRampTransaction.findUnique({
          where: {
            token: validatedData.data.token,
          },
        });
        console.log("after transactionDetails");
        if (
          transactionDetails?.status === "Success" ||
          !transactionDetails ||
          transactionDetails.status === "Failed"
        ) {
          console.log("if after transactionDetails");
          res.status(403).json({
            message: "Duplicate request/token not found",
          });
        } else if (
          transactionDetails.userId === validatedData.data.userId &&
          transactionDetails.amount === validatedData.data.amount
        ) {
          await prisma.user.update({
            where: {
              id: transactionDetails.userId,
            },
            data: {
              Balance: {
                increment: validatedData.data.amount,
              },
            },
          });
          await prisma.onRampTransaction.update({
            where: {
              token: validatedData.data.token,
            },
            data: {
              status: "Success",
            },
          });

          res.status(200).json({
            message: "Captured",
          });
        } else {
          res.status(403).json({
            message: "User not found/Amount different from trasaction Amount",
          });
        }
      } catch (error) {
        res.status(500).json({
          message: "Server Error",
        });
      }
    } else {
      res.status(401).json({
        message: "Validation Error",
        error: validatedData.error,
      });
    }
  }
);

app.patch("/api/v2/insufficientfunds", async (req: Request, res: Response) => {
  const token: string = req.body.token;

  await prisma.onRampTransaction.update({
    where: {
      token: token,
    },
    data: {
      status: "Failed",
    },
  });

  res.status(200).json({
    message: "Updated successfully",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).send("OK");
});

const port = process.env.PORT || 3050;

// app.listen(port, () => {
//   console.log(`Server Listening on ${port} port`);
// });

export default app;
