import { useGetBlogLinks } from "../hooks/blogLink/useGetBlogLinks";
import { BlogLink } from "./BlogLink";

export const BlogLinksContainer = () => {
  const { data, isLoading } = useGetBlogLinks();

  if (data) {
    return (
      <div className="flex w-full max-w-6xl flex-col items-stretch p-4 text-zinc-300">
        {data
          .sort((a, b) => {
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          })
          .map((link) => (
            <BlogLink key={link.id} link={link} />
          ))}
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>Error</div>;
};
