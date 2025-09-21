import {
  faHeart as faHeartRegular,
  faEye,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as faHeartSolid,
  faCodeCompare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calculateDiscountPercentage } from "../../Utils/CalcDiscount";
import Rating from "../Rating/Rating";
import { Link } from "react-router";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Context/Cart.context";
import { WishListContext } from "../../Context/WishList.context";

export default function Card({ productDetails }) {
  const {
    id,
    imageCover,
    priceAfterDiscount,
    price,
    ratingsAverage,
    title,
    ratingsQuantity,
    category,
  } = productDetails;

  const { handelAddingProductToCart } = useContext(CartContext);
  const {
    handelAddingProductToWishList,
    handelRemoveWishListItem,
    wishListInfo,
  } = useContext(WishListContext);

  const Discount = calculateDiscountPercentage(price, priceAfterDiscount);

  const [localWish, setLocalWish] = useState(false);

  useEffect(() => {
    const inWish = Array.isArray(wishListInfo?.data)
      ? wishListInfo.data.some((item) => item.id === id)
      : false;
    setLocalWish(inWish);
  }, [wishListInfo, id]);

  return (
    <>
      <div className="card group rounded-xl shadow-xl overflow-hidden relative hover:shadow-2xl ">
        <div>
          <Link to={`/Product/${id}`} className="block">
            <img src={imageCover} alt="" className="lg:h-60 h-90 mx-auto" />
          </Link>
        </div>
        <div className="cardContent p-4 space-y-3">
          <div>
            <span className="text-sm text-gray-500">{category.name}</span>
            <h2 className="font-semibold ">
              <Link className="line-clamp-1 " to={`Product/${id}`}>
                {title}
              </Link>
            </h2>
          </div>

          <div className="rating flex gap-2 items-center">
            <Rating rating={ratingsAverage} />
            <span>{ratingsAverage}</span>
            <span>({ratingsQuantity})</span>
          </div>

          <div className="price flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className=" font-bold text-primary-600">
                {priceAfterDiscount ? priceAfterDiscount : price} EGP
              </span>
              {priceAfterDiscount && (
                <del className="text-gray-500">{price}EGP</del>
              )}
            </div>
            <button
              onClick={() => {
                handelAddingProductToCart({ id });
              }}
              className="btn bg-primary-500 text-white p-0 size-8 rounded-full hover:bg-primary-700 shrink-0"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <div className="actions absolute top-4 right-4  flex flex-col gap-2 text-gray-500 *:hover:text-primary-500 *:transition-colors *:duration-200 ">
            <button
              onClick={() => {
                if (localWish) {
                  handelRemoveWishListItem({ id });
                } else {
                  handelAddingProductToWishList({ id });
                }
              }}
              title={localWish ? "Remove from wishlist" : "Add to wishlist"}
            >
              <FontAwesomeIcon
                icon={localWish ? faHeartSolid : faHeartRegular}
                className={localWish ? "text-red-600" : ""}
              />
            </button>

            <button>
              <FontAwesomeIcon icon={faCodeCompare} />
            </button>

            <button>
              <Link to={`Product/${id}`} className="cursor-pointer">
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </button>
          </div>

          {priceAfterDiscount && (
            <div className="badge absolute left-3 top-4 bg-red-500 text-sm text-white rounded-md px-2 py-1">
              <span>{Discount}%</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
