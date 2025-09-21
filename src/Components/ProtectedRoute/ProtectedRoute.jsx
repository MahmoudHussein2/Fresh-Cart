import { useContext } from "react";
import { AuthContext } from "../../Context/Auth.context";
import { Navigate, useLocation } from "react-router";

export default function ProtectedRoute({ children }) {
  const { token } = useContext(AuthContext);

  const location = useLocation();

  if (token == null) {
    return <Navigate to="/Login" state={{ from: location }} replace />;
  } else {
    return children;
  }
}
