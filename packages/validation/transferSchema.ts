import zod from "zod";

export const transferSchema = zod.object({
  token: zod.string(),
  amount: zod.number().min(1, "Amount should be a positive number"),
  userId: zod.number(),
});
