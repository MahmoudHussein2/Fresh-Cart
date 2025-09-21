import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../Services/Product-service";
import Loading from "../Loading/Loading";
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "swiper/css";
import RelatedProductSkeleton from "../Skeleton/RelatedProductSkeleton";

export default function RelatedProducts({ productDetails }) {
  const { category } = productDetails;
  const [relatedProduct, setRelatedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function fetchRelatedProduct() {
    try {
      setIsLoading(true);
      const response = await getAllProducts({ category: category._id });
      if (response.success) {
        setRelatedProduct(response.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchRelatedProduct();
  }, []);
  if (isLoading) return <RelatedProductSkeleton/>;
  return (
    <>
      <section className="py-6">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">You may also like</h2>
            <div className="flex gap-3 justify-center items-center">
              <button className="btn prevPtn p-0 size-10 rounded-full flex justify-center items-center ">
                <FontAwesomeIcon icon={faAngleLeft} className="text-xl" />
              </button>
              <button className="nextBtn btn p-0 size-10 rounded-full flex justify-center items-center  ">
                <FontAwesomeIcon icon={faAngleRight} className="text-xl" />
              </button>
            </div>
          </div>
          <div className="">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              loop={true}
              navigation={{ nextEl: ".nextBtn", prevEl: ".prevPtn" }}
              breakpoints={{
                0: {
                  slidesPerView: 1.4,
                },
                480: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
            >
              {relatedProduct.map((product) => (
                <SwiperSlide key={product._id}>
                  <div className="h-full">
                    <Card productDetails={product} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
