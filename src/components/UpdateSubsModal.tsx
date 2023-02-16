import { PlusCircle, XCircle } from "phosphor-react";
import { useAuth } from "../hooks/user/useAuth";
import { useUpdateSubs } from "../hooks/user/useUpdateSubs";
import { BlogProvidersType } from "../validators/schemas/blogLink";
import { UpdateSubscriptionsDataType } from "../validators/schemas/user";

interface UpdateSubsModalProps {
  onClose: () => void;
}

export const UpdateSubsModal: React.FC<UpdateSubsModalProps> = ({
  onClose,
}) => {
  const { mutateAsync, isLoading: isLoadingUpdate } = useUpdateSubs();
  const { data, isLoading: isLoadingUser } = useAuth();

  const handleUpdateSub = async (data: UpdateSubscriptionsDataType) => {
    await mutateAsync(data);
  };

  return (
    <div className="fixed inset-x-0 inset-y-0 z-20 m-auto flex items-baseline justify-center bg-[#00000091] p-4">
      <div
        className="mt-20 flex w-full max-w-lg flex-col items-center gap-4
      rounded-md bg-neutral-900 p-4 opacity-100"
      >
        <h1 className="text-lg font-bold text-neutral-200">
          Select your favorite blogs
        </h1>
        {data && (
          <>
            <div className="flex w-[50%] items-center justify-between text-neutral-200">
              DevGo
              {data.subscriptions.includes("DEVGO") ? (
                <button
                  className="rounded-md border-2 border-[#f07e6e] p-2 text-[#f07e6e] hover:bg-[#f07e6e1e]"
                  onClick={() =>
                    handleUpdateSub({ action: "remove", blogName: "DEVGO" })
                  }
                >
                  <XCircle size={18} />
                </button>
              ) : (
                <button
                  className="rounded-md border-2 border-[#5ad1cd] p-2 text-[#5ad1cd] hover:bg-[#5ad1cd1e]"
                  onClick={() =>
                    handleUpdateSub({ action: "add", blogName: "DEVGO" })
                  }
                >
                  <PlusCircle size={18} />
                </button>
              )}
            </div>
            <div className="flex w-[50%] items-center justify-between text-neutral-200">
              TkDodo
              {data.subscriptions.includes("TKDODO") ? (
                <button
                  className="rounded-md border-2 border-[#f07e6e] p-2 text-[#f07e6e] hover:bg-[#f07e6e1e]"
                  onClick={() =>
                    handleUpdateSub({ action: "remove", blogName: "TKDODO" })
                  }
                >
                  <XCircle size={18} />
                </button>
              ) : (
                <button
                  className="rounded-md border-2 border-[#5ad1cd] p-2 text-[#5ad1cd] hover:bg-[#5ad1cd1e]"
                  onClick={() =>
                    handleUpdateSub({ action: "add", blogName: "TKDODO" })
                  }
                >
                  <PlusCircle size={18} />
                </button>
              )}
            </div>
          </>
        )}

        <button
          type="button"
          onClick={() => onClose()}
          className="flex items-center justify-center gap-2 rounded-md border-2 border-[#f07e6e] 
          px-4 py-2 font-bold text-[#f07e6e] hover:bg-[#f07e6e1e]"
        >
          <XCircle size={18} />
          Close
        </button>
      </div>
    </div>
  );
};
