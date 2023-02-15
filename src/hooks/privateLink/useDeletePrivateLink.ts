import { useMutation } from "react-query";
import { deletePrivateLink } from "../../api/privateLink";
import { queryClient } from "../../main";

export const useDeletePrivateLink = () =>
  useMutation({
    mutationFn: (id: number) => deletePrivateLink(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["privateLinks"] });
    },
  });
