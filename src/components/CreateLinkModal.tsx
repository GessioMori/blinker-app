import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  PrivateLinkBaseSchema,
  PrivateLinkBaseType,
} from "../validators/schemas/privateLink";
import { InputError } from "./InputError";
import { TextInput } from "./TextInput";

interface CreateLinkModalProps {
  onClose: () => void;
}

export const CreateLinkModal: React.FC<CreateLinkModalProps> = ({
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<PrivateLinkBaseType>({
    resolver: zodResolver(PrivateLinkBaseSchema),
  });

  const onSubmit: SubmitHandler<PrivateLinkBaseType> = (data) => {
    console.log(data);
  };

  return (
    <div className="fixed inset-x-0 inset-y-0 z-20 m-auto flex items-baseline justify-center bg-[#00000091] p-4 ">
      <div
        className="mt-20 flex w-full max-w-2xl flex-col items-center gap-4
      rounded-md bg-neutral-900 p-4 opacity-100"
      >
        <h1>Create private link</h1>
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
        </form>
        <button type="button" onClick={onClose} className="bg-blue-400">
          CLOSE
        </button>
      </div>
    </div>
  );
};
