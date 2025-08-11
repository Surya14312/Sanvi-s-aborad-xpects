import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType(); // "POP", "PUSH", or "REPLACE"
  const positions = useRef({}); // Store scroll positions keyed by pathname

  useEffect(() => {
    // Before path changes, save scroll position of current path
    return () => {
      positions.current[pathname] = window.scrollY;
    };
  }, [pathname]);

  useEffect(() => {
    if (navigationType === "POP") {
      // User navigated back or forward: restore saved scroll position or default 0
      const y = positions.current[pathname] || 0;
      window.scrollTo({ top: y, left: 0, behavior: "auto" });
    } else {
      // New navigation (PUSH/REPLACE), scroll to top smoothly
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [pathname, navigationType]);

  return null;
};

export default ScrollToTop;
