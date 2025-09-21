import {
  faHeadphonesSimple,
  faRotateRight,
  faShieldHalved,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function HomeFeatures() {
  return (
    <>
      <section className="bg-gray-100 shadow">
        <div className="container p-7 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 ">
          <div className="featuresCard   flex items-center px-4  gap-2 bg-white shadow-lg p-4 border border-gray-100  rounded-xl hover:shadow-xl transition-shadow duration-300s">
            <span className="size-10 rounded-full bg-primary-400 flex justify-center items-center text-primary-800 shrink-0 ">
              <FontAwesomeIcon icon={faTruck} className="text-xls" />
            </span>
            <div className="cardText min-w-50 ">
              <h2 className="font-bold">Free Delivery</h2>
              <p className="text-gray-600 text-sm">Orders $50 or more</p>
            </div>
          </div>
          <div className="featuresCard   flex items-center px-4  gap-2 bg-white shadow-lg p-4 border border-gray-100  rounded-xl hover:shadow-xl transition-shadow duration-300s">
            <span className="size-10 rounded-full bg-primary-400 flex justify-center items-center text-primary-800 shrink-0 ">
              <FontAwesomeIcon icon={faRotateRight} className="text-xls" />
            </span>
            <div className="cardText w-fit">
              <h2 className="font-bold">30 Days Return</h2>
              <p className="text-gray-600 text-sm ">Satisfaction guaranteed</p>
            </div>
          </div>
          <div className="featuresCard   flex items-center px-4  gap-2 bg-white shadow-lg p-4 border border-gray-100  rounded-xl hover:shadow-xl transition-shadow duration-300s">
            <span className="size-10 rounded-full bg-primary-400 flex justify-center items-center text-primary-800 shrink-0 ">
              <FontAwesomeIcon icon={faShieldHalved} className="text-xls" />
            </span>
            <div className="cardText w-fit">
              <h2 className="font-bold">Secure Payment</h2>
              <p className="text-gray-600 text-sm">100% protected checkout</p>
            </div>
          </div>

          <div className="featuresCard   flex items-center px-4  gap-2 bg-white shadow-lg p-4 border border-gray-100  rounded-xl hover:shadow-xl transition-shadow duration-300s">
            <span className="size-10 rounded-full bg-primary-400 flex justify-center items-center text-primary-800 shrink-0 ">
              <FontAwesomeIcon icon={faHeadphonesSimple} className="text-xls" />
            </span>
            <div className="cardText w-fit">
              <h2 className="font-bold">24/7 Support</h2>
              <p className="text-gray-600 text-sm">Ready to help anytime</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
