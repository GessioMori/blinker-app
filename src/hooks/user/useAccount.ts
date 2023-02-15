import { useMutation } from "react-query";
import { createAccount } from "../../api/user";
import { CreateAccountDataType } from "../../validators/schemas/user";

export const useAccount = () =>
  useMutation({
    mutationFn: (
      createAccountData: Omit<CreateAccountDataType, "confirmPassword">
    ) => createAccount(createAccountData),
    mutationKey: ["createAccount"],
  });
