import { z } from "zod";

export const RegisterSchema = z
  .object({
    firstname: z.string().min(1, "Firstname is required"),
    lastname: z.string().min(1, "Lastname is required"),
    password: z
      .string()
      .min(1, "Password is required")
      .max(6, "Password must  be at least 6 characters long"),
    email: z.string().email({ message: "Invalid email" }),
    phone: z.string().min(10, "Invalid Phone Number"),
    state: z.string().min(1, "State is required"),
    city: z.string().min(1, "City is required"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords does not match",
    path: ["confirmPassword"],
  });

export const LoginSchema = z.object({
  password: z.string().min(1, "Password is required"),
  email: z.string().email({ message: "Invalid email" }),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;
