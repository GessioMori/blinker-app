import { SignIn, UserCircle } from "phosphor-react";
import { useState } from "react";
import { LoginForm } from "../../components/LoginForm";
import { SignUpForm } from "../../components/SignUpForm";

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [accountCreated, setAccountCreated] = useState(false);

  return (
    <div className=" mt-56 flex h-screen items-start justify-center p-4">
      <div
        className="glow-container relative  flex w-full max-w-xl 
        flex-col items-center justify-center gap-4 rounded-md bg-neutral-900 p-6"
      >
        <p className="text-4xl font-bold text-zinc-400 ">BLINKER</p>
        {accountCreated && (
          <p className="w-full text-left text-sm text-zinc-400">
            Your account has been created!
          </p>
        )}
        {isLogin ? (
          <LoginForm />
        ) : (
          <SignUpForm
            toggleForm={() => {
              setIsLogin(true);
              setAccountCreated(true);
            }}
          />
        )}

        <button
          className="flex items-center justify-end gap-2 text-sm text-zinc-400 
          hover:underline disabled:cursor-wait"
          onClick={() => {
            setIsLogin((current) => !current);
            setAccountCreated(false);
          }}
        >
          {isLogin ? (
            <>
              <UserCircle size={18} />
              Sign up
            </>
          ) : (
            <>
              <SignIn size={18} />
              Log in
            </>
          )}
        </button>
      </div>
    </div>
  );
};
