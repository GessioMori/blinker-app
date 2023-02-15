import { useMutation } from "react-query";
import { login } from "../api/user";
import { LoginDataType } from "../validators/schemas/user";

export const useLogin = () =>
  useMutation({
    mutationFn: (loginData: LoginDataType) => login(loginData),
    mutationKey: ["login"],
  });
