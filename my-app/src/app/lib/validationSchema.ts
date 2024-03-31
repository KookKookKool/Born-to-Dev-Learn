import { z } from "zod";

export const userRegistrationSchema = z.object({
    email: z
        .string()
        .min(5, "Email is required")
        .email("Email is invalid"),
    password: z
        .string()
        .min(3, "Password is required")
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters"),
    confirmPassword: z
        .string()
        .min(3, "Password confirmation is required")
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters"),
})

//เรียกใช้งานในหน้าเว็บ