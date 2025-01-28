import zod from "zod";

export const schema = zod.object({
  providerId: zod.number(),
  amount: zod.number().min(1, "Amount should be Positive"),
});

export const createAccountSchema = zod.object({
  email: zod
    .string()
    .email("Please provide valid email")
    .min(8, "Email should be contain atleast 8 characters"),
  name: zod.string().min(4, "Name should be atleast contain 4 Characters"),
  mobile: zod.string().regex(/^\d{10}$/, {
    message: "Mobile number must be exactly 10 digits",
  }),
  initialBalance: zod.number().optional(),
});

export const bankTransferSchema = zod.object({
  from: zod.number().min(1, "Id should be number and cannot be zero"),
  to: zod.number().min(1, "Id should be number and cannot be zero"),
  amount: zod.number().min(1, "Amount should be positive"),
  token: zod.string(),
});

export const addMoneySchema = zod.object({
  from: zod.number().min(1, "Id should be number and cannot be zero"),
  customerId: zod
    .number({
      required_error:
        "you didn't linked your bank.Please link your bank with Paytm",
    })
    .min(1, "Id should be number and cannot be zero"),
  amount: zod.number().min(1, "Amount should be positive"),
  token: zod.string(),
  to: zod.number(),
});

export const p2pTransfer = zod.object({
  to: zod
    .string()
    .regex(/^[0-9]{10}$/, "Invalid mobile number. It must be 10 digits."),
  amount: zod.number().min(1, "Amount should be greater than Zero"),
});

export const depositSchema = zod.object({
  id: zod
    .number({ required_error: "Required customerId" })
    .min(1, "Customer Id cannot be negative"),
  amount: zod
    .number({ required_error: "required Amount" })
    .min(1, "Amount should be greater than zero(0)"),
});
