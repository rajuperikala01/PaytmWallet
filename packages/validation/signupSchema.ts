import zod from "zod";

export const signupSchema = zod.object({
  email: zod
    .string()
    .email("Please provide valid email")
    .min(1, "Email is required"),
  password: zod
    .string()
    .min(6, "Password must be atleast 6 characters")
    .max(20, "Password cannot be longer than 20 characters"),
  mobile: zod.string().max(10, "Mobile number must be 10 digits"),
  username: zod
    .string()
    .min(1, "Username is required")
    .max(20, "Username cannot be longer than 20 characters"),
});
