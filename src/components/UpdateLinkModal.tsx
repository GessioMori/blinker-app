import { zodResolver } from "@hookform/resolvers/zod";
import { Hourglass, PlusCircle, XCircle } from "phosphor-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreatePrivateLink } from "../hooks/privateLink/useCreatePrivateLink";
import { useUpdatePrivateLink } from "../hooks/privateLink/useUpdatePrivateLink";
import {
  PrivateLinkBaseSchema,
  PrivateLinkBaseType,
} from "../validators/schemas/privateLink";
import { InputError } from "./InputError";
import { TextInput } from "./TextInput";

interface UpdateLinkModalProps {
  onClose: () => void;
  title: string;
  url: string;
  id: number;
}

export const UpdateLinkModal: React.FC<UpdateLinkModalProps> = ({
  onClose,
  title,
  url,
  id,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<PrivateLinkBaseType>({
    resolver: zodResolver(PrivateLinkBaseSchema),
    defaultValues: {
      title,
      url,
    },
  });

  const { mutateAsync, isLoading } = useUpdatePrivateLink();

  const onSubmit: SubmitHandler<PrivateLinkBaseType> = async (data) => {
    await mutateAsync({ ...data, id })
      .then(() => onClose())
      .catch((error) => {
        setError("url", {
          type: "manual",
          message: error.message,
        });
      });
  };

  return (
    <div className="fixed inset-x-0 inset-y-0 z-20 m-auto flex items-baseline justify-center bg-[#00000091] p-4 ">
      <div
        className="mt-20 flex w-full max-w-2xl flex-col items-center gap-4
      rounded-md bg-neutral-900 p-4 opacity-100"
      >
        <h1 className="text-lg font-bold text-neutral-200">
          Update this private link
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={"flex w-full flex-col gap-2"}
        >
          <TextInput
            register={register("title", { required: true })}
            placeholder="Title"
          />
          {errors.title?.message && <InputError error={errors.title.message} />}
          <TextInput
            register={register("url", { required: true })}
            placeholder="URL"
          />
          {errors.url?.message && <InputError error={errors.url.message} />}
          <div className="mt-4 flex w-full justify-center gap-4">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-md border-2 border-[#5ad1cd] px-4 py-2 font-bold text-[#5ad1cd] hover:bg-[#5ad1cd1e]"
              disabled={isLoading}
            >
              {isLoading ? <Hourglass size={18} /> : <PlusCircle size={18} />}
              {isLoading ? "Updating" : "Update"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-md border-2 border-[#f07e6e] px-4 py-2 font-bold text-[#f07e6e] hover:bg-[#f07e6e1e]"
              disabled={isLoading}
            >
              <XCircle size={18} />
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
