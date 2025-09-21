import { apiClient } from "../Utils/ApiClient";

export async function getAllBrands() {
  const options = {
    method: "GET",
    url: "/brands",
  };

  const response = await apiClient.request(options);

  return response;
}


