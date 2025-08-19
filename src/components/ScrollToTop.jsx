// src/components/ScrollToTop.jsx
import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef({});
  const [isVisible, setIsVisible] = useState(false);

  // Save scroll position before route change
  useEffect(() => {
    return () => {
      positions.current[pathname] = window.scrollY;
    };
  }, [pathname]);

  // Restore position or scroll to top when route changes
  useEffect(() => {
    const targetY =
      navigationType === "POP" ? positions.current[pathname] || 0 : 0;

    const scrollDuration = 500; // a bit smoother
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime;

    const animateScroll = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / scrollDuration, 1);

      // spring-like easing
      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startY + distance * ease);

      if (progress < 1) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  }, [pathname, navigationType]);

  // Show button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Manual scroll to top
  const handleScrollTop = () => {
    const scrollDuration = 500;
    const startY = window.scrollY;
    const distance = -startY;
    let startTime;

    const animateScroll = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / scrollDuration, 1);

      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startY + distance * ease);

      if (progress < 1) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={handleScrollTop}
          className="scroll-to-top-btn"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
}
