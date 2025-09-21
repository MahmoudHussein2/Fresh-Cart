import { apiClient } from "../Utils/ApiClient";

export async function addProductToCart({ id }) {
  try {
    const options = {
      method: "Post",
      url: `/cart`,
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
export async function getCartItems() {
  try {
    const options = {
      method: "GET",
      url: `/cart`,
    };
    const response = await apiClient.request(options);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function removeItemFromCart({ id }) {
  try {
    const options = {
      method: "DELETE",
      url: `/cart/${id}`,
    };
    const response = await apiClient.request(options);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function updateProductQuantity({ id, count }) {
  try {
    const options = {
      method: "Put",
      url: `/cart/${id}`,
      data: {
        count,
      },
    };
    const response = await apiClient.request(options);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


export async function ClearCart() {
  try {
    const options = {
      method: "DELETE",
      url: `/cart`,
    };
    const response = await apiClient.request(options);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
