import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

import { faLock, faGlobe, faCopy } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

import { useContext } from "react";


import { WishListContext } from "../../Context/WishList.context";
import WishListItem from "../../Components/WishListItem/WishListItem";
import PageMetaData from "../../Components/PageMetaData/PageMetaData";
import WishListItemSkeleton from "../../Components/Skeleton/WishListItemSkeleton";
import WishListSkeleton from "../../Components/Skeleton/WishListSkeleton";

export default function WishList() {
  const { wishListInfo, isLoading } = useContext(WishListContext);

  if (isLoading || !wishListInfo) {
    return <WishListSkeleton/>;
  }

  const data = wishListInfo?.data || [];

  return (
    <>
      <PageMetaData title="WishList" />
      <section>
        <div className="container">
          <div className="grid grid-cols-12 gap-4 gap-y-6 py-6">
<div className="left col-span-12 lg:col-span-8 p-4 items-start border-2 border-gray-200 rounded-lg">
  <div className="border-b border-gray-300 pb-3 mb-4">
    <h2 className="text-2xl font-bold text-black/80 mb-2">
      Your Wishlist
    </h2>

    {data.length > 0 && (
      <span className="text-gray-600 block">
        {wishListInfo.count} item in your Wishlist
      </span>
    )}
  </div>

  {data.length > 0 ? (
    <div className="max-h-[80vh] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      {data.map((product) => (
        <WishListItem key={product._id} productInfo={product} />
      ))}
    </div>
  ) : (
    <div className="text-center py-10 space-y-4">
      <p>
        Your Wishlist is Empty{" "}
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-primary-600 ms-2"
        />
      </p>
      <p>
        You can add products to wishlist from{" "}
        <Link to={`/`} className="text-primary-600">
          here
        </Link>
      </p>
    </div>
  )}
</div>


            <div className="right col-span-12 lg:col-span-4 px-4 py-6 shadow-2xl bg-white rounded-lg self-start border-2 border-gray-200 ">
              <div className="space-y-6 w-full">
                <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-4 space-y-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Create New Wishlist
                  </h2>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Wishlist Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Holiday Shopping"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-700">Privacy</p>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input
                          type="radio"
                          name="privacy"
                          className="accent-green-500"
                        />
                        <FontAwesomeIcon icon={faGlobe} />
                        Public
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input
                          type="radio"
                          name="privacy"
                          className="accent-green-500"
                        />
                        <FontAwesomeIcon icon={faLock} />
                        Private
                      </label>
                    </div>
                  </div>

                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-medium transition">
                    Create Wishlist
                  </button>
                </div>

                <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-4 space-y-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    My Wishlists
                  </h2>

                  {wishListInfo.myWishlists?.length > 0 ? (
                    <ul className="space-y-3">
                      {wishListInfo.myWishlists.map((wishlist, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <div>
                            <p className="font-medium text-gray-800">
                              {wishlist.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {wishlist.count} items
                            </p>
                          </div>
                          <a
                            href="#"
                            className="text-green-600 font-medium hover:underline text-sm"
                          >
                            View
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500">No wishlists found.</p>
                  )}
                </div>

                <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-4 space-y-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Share Your Wishlist
                  </h2>
                  <p className="text-sm text-gray-600">
                    Share your wishlist with friends and family
                  </p>

                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm transition">
                      <FontAwesomeIcon icon={faFacebook} />
                      Facebook
                    </button>
                    <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-3 py-2 rounded-md text-sm transition">
                      <FontAwesomeIcon icon={faTwitter} />
                      Twitter
                    </button>
                  </div>

                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                    <input
                      type="text"
                      value="https://freshcart.com/wishlist"
                      readOnly
                      className="flex-1 px-3 py-2 text-sm bg-gray-100 text-gray-700"
                    />
                    <button className="bg-gray-200 hover:bg-gray-300 px-3 py-2 text-sm flex items-center gap-1 text-gray-700 transition">
                      <FontAwesomeIcon icon={faCopy} />
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
