import { z } from "zod";

const BlogProviders = z.enum(["DEVGO", "TKDODO"]);
const BlogProvidersArray = z.array(BlogProviders);

export const BlogLinkSchema = z.object({
  id: z.number(),
  title: z.string(),
  url: z.string(),
  slug: z.string(),
  blogName: BlogProviders,
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const BlogLinkResponseSchema = z.array(BlogLinkSchema);

export type BlogLinkType = z.infer<typeof BlogLinkSchema>;
export type BlogLinkResponseType = z.infer<typeof BlogLinkResponseSchema>;
export type BlogProvidersType = z.infer<typeof BlogProvidersArray>;
