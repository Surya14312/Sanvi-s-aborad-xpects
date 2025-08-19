// src/components/Destinations.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const destinations = [
  { name: "Italy", image: "/assets/destinations/italy.jpg" },
  { name: "Germany", image: "/assets/destinations/germany.jpg" },
  { name: "UK", image: "/assets/destinations/uk.jpg" },
  { name: "France", image: "/assets/destinations/france.jpg" },
  { name: "Switzerland", image: "/assets/destinations/switzerland.jpg" },
  { name: "Dubai", image: "/assets/destinations/dubai.jpg" },
  { name: "Singapore", image: "/assets/destinations/singapore.jpg" },
  { name: "Netherlands", image: "/assets/destinations/netherlands.jpg" },
  { name: "Ireland", image: "/assets/destinations/ireland.jpg" },
  { name: "New Zealand", image: "/assets/destinations/newzealand.jpg" },
  { name: "Spain", image: "/assets/destinations/spain.jpg" },
  { name: "Poland", image: "/assets/destinations/poland.jpg" },
  { name: "Portugal", image: "/assets/destinations/portugal.jpg" },
  { name: "USA", image: "/assets/destinations/usa.jpg" },
  { name: "Canada", image: "/assets/destinations/canada.jpg" },
  { name: "Malta", image: "/assets/destinations/malta.jpg" }, // kept 16th
];

const Destinations = () => {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth <= 480;
  const isTablet = screenWidth > 480 && screenWidth <= 768;

  const cardWidth = isMobile ? 180 : isTablet ? 220 : 260;
  const cardHeight = isMobile ? 120 : 160;

  return (
    <div
      style={{
        textAlign: "center",
        padding: isMobile ? "20px 10px" : "40px 20px",
        background: "#f9f9f9",
      }}
    >
      <h2
        style={{
          fontSize: isMobile ? "1.8rem" : "2.5rem",
          marginBottom: "10px",
          color: "#222",
        }}
      >
        Top Study Destinations
      </h2>
      <p
        style={{
          fontSize: isMobile ? "0.9rem" : "1.1rem",
          marginBottom: "20px",
          color: "#555",
        }}
      >
        Explore popular countries to study abroad with Sanvi’s Abroad Xperts
      </p>

      <div style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%", position: "relative" }}>
        <div style={{ display: "inline-flex", animation: "scroll 30s linear infinite" }}>
          {[...destinations, ...destinations].map((dest, index) => (
            <div
              key={index}
              style={{
                flex: "0 0 auto",
                width: `${cardWidth}px`,
                margin: "0 10px",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + dest.image}
                alt={dest.name}
                style={{ width: "100%", height: `${cardHeight}px`, objectFit: "cover" }}
              />
              <div style={{ padding: "10px" }}>
                <h3 style={{ fontSize: isMobile ? "1rem" : "1.2rem", margin: "8px 0", color: "#333" }}>
                  {dest.name}
                </h3>
                <button
                  onClick={() => navigate(`/country/${dest.name.toLowerCase()}`)}
                  style={{
                    background: "#0077ff",
                    color: "#fff",
                    border: "none",
                    padding: isMobile ? "8px 12px" : "10px 16px",
                    borderRadius: "6px",
                    fontSize: isMobile ? "0.85rem" : "1rem",
                    cursor: "pointer",
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default Destinations;
