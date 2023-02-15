import { useQuery } from "react-query";
import { getAuth } from "../../api/user";

export const useAuth = () =>
  useQuery({
    queryKey: ["auth"],
    queryFn: () => getAuth(),
  });
