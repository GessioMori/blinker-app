import { useMutation } from "react-query";
import { logout } from "../../api/user";

export const useLogout = () =>
  useMutation({
    mutationFn: () => logout(),
    mutationKey: ["login"],
  });
