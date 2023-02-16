import {
  ArrowElbowUpRight,
  Copy,
  Hourglass,
  PencilSimple,
  TrashSimple,
} from "phosphor-react";
import { useState } from "react";
import { useDeletePrivateLink } from "../hooks/privateLink/useDeletePrivateLink";
import { PrivateLinkType } from "../validators/schemas/privateLink";
import { UpdateLinkModal } from "./UpdateLinkModal";

interface PrivateLinkProps {
  link: PrivateLinkType;
}

export const PrivateLink: React.FC<PrivateLinkProps> = ({
  link: { title, url, slug, id },
}) => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isUpdateLinkModalOpen, setIsUpdateLinkModalOpen] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`https://gm3.tech/blinker/pl/${slug}`);
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 1000);
  };

  const handleDelete = async () => {
    await deleteMutation(id);
  };

  const { mutateAsync: deleteMutation, isLoading: isLoadingDelete } =
    useDeletePrivateLink();

  return (
    <>
      <div className="my-1 flex flex-wrap items-center justify-between rounded-md bg-neutral-800 p-4">
        <div>{title}</div>
        <div className="flex w-full justify-around sm:w-40">
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
          <button
            onClick={() => setIsUpdateLinkModalOpen(true)}
            className="rounded-md  border-2 border-transparent p-1 text-neutral-100 hover:border-neutral-100"
          >
            <PencilSimple />
          </button>
          <button
            className="rounded-md  border-2 border-transparent p-1 text-neutral-100 hover:border-neutral-100"
            onClick={() => handleDelete()}
          >
            {isLoadingDelete ? <Hourglass /> : <TrashSimple />}
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
      {isUpdateLinkModalOpen && (
        <UpdateLinkModal
          onClose={() => setIsUpdateLinkModalOpen(false)}
          id={id}
          title={title}
          url={url}
        />
      )}
    </>
  );
};
