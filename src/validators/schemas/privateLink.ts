import { z } from "zod";

export const PrivateLinkBaseSchema = z.object({
  title: z
    .string()
    .min(3, "Title must contain at least 3 characters")
    .max(50, "Title must contain at most 50 characters"),
  url: z.string().url(),
});

export const PrivateLinkSchema = PrivateLinkBaseSchema.extend({
  id: z.number(),
  slug: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  userId: z.number(),
});

export const PrivateLinkUpdateSchema = PrivateLinkBaseSchema.extend({
  id: z.number(),
});

export const PrivateLinkInputSchema = z.object({
  title: z.string().min(3).max(50).optional(),
  url: z.string().url().optional(),
});

export const PrivateLinkResponseSchema = z.array(PrivateLinkSchema);

export type PrivateLinkType = z.infer<typeof PrivateLinkSchema>;
export type PrivateLinkUpdateType = z.infer<typeof PrivateLinkUpdateSchema>;
export type PrivateLinkBaseType = z.infer<typeof PrivateLinkBaseSchema>;
export type PrivateLinkInputType = z.infer<typeof PrivateLinkInputSchema>;
export type PrivateLinkResponseType = z.infer<typeof PrivateLinkResponseSchema>;
