import { apiClient } from "../Utils/ApiClient";

export async function addProductToWishList({ id }) {
  try {
    const options = {
      method: "Post",
      url: `/wishlist`,
      data: {
        productId: id,
      },
    };
    const response = await apiClient.request(options);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getWishListItems() {
  try {
    const options = {
      method: "GET",
      url: `/wishlist`,
    };
    const response = await apiClient.request(options);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function removeItemFromWishList({ id }) {
  try {
    const options = {
      method: "DELETE",
      url: `/wishlist/${id}`,
    };
    const response = await apiClient.request(options);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
