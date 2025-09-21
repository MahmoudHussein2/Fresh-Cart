import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  addProductToWishList,
  getWishListItems,
  removeItemFromWishList,
} from "../Services/WishList-service";

import { AuthContext } from "./Auth.context";

const MySwal = withReactContent(Swal);

export const WishListContext = createContext(null);

export default function WishListProvider({ children }) {
  const { token } = useContext(AuthContext); 

  const [wishListInfo, setWishListInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  async function handelAddingProductToWishList({ id }) {
    try {
      setIsLoading(true);
      setIsError(false);

      const response = await addProductToWishList({ id });

      if (response.success) {
        toast.success(response.data.message);

        const updatedWishList = await getWishListItems();

        if (updatedWishList.success) {
          setWishListInfo(updatedWishList.data);
        }
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handelAddingFetchWishListItem() {
    try {
      setIsLoading(true);
      setIsError(false);

      const response = await getWishListItems();
      if (response.success) {
        setWishListInfo(response.data);
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handelRemoveWishListItem({ id }) {
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
        const response = await removeItemFromWishList({ id });
        if (response.success) {
          toast.dismiss(toastId);
          setWishListInfo(response.data);
          handelAddingFetchWishListItem();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (token) {
      handelAddingFetchWishListItem();
    } else {
      setWishListInfo({ data: [], count: 0 });
      setIsLoading(false);
    }
  }, [token]);

  return (
    <WishListContext.Provider
      value={{
        wishListInfo,
        isLoading,
        isError,
        error,
        handelAddingProductToWishList,
        handelAddingFetchWishListItem,
        handelRemoveWishListItem,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}
