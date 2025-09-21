// src/Components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 100); 
  }, [pathname]);

  return null;
}
