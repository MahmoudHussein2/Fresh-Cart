import { useQuery } from "@tanstack/react-query";
import { getAllSubCategories } from "../Services/Categories-service";

export default function useSubcategories() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["subcategories"],
    queryFn: getAllSubCategories,
  });

  return { subcategories: data?.data.data, isError, error, isLoading };
}
