import { Hourglass, SignOut } from "phosphor-react";
import { Navigate, redirect } from "react-router-dom";
import { useLogout } from "../hooks/user/useLogout";

export const Header = () => {
  const { isLoading, mutateAsync, isSuccess } = useLogout();

  const handleLogout = () => {
    mutateAsync();
  };

  if (isSuccess) {
    return <Navigate to={"/login"} />;
  }

  return (
    <header className="flex h-full items-center justify-between py-4 px-8">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold text-zinc-400">BLINKER</div>
      </div>
      <button
        className="group relative inline-flex items-center justify-center
          overflow-hidden rounded-lg bg-gradient-to-br from-[#f07e6e] to-[#5ad1cd] p-0.5 text-sm 
           font-bold text-zinc-300  hover:text-zinc-100 focus:outline-none"
        type="submit"
        disabled={isLoading}
        onClick={handleLogout}
      >
        <span
          className="relative flex w-full items-center justify-center gap-2 rounded-md bg-neutral-900 px-3
              py-1.5 transition-all duration-75 ease-in group-hover:bg-opacity-90"
        >
          {isLoading ? <Hourglass size={24} /> : <SignOut size={24} />}
          Sign out
        </span>
      </button>
    </header>
  );
};
