import { useQuery } from "@tanstack/react-query";

import { getProductById } from "../Services/Product-service";

export default function UseProductDetails(id) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: () =>
      getProductById({
        id,
      }),
  });

  return { productDetails: data?.data.data, isLoading, isError, error };
}
