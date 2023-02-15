import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { Hourglass, UserCircle } from "phosphor-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAccount } from "../hooks/useAccount";
import {
  CreateAccountDataType,
  CreateAccountSchema,
} from "../validators/schemas/user";
import { InputError } from "./InputError";
import { PasswordInput } from "./PasswordInput";
import { TextInput } from "./TextInput";

interface SignUpFormProps {
  toggleForm: () => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ toggleForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<CreateAccountDataType>({
    resolver: zodResolver(CreateAccountSchema),
  });

  const { mutateAsync, isLoading } = useAccount();

  const onSubmit: SubmitHandler<CreateAccountDataType> = (data) => {
    const { email, password } = data;
    mutateAsync({ email, password, name: data.name })
      .then(() => {
        reset();
        toggleForm();
      })
      .catch((error) => {
        if (
          error instanceof AxiosError &&
          error.response?.data?.message === "Email already registered"
        ) {
          setError("email", {
            type: "manual",
            message: "Email already registered",
          });
        } else {
          setError("confirmPassword", {
            type: "manual",
            message: "Some error happened, try again later",
          });
        }
      });
  };

  return (
    <form
      className="flex w-full flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput
        placeholder="Full name"
        register={register("name", { required: true })}
      />
      {errors.name?.message && <InputError error={errors.name.message} />}
      <TextInput
        placeholder="Email"
        register={register("email", { required: true })}
      />
      {errors.email?.message && <InputError error={errors.email.message} />}
      <PasswordInput
        register={register("password", { required: true })}
        placeholder="Password"
      />
      {errors.password?.message && (
        <InputError error={errors.password.message} />
      )}
      <PasswordInput
        register={register("confirmPassword", { required: true })}
        placeholder="Confirm password"
      />
      {errors.confirmPassword?.message && (
        <InputError error={errors.confirmPassword.message} />
      )}

      <button
        className="group relative inline-flex w-full items-center justify-center
          overflow-hidden rounded-lg bg-gradient-to-br from-[#f07e6e] to-[#5ad1cd] p-0.5 text-sm 
           font-bold text-zinc-200 focus:outline-none"
        type="submit"
        disabled={isLoading}
      >
        <span
          className="relative flex w-full items-center justify-center gap-2 rounded-md bg-neutral-900 px-5
              py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-90"
        >
          {isLoading ? <Hourglass size={24} /> : <UserCircle size={24} />}
          {isLoading ? "Creating account..." : "Create account"}
        </span>
      </button>
    </form>
  );
};
