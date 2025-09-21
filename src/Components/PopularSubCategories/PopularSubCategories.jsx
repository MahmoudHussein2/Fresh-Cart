import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { PopularSubCategoriesSkeleton } from "../Skeleton/PopularSubCategoriesSkeleton";
import useSubcategories from "../../Hooks/useSubcategories";

export default function PopularSubCategories() {
  const { isLoading, subcategories, isError, error } = useSubcategories();

  if (isLoading) return <PopularSubCategoriesSkeleton />;
  if (isError)
    return (
      <p className="text-red-500 text-center">{error?.message || "حدث خطأ"}</p>
    );

  return (
    <section className="bg-gray-100 py-6">
      <div className="container   ">
        <div className="flex items-center justify-between mb-6">
          <h2 className="lg:text-2xl text-base font-bold text-gray-600 mb-6">
            Popular Subcategories
          </h2>

          <div className="flex gap-3 justify-center items-center">
            <button className="btn prevPtn p-0 size-10 rounded-full flex justify-center items-center ">
              <FontAwesomeIcon icon={faAngleLeft} className="text-xl" />
            </button>
            <button className="nextBtn btn p-0 size-10 rounded-full flex justify-center items-center  ">
              <FontAwesomeIcon icon={faAngleRight} className="text-xl" />
            </button>
          </div>
        </div>

        <div className="py-4">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            loop={true}
            navigation={{ nextEl: ".nextBtn", prevEl: ".prevPtn" }}
            breakpoints={{
              0: { slidesPerView: 1.4 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 4 },
            }}
          >
            {subcategories?.map((category) => (
              <SwiperSlide key={category._id}>
                <div
                  to={`/Category/${category._id}`}
                  className="card hover:scale-105 transition-all text-center flex flex-col items-center justify-between gap-2 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl duration-300 cursor-pointer"
                >
                  <div className="size-12 bg-primary-400 rounded-full text-primary-700 flex items-center justify-center">
                    <FontAwesomeIcon icon={faShirt} />
                  </div>
                  <h3 className="font-semibold text-gray-600 line-clamp-1">
                    {category.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
