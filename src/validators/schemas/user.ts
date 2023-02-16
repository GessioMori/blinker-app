import { z } from "zod";

export const CreateAccountSchema = z
  .object({
    name: z
      .string({ required_error: "No name received." })
      .min(3, "Name must have at least 3 characters."),
    email: z.string().email("Invalid email address."),
    password: z
      .string({ required_error: "No password received." })
      .min(8, "Password must have at least 8 characters."),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        message: "Passwords do not match",
        path: ["confirmPassword"],
        code: "custom",
      });
    }
  });

export type CreateAccountDataType = z.infer<typeof CreateAccountSchema>;

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z
    .string({ required_error: "No password received." })
    .min(8, "Password must have at least 8 characters."),
});

export type LoginDataType = z.infer<typeof LoginSchema>;

const BlogProviders = z.enum(["DEVGO", "TKDODO"]);

export const UpdateSubscriptionsSchema = z.object({
  blogName: BlogProviders,
  action: z.enum(["add", "remove"]),
});

export type UpdateSubscriptionsDataType = z.infer<
  typeof UpdateSubscriptionsSchema
>;

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  subscriptions: z.array(BlogProviders),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
