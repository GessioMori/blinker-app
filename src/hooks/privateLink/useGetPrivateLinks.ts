import { useQuery } from "react-query";
import { getPrivateLinks } from "../../api/privateLink";

export const useGetPrivateLinks = () =>
  useQuery({
    queryFn: () => getPrivateLinks(),
    queryKey: ["privateLinks"],
    keepPreviousData: true,
  });
