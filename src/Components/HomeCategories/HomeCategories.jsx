import {
  faAngleLeft,
  faAngleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import HomeCategoriesSkeleton from "../Skeleton/HomeCategoriesSkeleton";
import useCategories from "../../Hooks/useCategories";

export default function HomeCategories() {
  const { isLoading, categories } = useCategories();

  if (isLoading) return <HomeCategoriesSkeleton />;

  return (
    <section className="px-2 py-4 relative">
      <div className="container">
        <div className="flex items-center justify-between mb-4">
          <h2 className="lg:text-2xl text-sm font-bold text-gray-600">
            Shop By Categories
          </h2>
          <Link
            className="text-primary-600 font-semibold flex items-center gap-2 lg:text-2xl text-sm "
            to={`/Categories`}
          >
            <span>View All Categories</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".nextBtn",
            prevEl: ".prevPtn",
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={15}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {categories?.map((category) => (
            <SwiperSlide key={category._id}>
              <Link
                to={`/Categories`}
                className="card hover:scale-105 transition-all flex flex-col items-center justify-between gap-2 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl duration-300 cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="size-16 rounded-full object-cover"
                />
                <h3 className="font-semibold text-gray-600 text-center line-clamp-1">
                  {category.name}
                </h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Navigation buttons */}
      <div className="flex gap-3 justify-center items-center">
        <button className="btn prevPtn p-0 size-10 rounded-full flex justify-center items-center ">
          <FontAwesomeIcon icon={faAngleLeft} className="text-xl" />
        </button>
        <button className="nextBtn btn p-0 size-10 rounded-full flex justify-center items-center  ">
          <FontAwesomeIcon icon={faAngleRight} className="text-xl" />
        </button>
      </div>
    </section>
  );
}
