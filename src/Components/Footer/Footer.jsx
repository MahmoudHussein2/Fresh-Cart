import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/imgs/freshcart-logo.svg";
import miniLogo from "../../assets/imgs/mini-logo.png";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="py-5 bg-white border-t-1 border-gray-400/20">
        <div className="container">
          <div className="grid md:grid-cols-5 lg:col-2 gap-4 py-3">
            <div className="space-y-3 xl:col-span-2 ">
              <img src={Logo} alt="FreshCart logo" />
              <p>
                FreshCart is a versatile e-commerce platform offering a wide
                range of products, from clothing to electronics. It provides a
                user-friendly experience for seamless shopping across diverse
                categories.
              </p>
              <ul className="flex gap-4 text-lg text-gray-500 *:hover:text-primary-600 *:transition-colors *:duration-300 *:cursor-pointer">
                <li>
                  <FontAwesomeIcon icon={faFacebookF} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faPinterestP} />
                </li>
              </ul>
            </div>
            <div className="space-y-3 ">
              <h2 className="font-bold text-xl">Categories</h2>
              <ul className="space-y-3  *:hover:text-primary-600 *:transition-colors *:duration-300 *:cursor-pointer">
                <li>
                  <Link to={``} className="flex gap-2 items-center">
                    <span>men`s Fashions</span>
                  </Link>
                </li>
                <li>
                  <Link to={``} className="flex gap-2 items-center">
                    <span>Women`s Fashions</span>
                  </Link>
                </li>
                <li>
                  <Link to={``} className="flex gap-2 items-center">
                    <span>Baby&Toy</span>
                  </Link>
                </li>
                <li>
                  <Link to={``} className="flex gap-2 items-center">
                    <span>Beauty & Health</span>
                  </Link>
                </li>
                <li>
                  <Link to={``} className="flex gap-2 items-center">
                    <span>Electronics</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3 ">
              <h2 className="font-bold text-xl">Quick Links</h2>
              <ul className="space-y-3  *:hover:text-primary-600 *:transition-colors *:duration-300 *:cursor-pointer">
                <li>
                  <Link to={`/About`} className="flex gap-2 items-center">
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/Contact`} className="flex gap-2 items-center">
                    <span>Contact Us</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/Privacy-Policy`}
                    className="flex gap-2 items-center"
                  >
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/Terms`} className="flex gap-2 items-center">
                    <span>Terms of Service</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`ShippingPolicy`}
                    className="flex gap-2 items-center"
                  >
                    <span>Shipping Policy</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h2 className="font-bold text-xl">Customer Service</h2>
              <ul className="space-y-3  *:hover:text-primary-600 *:transition-colors *:duration-300 *:cursor-pointer">
                <li>
                  <Link to={`/Account`} className="flex gap-2 items-center">
                    <span>My Account</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/Orders`} className="flex gap-2 items-center">
                    <span>My Orders</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/WishList`} className="flex gap-2 items-center">
                    <span>Wish List</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/Terms`} className="flex gap-2 items-center">
                    <span>Return & Refused</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`ShippingPolicy`}
                    className="flex gap-2 items-center"
                  >
                    <span>Help Center</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between py-4 border-t-2 border-gray-400/50">
            <p>
              &copy; {new Date().getFullYear()} <strong>Mahmoud Hussein@Route</strong> FreshCart. All rights reserved.
            </p>
            <img className="w-10 animate-bounce" src={miniLogo} alt="FreshCart logo" />
          </div>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full shadow-lg"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </footer>
    </>
  );
}