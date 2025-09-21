import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faStar,
  faTruckFast,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import reviewimg from "../../assets/imgs/review-author.png";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";

import * as yup from "yup";

import { checkPasswordStrength } from "../../Utils/Password-utils";
import { API_CONFIG } from "../../Config/base";
import { sendDataToSignup } from "../../Services/auth-service";
import { toast } from "react-toastify";
import { useState } from "react";
import PageMetaData from "../../Components/PageMetaData/PageMetaData";

export default function SignUp() {
  const [isExistError, setIsExistError] = useState(null);
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(\+2)?01[0125][0-9]{8}$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
  const schema = yup.object({
    name: yup
      .string()
      .required("name is Required")
      .min(3, "Name must be more than 3 characters")
      .max(20, "Name must be less than 20 characters"),
    email: yup
      .string()
      .required("email is Required")
      .email("Email is invalid")
      .matches(emailRegex, "Enter valid Email"),
    phone: yup
      .string()
      .required("Phone Number is Required")
      .matches(phoneRegex, "ًWe accept Egyptian phone numbers only"),
    password: yup
      .string()
      .required("password is Required")
      .matches(
        passwordRegex,
        "password should  be at least 8 characters with numbers and symbols"
      ),
    rePassword: yup
      .string()
      .required("confirm password is Required")
      .oneOf([yup.ref("password")], "passwords should be the same"),
    terms: yup.boolean().oneOf([true], "you should agree with our terms"),
  });

  async function handelSignUp(values) {
    try {
      const response = await sendDataToSignup(values);
      if (response.success) {
        toast.success("Your Account has been created");

        setTimeout(() => {
          navigate("/Login");
        }, 3000);
      }
    } catch (error) {
      setIsExistError(error.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
    validationSchema: schema,
    onSubmit: handelSignUp,
  });

  const passwordStrength = checkPasswordStrength(formik.values.password);

  return (
    <>
      <PageMetaData title="Sign Up Page | FreshCart" />
      <main className="py-12 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 lg:gap-12">
          <div className="leftSide lg:px-0 px-10 space-y-8">
            <div className="welcomeMessage">
              <h2 className="lg:text-4xl text-2xl  font-bold">
                Welcome to <span className="text-green-500">FreshCart</span>
              </h2>
              <p className="lg:text-lg text-base mt-2">
                Join thousands of happy customers who enjoy fresh groceries
                delivered right to their doorstep.
              </p>
            </div>
            <ul className="*:flex *:items-center *:gap-3 space-y-5">
              <li>
                <div className="icon size-12 rounded-full bg-green-400 text-xl flex items-center justify-center text-green-700 shrink-0">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="content">
                  <h3 className="font-semibold">Premium Quality</h3>
                  <p className="text-gray-600">
                    Premium Quality products sourced from trusted suppliers
                  </p>
                </div>
              </li>
              <li>
                <div className="icon size-12 rounded-full bg-green-400 text-base flex items-center justify-center text-green-700 shrink-0">
                  <FontAwesomeIcon icon={faTruckFast} />
                </div>
                <div className="content">
                  <h3 className="font-semibold">Fast Delivery</h3>
                  <p className="text-gray-600">
                    Same-day Delivery available in most areas{" "}
                  </p>
                </div>
              </li>
              <li>
                <div className="icon size-12 rounded-full bg-green-400 text-xl flex items-center justify-center text-green-700 shrink-0">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </div>
                <div className="content">
                  <h3 className="font-semibold">Secure shopping</h3>
                  <p className="text-gray-600">
                    Your date and payment are completely secure
                  </p>
                </div>
              </li>
            </ul>
            <div className="review bg-white shadow-2xl p-6 rounded-xl">
              <div className="flex items-center gap-3">
                <img
                  src={reviewimg}
                  alt="sarah johnson image"
                  className="w-12 rounded-full"
                />
                <div>
                  <h3>Sarah Jonson</h3>
                  <div>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mt-4">
                <p>
                  "FreshCart has transformed my shopping experience. The quality
                  of the products is outstanding , and the delivery is always on
                  time. Highly recommend"
                </p>
              </blockquote>
            </div>
          </div>
          <div className="rightSide bg-white shadow-xl rounded-xl space-y-8 p-5 sm:p-10">
            <div className="text-center">
              <h2 className="lg:text-3xl text-xl  font-semibold">
                Create Your Account
              </h2>
              <p className="mt-1">Start your fresh journey with us today</p>
            </div>
            <div className="flex *:flex *:w-full *:justify-center *:gap-2 *:items-center gap-2 *:hover:bg-gray-100 ">
              <button className="btn bg-transparent border border-gray-400/50">
                <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
                <span>Google</span>
              </button>
              <button className="btn bg-transparent border border-gray-400/50">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
                <span>Facebook</span>
              </button>
            </div>
            <div className="w-full h-0.5 bg-gray-300/70 relative">
              <span className="absolute left-1/2 top-1/2 -translate-1/2 px-4 bg-white">
                or
              </span>
            </div>
            <form className="space-y-7 " onSubmit={formik.handleSubmit}>
              <div className="name flex flex-col gap-1 ">
                <label htmlFor="name">Name*</label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="EX:Mahmoud"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500">*{formik.errors.name}</p>
                )}
              </div>
              <div className="email flex flex-col gap-1 ">
                <label htmlFor="email">Email*</label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="EX:MahmoudHussein"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500">*{formik.errors.email}</p>
                )}
                {isExistError && (
                  <p className="text-red-500">*{isExistError}</p>
                )}
              </div>
              <div className="phone flex flex-col gap-1 ">
                <label htmlFor="phone">Phone*</label>
                <input
                  className="form-control"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="EX:+2 01024443168"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500">*{formik.errors.phone}</p>
                )}
              </div>
              <div className="password flex flex-col gap-1 ">
                <label htmlFor="password">Password*</label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create a strong password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.values.password !== "" && (
                  <div className="password-strength flex gap-2 items-center mt-2">
                    <div className="bar rounded-2xl overflow-hidden w-full h-1 bg-gray-200">
                      <div
                        className={`progressBar ${passwordStrength.width} h-full ${passwordStrength.background}`}
                      ></div>
                    </div>
                    <span className="text-nowrap w-28 text-center">
                      {passwordStrength.text}
                    </span>
                  </div>
                )}

                {formik.touched.password && formik.errors.password ? (
                  <p className="text-red-500">*{formik.errors.password}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="rePassword flex flex-col gap-1 ">
                <label htmlFor="rePassword">Confirm password*</label>
                <input
                  className="form-control"
                  type="password"
                  id="rePassword"
                  name="rePassword"
                  placeholder="Must match the password"
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.rePassword && formik.errors.rePassword && (
                  <p className="text-red-500">*{formik.errors.rePassword}</p>
                )}
              </div>
              <div className="term ">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    className="accent-green-600 size-4"
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor="terms">
                    I agree to the{" "}
                    <Link className="text-green-500 underline" to={`/Terms`}>
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      className="text-green-500 underline"
                      to={`/Privacy-Policy`}
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                {formik.touched.terms && formik.errors.terms && (
                  <p className="text-red-500 mt-2">*{formik.errors.terms}</p>
                )}
              </div>
              <button
                className="btn flex items-center gap-2 w-full justify-center bg-green-600 hover:bg-green-700 text-white"
                type="submit"
              >
                <FontAwesomeIcon icon={faUserPlus} />
                <span>Create My Account</span>
              </button>
            </form>
            <p className="text-center pt-8 border-t border-gray-300/50">
              Already have an account?{" "}
              <Link className="text-green-500 underline" to={`/Login`}>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
