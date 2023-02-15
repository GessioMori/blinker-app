import { UseFormRegisterReturn } from "react-hook-form";

type TextInputProps = {
  placeholder: string;
  register: UseFormRegisterReturn;
  label?: string;
  customClass?: string;
};

export const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  register,
  label,
  customClass,
}: TextInputProps) => {
  return (
    <div className="flex w-full flex-col">
      {label && (
        <label htmlFor={label} className="mb-1 text-sm font-light">
          {label}
        </label>
      )}
      <input
        type="text"
        id={label}
        placeholder={placeholder}
        className={
          customClass ||
          "rounded-md bg-neutral-800 py-2 px-4 text-zinc-400 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#708da038]"
        }
        {...register}
      />
    </div>
  );
};
