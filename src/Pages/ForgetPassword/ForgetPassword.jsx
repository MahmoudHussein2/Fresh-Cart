import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faCircleInfo,
  faHeadset,
  faQuestionCircle,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate, useNavigate } from "react-router";
import { useFormik } from "formik";

import * as yup from "yup";
import { sendDataToForgetPassword } from "../../Services/auth-service";
import { toast } from "react-toastify";
import { useState } from "react";

export default function ForgetPassword() {
  const [isExistError, setIsExistError] = useState(null);
  const Navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const schema = yup.object({
    email: yup
      .string()
      .required("email is Required")
      .email("Email is invalid")
      .matches(emailRegex, "Enter valid Email"),
  });

  async function handelForgetPassword(values) {
    try {
      const response = await sendDataToForgetPassword(values.email);

      if (response.success) {
        toast.success("Your code has been sent");
        localStorage.setItem("resetEmail", values.email);

        setTimeout(() => {
          Navigate("/VerifyResetCode");
        }, 1000);
      }
    } catch (error) {
      setIsExistError(error.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: schema,
    onSubmit: handelForgetPassword,
  });
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <form onSubmit={formik.handleSubmit}>
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md text-center">
          <div className="text-primary-600 text-3xl mb-4">
            <FontAwesomeIcon icon={faLock} />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Forgot your password?
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            No worries! Enter your email address and we'll send you a link to
            reset your password.
          </p>

          <div className="email flex flex-col gap-1 ">
            <label htmlFor="email"></label>
            <input
              className="form-control mb-2"
              type="email"
              id="email"
              name="email"
              placeholder="Your registered email address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500">*{formik.errors.email}</p>
            )}
            {isExistError && <p className="text-red-500">*{isExistError}</p>}
          </div>

          <button
            type="submit"
            className="w-full btn bg-primary-600 hover:bg-primary-700  text-white  "
          >
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="mr-2" />
            Send Reset Code
          </button>

          <p className="text-sm mt-4 text-gray-600">
            Remember your password?{" "}
            <Link to={`/Login`} className="text-primary-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </form>

      <div className="mt-6 w-full max-w-md bg-white border border-gray-200 rounded-lg p-4 text-sm text-gray-600 shadow-sm">
        <div className="flex items-center gap-2 mb-2 text-primary-600 font-medium">
          <FontAwesomeIcon icon={faCircleInfo} />
          Security Notice
        </div>
        For your security, a password reset link will be sent to your registered
        email address. The link will expire after 30 minutes.
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
        <div className="bg-white p-6 text-center rounded-xl shadow">
          <div className="text-primary-600 text-2xl mb-3">
            <FontAwesomeIcon icon={faHeadset} />
          </div>
          <h4 className="font-bold mb-2">Contact Support</h4>
          <p className="text-sm text-gray-600 mb-2">
            Our customer support team is available 24/7 to assist you.
          </p>
          <a
            href="#"
            className="text-primary-600 hover:underline text-sm font-semibold"
          >
            Contact Us →
          </a>
        </div>

        <div className="bg-white p-6 text-center rounded-xl shadow">
          <div className="text-primary-600 text-2xl mb-3">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </div>
          <h4 className="font-bold mb-2">FAQs</h4>
          <p className="text-sm text-gray-600 mb-2">
            Find answers to frequently asked questions about your account.
          </p>
          <a
            href="#"
            className="text-primary-600 hover:underline text-sm font-semibold"
          >
            View FAQs →
          </a>
        </div>

        <div className="bg-white p-6 text-center rounded-xl shadow">
          <div className="text-primary-600 text-2xl mb-3">
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
          </div>
          <h4 className="font-bold mb-2">Email Not Received?</h4>
          <p className="text-sm text-gray-600 mb-2">
            Check your spam folder or request a new reset link.
          </p>
          <a
            href="#"
            className="text-primary-600 hover:underline text-sm font-semibold"
          >
            Resend Email →
          </a>
        </div>
      </div>
    </div>
  );
}
