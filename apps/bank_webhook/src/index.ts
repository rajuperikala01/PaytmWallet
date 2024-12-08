import express from "express";
import prisma from "@repo/database/client";
import { transferSchema } from "@repo/validation/transferschema";
import dotenv from "dotenv";
const app = express();
app.use(express.json());
dotenv.config();

app.post(
  "/hdfcWebhook",
  async (req: express.Request, res: express.Response) => {
    console.log("webhook request received");
    const validatedData = transferSchema.safeParse(req.body);
    if (validatedData.success) {
      console.log("validation success");
      console.log(validatedData.data);

      try {
        console.log("tryblock");
        const transactionDetails = await prisma.onRampTransaction.findUnique({
          where: {
            token: validatedData.data.token,
          },
        });
        console.log("after transactionDetails");
        if (
          transactionDetails?.status === "Success" ||
          !transactionDetails ||
          transactionDetails.status === "Failure"
        ) {
          console.log("if after transactionDetails");
          res.status(403).json({
            message: "Duplicate request/token not found",
          });
        } else if (
          transactionDetails.userId === validatedData.data.userId &&
          transactionDetails.amount === validatedData.data.amount
        ) {
          console.log("user update block");
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
          console.log("onRampTransaction update block");
          await prisma.onRampTransaction.update({
            where: {
              token: validatedData.data.token,
            },
            data: {
              status: "Success",
            },
          });
          console.log("success");

          res.status(200).json({
            message: "Captured",
          });
        } else {
          console.log("User not found/Amount different from trasaction Amount");

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
      console.log(validatedData.error);
      res.status(401).json({
        message: "Validation Error",
        error: validatedData.error,
      });
    }
  }
);

const port = process.env.PORT || 3050;
console.log(process.env.PORT);

app.listen(port, () => {
  console.log(`Server Listening on ${port} port`);
});
