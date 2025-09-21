import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faShieldHalved,
  faStar,
  faTruckFast,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Loginimg from "../../assets/imgs/login-img.png";

import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from "react-router";
import { useFormik } from "formik";

import * as yup from "yup";

import { API_CONFIG } from "../../Config/base";
import { sendDataToLogin } from "../../Services/auth-service";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/Auth.context";
import { CartContext } from "../../Context/Cart.context";
import PageMetaData from "../../Components/PageMetaData/PageMetaData";

export default function Login() {
  const { handelAddingFetchCartItem } = useContext(CartContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { setToken } = useContext(AuthContext);

  const [isExistError, setIsExistError] = useState(null);

  const [isPassWordShown, setIsPassWordShown] = useState(false);
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
  const schema = yup.object({
    email: yup
      .string()
      .required("email is Required")
      .email("Email is invalid")
      .matches(emailRegex, "Enter valid Email"),
    password: yup
      .string()
      .required("password is Required")
      .matches(
        passwordRegex,
        "password should  be at least 8 characters with numbers and symbols"
      ),
  });

  async function handelLogin(values) {
    try {
      const response = await sendDataToLogin(values);

      if (response.success) {
        toast.success("Welcome Back!");

        setToken(response.data.token);
        if (values.rememberMe) {
          localStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.setItem("token", response.data.token);
        }

        await handelAddingFetchCartItem();

        setTimeout(() => {
          navigate(from);
        }, 3000);
      }
    } catch (error) {
      setIsExistError(error.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: schema,
    onSubmit: handelLogin,
  });

  function handelInputChange(e) {
    if (isExistError) {
      setIsExistError(null);
    }
    formik.handleChange(e);
  }

  return (
    <>
      <PageMetaData title="Login Page | FreshCart" />
      <main className="py-12 overflow-x-hidden">
        <div className="container grid lg:grid-cols-2 lg:gap-12 gap-6  ">
          <div className="leftSide lg:px-0  space-y-8 flex flex-col justify-center">
            <img
              src={Loginimg}
              alt="Freshcart"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg shadow-xl rounded-2xl mx-auto"
            />

            <div className="loginMessage text-center">
              <h2 className="lg:text-2xl text-xl  font-bold">
                FreshCart-Your One-Stop Shop for Fresh Products
              </h2>
              <p className="lg:text-lg text-base mt-2 text-gray-600 ">
                Join thousands of happy customers <br /> who trust FreshCart For
                their daily grocery needs
              </p>
            </div>
            <ul className="*:flex *:items-center *:gap-2 flex justify-center gap-3 items-center text-gray-600 ">
              <li>
                <div className="icon  text-primary-500 shrink-0">
                  <FontAwesomeIcon icon={faTruckFast} />
                </div>
                <div className="content">
                  <h3 className="text-xs lg:text-sm">Free Delivery</h3>
                </div>
              </li>
              <li>
                <div className="icon  text-primary-500  shrink-0">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </div>
                <div className="content">
                  <h3 className="text-xs lg:text-sm">Secure Payment</h3>
                </div>
              </li>
              <li>
                <div className="icon  text-primary-500 shrink-0">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="content">
                  <h3 className="text-xs lg:text-sm">24/7 Support</h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="rightSide bg-white shadow-xl rounded-xl space-y-8 p-5 sm:p-10">
            <div className="text-center">
              <h2 className="text-3xl font-semibold">
                {" "}
                <span className="text-primary-600">Fresh</span>Cart
              </h2>
              <p className="mt-1 text-xl font-bold">Welcome Back!</p>
              <p className="mt-1 text-sm text-gray-500 ">
                Sign in continue your fresh shopping experience
              </p>
            </div>
            <div className="flex flex-col *:flex *:w-full *:justify-center *:gap-2 *:items-center gap-2 *:hover:bg-gray-100 ">
              <button className="btn bg-transparent border border-gray-400/50">
                <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
                <span>Continue with Google</span>
              </button>
              <button className="btn bg-transparent border border-gray-400/50">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
                <span>Continue with Facebook</span>
              </button>
            </div>
            <div className="w-full h-0.5 bg-gray-300/70 relative">
              <span className="absolute text-center  left-1/2 top-1/2 -translate-1/2 px-2 text-gray-500 text-sm bg-white">
                OR Continue with Email
              </span>
            </div>
            <form className="space-y-7 " onSubmit={formik.handleSubmit}>
              <div className="email flex flex-col gap-1">
                <label htmlFor="email">Email Address</label>

                <div className="relative">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    className="form-control ps-10 pe-10 sm:ps-12 sm:pe-12 py-2 outline-0 border rounded-md border-gray-400/40 focus:border-green-500 focus:outline-none w-full"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    *{formik.errors.email}
                  </p>
                )}
              </div>

              <div className="password flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="password">Password</label>
                  <Link
                    to="/ForgetPassword"
                    className="text-green-500 text-sm hover:underline"
                  >
                    Forget password?
                  </Link>
                </div>

                <div className="relative">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => {
                      setIsPassWordShown(!isPassWordShown);
                    }}
                  >
                    {isPassWordShown ? (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    ) : (
                      <FontAwesomeIcon icon={faEye} />
                    )}
                  </button>

                  <input
                    className="form-control ps-10 pe-10 sm:ps-12 sm:pe-12 py-2 outline-0 border rounded-md border-gray-400/40 focus:border-green-500 focus:outline-none w-full"
                    type={isPassWordShown ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={handelInputChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    *{formik.errors.password}
                  </p>
                )}
                {isExistError && (
                  <p className="text-red-500">*{isExistError}</p>
                )}
              </div>

              <div className="rememberMe ">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    className="accent-green-600 size-4"
                    value={formik.values.rememberMe}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <label htmlFor="rememberMe">keep me signed in</label>
                </div>
              </div>
              <button
                className="btn flex items-center gap-2 w-full justify-center bg-green-600 hover:bg-green-700 text-white"
                type="submit"
              >
                <span>Sign In</span>
              </button>
            </form>
            <p className="text-center pt-8 border-t border-gray-300/50">
              New to FreshCart?{" "}
              <Link className="text-green-500 " to={`/SignUp`}>
                Create an account
              </Link>
            </p>
            <ul className="flex gap-4 items-center justify-center text-gray-600 *:flex *:gap-2 *:items-center">
              <li>
                <FontAwesomeIcon icon={faLock} />
                <span className="text-xs lg:text-sm">SSL Secure</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faUsers} />
                <span className="text-xs lg:text-sm">50K+users</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faStar} />
                <span className="text-xs lg:text-sm">4.9 Rating</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
