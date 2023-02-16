import { ArrowElbowUpRight, Copy } from "phosphor-react";
import { useState } from "react";
import { BlogLinkType } from "../validators/schemas/blogLink";

interface BlogLinkProps {
  link: BlogLinkType;
}

export const BlogLink: React.FC<BlogLinkProps> = ({
  link: { title, url, slug, blogName },
}) => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`https://gm3.tech/blinker/bl/${slug}`);
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 1000);
  };
  return (
    <>
      <div className="my-1 flex flex-wrap items-center justify-between rounded-md bg-neutral-800 p-4">
        <div>
          {blogName}: {title}
        </div>
        <div className="flex w-full justify-around sm:w-20">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <button className="rounded-md  border-2 border-transparent p-1 text-neutral-100 hover:border-neutral-100">
              <ArrowElbowUpRight />
            </button>
          </a>
          <button
            className="rounded-md  border-2 border-transparent p-1 text-neutral-100 hover:border-neutral-100"
            onClick={() => {
              handleCopy();
            }}
          >
            <Copy />
          </button>
        </div>
      </div>
      {isAlertVisible && (
        <div
          className="fixed bottom-4 right-0 left-0 mr-auto ml-auto mb-4 w-60 rounded-lg border-2 border-[#5ad1cd] 
          bg-neutral-800 p-4 text-center text-sm text-[#5ad1cd]"
          role="alert"
        >
          <span className="font-medium">Link copied to clipboard!</span>
        </div>
      )}
    </>
  );
};
