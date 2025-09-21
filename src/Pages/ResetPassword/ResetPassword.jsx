import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router"; 

import { useNavigate } from "react-router"; 
import { useFormik } from "formik";
import * as yup from "yup";
import { sendDataToResetPassword } from "../../Services/auth-service";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [isExistError, setIsExistError] = useState(null);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

  const schema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Email is invalid")
      .matches(emailRegex, "Enter a valid email"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Password must be at least 8 characters with uppercase, number and symbol"
      ),
  });

  async function handelResetPassword(values) {
    try {
      const response = await sendDataToResetPassword(values);
      console.log(response);
      
      if (response.success) {
        toast.success("You have reset your password");
        setTimeout(() => {
          navigate("/Login");
        }, 3000);
      }
    } catch (error) {
      const msg = error?.response?.data?.message || error.message;
      setIsExistError(msg);
      toast.error(msg);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: handelResetPassword,
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-md p-8 text-center">
        <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-green-100 mb-4">
          <FontAwesomeIcon icon={faKey} className="text-green-600 text-2xl" />
        </div>

        <h2 className="text-2xl font-bold mb-2">Reset Password</h2>
        <p className="text-gray-500 mb-6">
          Enter your email address and new password to reset your account
          password.
        </p>

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4 text-left">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Email Address
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute top-3.5 left-3 text-gray-400"
              />
              <input
                type="email"
                placeholder="Enter your email address"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control w-full pl-10 pr-4 py-2"
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div className="mb-6 text-left">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              New Password
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faLock}
                className="absolute top-3.5 left-3 text-gray-400"
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control w-full pl-10 pr-10 py-2"
              />
              <button
                type="button"
                className="absolute top-3.5 right-3 text-gray-400"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            )}
<ul className="text-xs text-gray-400 mt-2 space-y-1 ml-1">
  <li>• Minimum 8 characters</li>
  <li>• At least one uppercase letter (A–Z)</li>
  <li>• At least one number (0–9)</li>
  <li>• At least one special character (! @ # $ % ^ & *)</li>
  <li>• Only letters, numbers, and the symbols ! @ # $ % ^ & * are allowed</li>
</ul>

          </div>

          {isExistError && (
            <p className="text-red-500 text-sm mb-2">{isExistError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-200"
          >
            Reset Password
          </button>
        </form>

        <p className="text-sm mt-6">
          Remember your password?{" "}
          <Link
            to="/Login"
            className="text-green-600 font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Need help?{" "}
          <a href="#" className="text-green-600 hover:underline">
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
}
