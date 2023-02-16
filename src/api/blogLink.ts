import { api } from ".";
import { BlogLinkResponseSchema } from "../validators/schemas/blogLink";

export const getBlogLinks = async () => {
  const { data: blogLinks } = await api.get("/bl/user");
  const parsedBlogLinks = BlogLinkResponseSchema.parse(blogLinks);
  return parsedBlogLinks;
};
