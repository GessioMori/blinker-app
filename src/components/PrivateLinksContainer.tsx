import { useGetPrivateLinks } from "../hooks/privateLink/useGetPrivateLinks";
import { PrivateLink } from "./PrivateLink";

export const PrivateLinksContainer = () => {
  const { data, isLoading } = useGetPrivateLinks();

  if (data) {
    return (
      <div className="flex w-full max-w-6xl flex-col items-stretch p-4 text-zinc-300">
        {data
          .sort((a, b) => {
            return (
              new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
            );
          })
          .map((link) => (
            <PrivateLink key={link.id} link={link} />
          ))}
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>Error</div>;
};
