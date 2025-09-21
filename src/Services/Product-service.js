import { apiClient } from "../Utils/ApiClient";

export async function getAllProducts({
  page,
  keyword,
  priceGreaterThan,
  priceLessThan,
  sortedBy,
  category,
  brand,
} = {}) {
  try {
    const options = {
      method: "GET",
      url: `/products?${page ? `page=${page}` : ""}${
        keyword ? `&keyword=${keyword}` : ""
      }${priceGreaterThan ? `&price[gte]=${priceGreaterThan}` : ""}${
        priceLessThan ? `&price[lte]=${priceLessThan}` : ""
      }${sortedBy ? `&sort=${sortedBy}` : ""}${
        category ? `&category[in]=${category}` : ""
      }${brand ? `&brand=${brand}` : ""}`,
    };
    const response = await apiClient.request(options);

    

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductById({ id }) {
  try {
    const options = {
      method: "GET",
      url: `/products/${id}`,
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
