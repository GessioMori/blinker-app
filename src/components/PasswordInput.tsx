import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Eye, EyeSlash } from "phosphor-react";

type PasswordInputProps = {
  register: UseFormRegisterReturn;
  label?: string;
  placeholder?: string;
};

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  register,
  placeholder,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword((current) => !current);
  };

  return (
    <div className="relative w-full flex-col">
      {label && (
        <label htmlFor={label} className="mb-1 text-sm font-light">
          {label}
        </label>
      )}

      <input
        type={showPassword ? "text" : "password"}
        className="w-full rounded-md bg-neutral-800 py-2 px-4 text-zinc-400 
        placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#708da038]"
        placeholder={placeholder || "Password"}
        id={label}
        {...register}
      />
      {showPassword ? (
        <EyeSlash
          className="absolute right-3 bottom-3 text-lg text-zinc-100 hover:cursor-pointer"
          weight={"bold"}
          onClick={toggleVisibility}
        />
      ) : (
        <Eye
          className="absolute right-3 bottom-3 text-lg text-zinc-100 hover:cursor-pointer"
          weight={"bold"}
          onClick={toggleVisibility}
        />
      )}
    </div>
  );
};
