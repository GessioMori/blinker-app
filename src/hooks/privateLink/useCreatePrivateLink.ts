import { useMutation } from "react-query";
import { createPrivateLink } from "../../api/privateLink";
import { queryClient } from "../../main";
import { PrivateLinkBaseType } from "../../validators/schemas/privateLink";

export const useCreatePrivateLink = () =>
  useMutation({
    mutationFn: (data: PrivateLinkBaseType) => createPrivateLink(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["privateLinks"] });
    },
  });
