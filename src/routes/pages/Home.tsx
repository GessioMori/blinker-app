import { ArrowRight, Plus } from "phosphor-react";
import { useState } from "react";
import { BlogLinksContainer } from "../../components/BlogLinksContainer";
import { CreateLinkModal } from "../../components/CreateLinkModal";
import { Header } from "../../components/Header";
import { PrivateLinksContainer } from "../../components/PrivateLinksContainer";
import { UpdateSubsModal } from "../../components/UpdateSubsModal";

export const Home = () => {
  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);
  const [linksType, setLinksType] = useState<"private" | "blog">("private");

  return (
    <>
      {isCreateLinkModalOpen &&
        (linksType === "private" ? (
          <CreateLinkModal onClose={() => setIsCreateLinkModalOpen(false)} />
        ) : (
          <UpdateSubsModal onClose={() => setIsCreateLinkModalOpen(false)} />
        ))}

      <div className="flex w-full flex-col items-center">
        <Header />
        <div className="flex w-full max-w-6xl flex-col items-center p-4 text-zinc-300">
          <div className="flex w-full justify-between px-4">
            <button
              onClick={() => setIsCreateLinkModalOpen(true)}
              className="group relative inline-flex items-center justify-center
              overflow-hidden rounded-lg bg-gradient-to-br from-[#f07e6e] to-[#5ad1cd] p-0.5 text-sm 
               font-bold text-zinc-300  hover:text-zinc-100 focus:outline-none"
            >
              <span
                className="relative flex w-full items-center justify-center gap-2 rounded-md bg-neutral-900 px-3
              py-1.5 transition-all duration-75 ease-in group-hover:bg-opacity-90"
              >
                <Plus size={20} weight="bold" />
              </span>
            </button>

            <button
              onClick={() =>
                setLinksType((current) =>
                  current === "private" ? "blog" : "private"
                )
              }
              className="group relative inline-flex items-center justify-center
              overflow-hidden rounded-lg bg-gradient-to-br from-[#f07e6e] to-[#5ad1cd] p-0.5 text-sm 
               font-bold text-zinc-300  hover:text-zinc-100 focus:outline-none"
            >
              <span
                className="relative flex w-full items-center justify-center gap-2 rounded-md bg-neutral-900 px-3
              py-1.5 transition-all duration-75 ease-in group-hover:bg-opacity-90"
              >
                {linksType === "private" ? "Blog links" : "Private links"}
                <ArrowRight size={20} weight="bold" />
              </span>
            </button>
          </div>
          <div className="flex w-full flex-col items-center">
            {linksType === "private" ? (
              <PrivateLinksContainer />
            ) : (
              <BlogLinksContainer />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
