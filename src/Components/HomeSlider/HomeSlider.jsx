import { Swiper, SwiperSlide } from "swiper/react";

import sliderImg from "../../assets/imgs/home-slider-1.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router";

export default function HomeSlider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${sliderImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overLay py-32 bg-gradient-to-r from-primary-600/95 to-primary-600/40">
              <div className="container text-white space-y-4">
                <h3 className="text-3xl font-bold">
                  Fresh Products Delivered <br /> to your Door
                </h3>
                <p>Get 20% for your first order</p>
                <div className="space-x-4">
                  <button className="btn text-primary-600 border-2 border-gray-100 bg-white hover:bg-gray-200"><Link to={`FeaturedProducts`}>Shop Now</Link></button>
                  <button className="btn bg-transparent border-2 border-gray-100 text-white hover:bg-white hover:text-primary-600  "><Link to={`Deals`}>View Deals</Link></button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${sliderImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overLay py-32 bg-gradient-to-r from-primary-600/95 to-primary-600/40">
              <div className="container text-white space-y-4">
<h3 className="text-3xl font-bold">
  Organic Goodness <br /> at Your Doorstep
</h3>
<p>Claim your 20% welcome discount now</p>

                <div className="space-x-4">
                  <button className="btn text-primary-600 border-2 border-gray-100 bg-white hover:bg-gray-200"><Link to={`FeaturedProducts`}>Shop Now</Link></button>
                  <button className="btn bg-transparent border-2 border-gray-100 text-white hover:bg-white hover:text-primary-600  "><Link to={`Deals`}>View Deals</Link></button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${sliderImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overLay py-32 bg-gradient-to-r from-primary-600/95 to-primary-600/40">
              <div className="container text-white space-y-4">
                <h3 className="text-3xl font-bold">
                  Fresh Products Delivered <br /> to your Door
                </h3>
                <p>Get 20% for your first order</p>
                <div className="space-x-4">
                  <button className="btn text-primary-600 border-2 border-gray-100 bg-white hover:bg-gray-200"><Link to={`FeaturedProducts`}>Shop Now</Link></button>
                  <button className="btn bg-transparent border-2 border-gray-100 text-white hover:bg-white hover:text-primary-600  "><Link to={`Deals`}>View Deals</Link></button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
