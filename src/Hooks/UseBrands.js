import { useQuery } from "@tanstack/react-query";
import { getAllBrands } from "../Services/Brands-service";

export default function useBrands() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["brands"],
    queryFn: getAllBrands,

  });

  return { brands: data?.data.data, isLoading, isError, error };
}
