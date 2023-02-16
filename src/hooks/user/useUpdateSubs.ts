import { useMutation } from "react-query";
import { updateSubscriptions } from "../../api/user";
import { queryClient } from "../../main";
import { UpdateSubscriptionsDataType } from "../../validators/schemas/user";

export const useUpdateSubs = () =>
  useMutation({
    mutationFn: (data: UpdateSubscriptionsDataType) =>
      updateSubscriptions(data),
    onSuccess: () => {
      queryClient.invalidateQueries("auth");
      queryClient.invalidateQueries("blogLinks");
    },
  });
