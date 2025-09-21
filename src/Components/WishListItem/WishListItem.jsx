import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../Rating/Rating";
import { useContext } from "react";
import { WishListContext } from "../../Context/WishList.context";
import { CartContext } from "../../Context/Cart.context";

export default function WishListItem({ productInfo }) {
  const { handelAddingProductToCart } = useContext(CartContext);
  const { handelRemoveWishListItem } = useContext(WishListContext);

  if (!productInfo) return null;

  const {
    _id: id,
    imageCover,
    title,
    category,
    ratingsAverage,
    price,
    priceAfterDiscount,
  } = productInfo;

  return (
    <div className="cartItem grid grid-cols-12 border-b border-gray-200 py-5 items-center">
      <div className="col-span-12 md:col-span-6 px-4">
        <div className="flex gap-4 items-center">
          <img
            src={imageCover}
            alt={title || "Product Image"}
            className="w-20 h-20 object-cover rounded-lg shrink-0 "
          />
          <div className="space-y-1">
            <p className="text-sm text-gray-500">{category?.name || "Category"}</p>
            <h3 className="text-base font-semibold text-black line-clamp-2">
              {title || "Unnamed Product"}
            </h3>
            <div className="flex items-center gap-2">
              <Rating rating={ratingsAverage || 0} />
              <span className="text-sm text-gray-600">
                {ratingsAverage?.toFixed(1) || "0.0"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 px-4 mt-4 md:mt-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

          <div className="flex items-center gap-2 font-semibold text-primary-600 text-center sm:text-start">
            {priceAfterDiscount ? (
              <>
                <span className="text-green-600">{priceAfterDiscount} EGP</span>
                <del className="text-sm text-gray-500">{price} EGP</del>
              </>
            ) : (
              <span>{price} EGP</span>
            )}
          </div>


          <div className="flex gap-3 w-full sm:w-auto justify-center sm:justify-end items-center">
            <button
              onClick={() => handelAddingProductToCart({ id })}
              className="w-full sm:w-auto px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-sm transition"
            >
              Add to cart
            </button>

            <button
              onClick={() => handelRemoveWishListItem({ id })}
              title="Remove from wishlist"
              className="text-red-600 hover:text-red-800 transition text-lg"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
