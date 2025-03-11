import * as z from "zod";

export const SignUpSchema = z
  .object({
    firstName: z.string().min(1, {
      message: "First name is required.",
    }),
    lastName: z.string().optional(),
    email: z
      .string()
      .min(1, {
        message: "Email is required.",
      })
      .email({ message: "Invalid email address format." }),
    password: z
      .string()
      .min(1, {
        message: "Password is required.",
      })
      .min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z.string().min(1, {
      message: "Confirm password is required.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type SignUpValues = z.infer<typeof SignUpSchema>;

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email({ message: "Invalid email address format." }),
  password: z
    .string()
    .min(1, {
      message: "Password is required.",
    })
    .min(8, { message: "Password must be at least 8 characters." }),
});

export type SignInValues = z.infer<typeof SignInSchema>;

export const ContactSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name is required.",
  }),
  lastName: z.string().optional(),
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email({ message: "Invalid email address format." }),
  message: z.string().min(1, {
    message: "Message is required.",
  }),
});

export type ContactValues = z.infer<typeof ContactSchema>;
