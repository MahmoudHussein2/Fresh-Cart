import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function ProtectVerifyResetCode({ children }) {
  const navigate = useNavigate();
  const email = localStorage.getItem("resetEmail");

  useEffect(() => {
    if (!email) {
      navigate("/ForgetPassword", { replace: true });
    }
  }, [email, navigate]);

  return children;
}
