import { useMutation } from "react-query";
import { createPrivateLink } from "../../api/privateLink";
import { queryClient } from "../../main";
import { PrivateLinkInputType } from "../../validators/schemas/privateLink";

export const useCreatePrivateLink = () =>
  useMutation({
    mutationFn: (data: PrivateLinkInputType) => createPrivateLink(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["privateLinks"] });
    },
  });
