import { createContext, useContext, useEffect, useState } from "react";
import {
  addProductToCart,
  ClearCart,
  getCartItems,
  removeItemFromCart,
  updateProductQuantity,
} from "../Services/Cart-service";
import { toast } from "react-toastify";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { AuthContext } from "./Auth.context"; 

const MySwal = withReactContent(Swal);

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const { token } = useContext(AuthContext); 

  const [cartinfo, setCartInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  async function handelAddingProductToCart({ id }) {
    try {
      setIsLoading(true);
      setIsError(false);

      const response = await addProductToCart({ id });

      if (response.success) {
        toast.success(response.data.message);

        const updatedCart = await getCartItems();
        if (updatedCart.success) {
          setCartInfo(updatedCart.data);
        }
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handelAddingFetchCartItem() {
    try {
      setIsLoading(true);
      setIsError(false);

      const response = await getCartItems();
      if (response.success) {
        setCartInfo(response.data);
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handelRemoveItem({ id }) {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        iconColor: "#d33",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const toastId = toast.loading("deleted in progress");
        const response = await removeItemFromCart({ id });
        if (response.success) {
          toast.dismiss(toastId);
          setCartInfo(response.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handelUpdateQuantity({ id, count }) {
    try {
      const toastid2 = toast.loading("Updating product Quantity");

      const response = await updateProductQuantity({ id, count });
      if (response.success) {
        toast.dismiss(toastid2);
        setCartInfo(response.data);
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handelClearCart() {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        iconColor: "#d33",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const toastId = toast.loading("deleted in progress");
        const response = await ClearCart();
        if (response.success) {
          toast.dismiss(toastId);
          setCartInfo(response.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    if (token) {
      handelAddingFetchCartItem();
    } else {
      setCartInfo({ data: [], count: 0 }); 
      setIsLoading(false);
    }
  }, [token]);

  return (
    <CartContext.Provider
      value={{
        cartinfo,
        isLoading,
        isError,
        error,
        setCartInfo,
        handelAddingProductToCart,
        handelAddingFetchCartItem,
        handelRemoveItem,
        handelUpdateQuantity,
        handelClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
