import { useQuery } from "react-query";
import { getBlogLinks } from "../../api/blogLink";

export const useGetBlogLinks = () =>
  useQuery({
    queryFn: () => getBlogLinks(),
    queryKey: ["blogLinks"],
  });
