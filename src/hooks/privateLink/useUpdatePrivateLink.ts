import { useMutation } from "react-query";
import { updatePrivateLink } from "../../api/privateLink";
import { queryClient } from "../../main";
import { PrivateLinkUpdateType } from "../../validators/schemas/privateLink";

export const useUpdatePrivateLink = () =>
  useMutation({
    mutationFn: (data: PrivateLinkUpdateType) => updatePrivateLink(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["privateLinks"] });
    },
  });
