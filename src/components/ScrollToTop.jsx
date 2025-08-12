import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef({});

  useEffect(() => {
    // Save scroll position before route change
    return () => {
      positions.current[pathname] = window.scrollY;
    };
  }, [pathname]);

  useEffect(() => {
    const targetY =
      navigationType === "POP" ? positions.current[pathname] || 0 : 0;

    // Smooth but quick scroll
    const scrollDuration = 300; // ms
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime;

    const smoothStep = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / scrollDuration, 1);

      // Ease-out curve for natural feel
      const ease = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, startY + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(smoothStep);
      }
    };

    requestAnimationFrame(smoothStep);
  }, [pathname, navigationType]);

  return null;
};

export default ScrollToTop;
