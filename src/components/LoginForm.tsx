import { Hourglass, SignIn } from "phosphor-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginDataType, LoginSchema } from "../validators/schemas/user";
import { InputError } from "./InputError";
import { PasswordInput } from "./PasswordInput";
import { TextInput } from "./TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../hooks/useLogin";
import { Navigate } from "react-router-dom";
import { AxiosError } from "axios";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginDataType>({
    resolver: zodResolver(LoginSchema),
  });

  const { mutateAsync, data: isLoggedIn, isLoading } = useLogin();

  const onSubmit: SubmitHandler<LoginDataType> = (data) => {
    const { email, password } = data;
    mutateAsync({ email, password }).catch((error) => {
      if (error instanceof AxiosError && error.response?.status === 401) {
        setError("password", {
          type: "manual",
          message: "Username and/or password incorrect",
        });
      } else {
        setError("password", {
          type: "manual",
          message: "Some error happened, try again later",
        });
      }
    });
  };

  if (isLoggedIn !== undefined) {
    return <Navigate to={"/"} />;
  }

  return (
    <form
      className="flex w-full flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
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
          {isLoading ? <Hourglass size={24} /> : <SignIn size={24} />}
          {isLoading ? "Logging in..." : "Log in"}
        </span>
      </button>
    </form>
  );
};
