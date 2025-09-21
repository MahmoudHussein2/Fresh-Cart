import { useQuery } from "@tanstack/react-query";

import { getAllCategories } from "../Services/Categories-service";

export default function useCategories() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,

  });

  return { categories: data?.data.data, isLoading, isError, error };
}

