import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { sendDataToVerfiyCode } from "../../Services/auth-service";
import { sendDataToForgetPassword } from "../../Services/auth-service";

export default function VerifyResetCode() {
  const email = localStorage.getItem("resetEmail");

  const [secondsLeft, setSecondsLeft] = useState(10 * 60);
  const inputRefs = useRef([]);
  const [isExistError, setIsExistError] = useState(null);
  const Navigate = useNavigate();

  const schema = yup.object({
    code: yup
      .array()
      .of(yup.string().length(1, "Each digit must be one character"))
      .min(6, "Code must be 6 digits")
      .required("Code is required"),
  });

  const formik = useFormik({
    initialValues: {
      code: ["", "", "", "", "", ""],
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const fullCode = String(values.code.join(""));

      if (fullCode.length < 6 || values.code.includes("")) {
        toast.error("Please enter the full 6-digit code");
        return;
      }

      try {
        const response = await sendDataToVerfiyCode(fullCode);

        if (response.success) {
          toast.success("Correct code");
          setTimeout(() => {
            Navigate("/ResetPassword");
          }, 1000);
        }
      } catch (error) {
        const msg =
          error.response?.data?.message || error.message || "Invalid Code";
        setIsExistError(msg);
        toast.error(msg);
      }
    },
  });

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-full max-w-md">
        <div className="text-green-600 text-4xl mb-4">
          <FontAwesomeIcon icon={faShieldHalved} />
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Verify Reset Code
        </h2>
        <p className="text-gray-600 text-sm mb-1">
          We've sent a verification code to your email address
        </p>
        {email && <p className="text-green-600 font-medium mb-4">{email}</p>}

        <form onSubmit={formik.handleSubmit}>
          <div className="flex justify-center gap-2 mb-4">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <input
                key={i}
                ref={(el) => (inputRefs.current[i] = el)}
                type="text"
                maxLength="1"
                value={formik.values.code[i]}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^\d?$/.test(val)) {
                    const newCode = [...formik.values.code];
                    newCode[i] = val;
                    formik.setFieldValue("code", newCode);

                    if (val && i < 5) {
                      inputRefs.current[i + 1]?.focus();
                    }
                  }
                }}
                onKeyDown={(e) => {
                  if (
                    e.key === "Backspace" &&
                    !formik.values.code[i] &&
                    i > 0
                  ) {
                    inputRefs.current[i - 1]?.focus();
                  }
                }}
                className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            ))}
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Code expires in{" "}
            <span className="text-green-600 font-medium">
              {formatTime(secondsLeft)}
            </span>
          </p>

          <button
            type="submit"
            className={`w-full py-2 rounded-md font-semibold ${
              secondsLeft === 0
                ? "bg-gray-300 text-white cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
            disabled={secondsLeft === 0}
          >
            Verify Code
          </button>

          {isExistError && (
            <p className="text-red-500 text-sm mt-2">{isExistError}</p>
          )}

          <p className="text-sm text-gray-600 mt-3">Didn't receive the code?</p>
          <button
            type="button"
            disabled={secondsLeft > 0}
            onClick={async () => {
              try {
                const email = localStorage.getItem("resetEmail");
                if (!email) {
                  toast.error("No email found to resend code");
                  return;
                }

                await sendDataToForgetPassword(email);
                toast.success("A new code has been sent to your email.");
                setSecondsLeft(10 * 60);
              } catch (error) {
                toast.error("Failed to resend the code.");
              }
            }}
            className={`text-sm font-medium mb-2 ${
              secondsLeft > 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-green-600 hover:underline"
            }`}
          >
            Resend Code
          </button>

          <div>
            <Link
              to="/login"
              className="text-green-600 hover:underline text-sm font-medium"
            >
              Back to Sign In
            </Link>
          </div>
        </form>
      </div>

      <div className="text-sm text-gray-500 mt-4">
        Need help?{" "}
        <a href="#" className="text-green-600 hover:underline font-medium">
          Contact Support
        </a>
      </div>
    </div>
  );
}
