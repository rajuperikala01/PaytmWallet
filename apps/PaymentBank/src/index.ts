import express from "express";
import prisma from "@repo/database/client";
import { createAccountSchema } from "@repo/validation/bankschemas";
import dotenv from "dotenv";
import { bankTransferSchema } from "@repo/validation/bankschemas";
import paytmTransfer from "./controllers/transValid";
import transactionFailed from "./controllers/transactionFailed";
import cors from "cors";

const app = express();

dotenv.config();
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PATCH"],
  allowedHeaders: ["Content-type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use("/api/v1/paytmTransfer", paytmTransfer);
app.use("/api/v1/transactionFailed", transactionFailed);

app.post("/api/v1/createAccount", async (req, res) => {
  const validatedData = createAccountSchema.safeParse(req.body);

  if (validatedData.success) {
    console.log("if block");

    const prefix = "95155389";
    const suffix = Math.floor(1000 + Math.random() * 9000).toString();
    const accNumber = `${prefix}${suffix}`;
    const balance = validatedData.data.initialBalance || 0;
    const initialBalance = balance * 100;
    try {
      const customer = await prisma.customer.create({
        data: {
          email: validatedData.data.email,
          customerName: validatedData.data.name,
          mobile: validatedData.data.mobile,
          createdAt: new Date(),
          updatedAt: new Date(),
          accountNumber: accNumber,
          balance: initialBalance,
        },
      });
      if (customer.customerId) {
        res.status(201).json({
          message: "Created new Customer",
          customer: {
            customerId: customer.customerId,
            customerName: customer.customerName,
            accNumber: customer.accountNumber,
            accType: customer.accType,
          },
        });
      }
    } catch (error) {
      res.status(400).json({
        error: "customer with this email/mobile already exists",
      });
    }
  } else {
    res.status(400).json({
      error: validatedData,
    });
  }
});

const port = process.env.PORT || 3050;
console.log(process.env.PORT);

app.get("/api/v1/balance/:customerId", async (req, res) => {
  const { customerId } = req.params;
  try {
    const balance = await prisma.customer.findUnique({
      where: {
        customerId: Number(customerId),
      },
    });
    res.status(200).json({
      balance: balance?.balance,
    });
  } catch (error) {
    res.status(403).json({
      error: "Unauthentcated request",
    });
  }
});

app.post("/api/v1/transfer", async (req, res) => {
  const validatedData = bankTransferSchema.safeParse(req.body);

  if (validatedData.success) {
    try {
      await prisma.$transaction(async (tx) => {
        const from = await tx.customer.findUnique({
          where: {
            customerId: validatedData.data.from,
          },
        });
        if ((from?.balance ?? 0) < validatedData.data.amount) {
          return res.status(400).json({
            error: "Insufficient funds",
          });
        }
        const to = await tx.customer.findUnique({
          where: {
            customerId: validatedData.data.to,
          },
        });

        if (to?.customerId) {
          await tx.customer.update({
            where: {
              customerId: from?.customerId,
            },
            data: {
              balance: {
                decrement: validatedData.data.amount,
              },
            },
          });

          await tx.customer.update({
            where: {
              customerId: to.customerId,
            },
            data: {
              balance: {
                increment: validatedData.data.amount,
              },
            },
          });

          await tx.transactions.create({
            data: {
              createdAt: new Date(),
              updatedAt: new Date(),
              transStatus: "Success",
              transType: "transfer",
              execBy: validatedData.data.from,
              token: validatedData.data.token,
              amount: validatedData.data.amount,
              toUserId: validatedData.data.to,
            },
          });

          return res.status(200).json({
            status: "Success",
          });
        }
      });
    } catch (error) {
      console.error(error); // Log the error for debugging

      // Send a 500 Internal Server Error response if any error occurs during the transaction
      res.status(500).json({
        error: "An error occurred during the transfer. Please try again later.",
      });
    }
  } else {
    res.status(400).json({
      error: validatedData.error,
    });
  }
});

app.listen(port, () => {
  console.log(`Server Listening on ${port} port`);
});
