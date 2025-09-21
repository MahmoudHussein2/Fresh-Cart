import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faShirt } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function PopularSubCategories({ subcategories }) {
  return (
    <section className="bg-gray-100 py-6">
      <div className="container">
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

export function PopularSubCategoriesSkeleton() {
  const skeletonCount = 4;

  return (
    <section className="bg-gray-100 py-6">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <div className="h-8 w-60 bg-gray-200 rounded animate-pulse" />
          <div className="flex gap-3 justify-center items-center">
            <div className="size-10 rounded-full bg-gray-200 animate-pulse" />
            <div className="size-10 rounded-full bg-gray-200 animate-pulse" />
          </div>
        </div>
        <div className="py-4 flex gap-4">
          {Array.from({ length: skeletonCount }).map((_, idx) => (
            <div
              key={idx}
              className="card flex flex-col items-center justify-between gap-2 bg-white p-6 rounded-xl shadow-lg animate-pulse w-40"
            >
              <div className="size-12 bg-gray-200 rounded-full mb-2" />
              <div className="h-4 w-20 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
