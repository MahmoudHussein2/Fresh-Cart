import { apiClient } from "../Utils/ApiClient";

export async function getAllCategories() {
  const options = {
    method: "GET",
    url: "/categories",
  };

  const response = await apiClient.request(options);

  return response;
}
export async function getAllSubCategories() {
  const options = {
    method: "GET",
    url: "/subcategories",
  };

  const response = await apiClient.request(options);

  return response;
}


