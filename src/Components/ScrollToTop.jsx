// src/components/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // ⬇ Force scroll to the top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // ← instant jump
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;