import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const destinations = [
  { name: "United Kingdom", image: "/assets/destinations/uk.jpg" },
  { name: "Canada", image: "/assets/destinations/canada.jpg" },
  { name: "Singapore", image: "/assets/destinations/singapore.jpg" },
  { name: "Ireland", image: "/assets/destinations/ireland.jpg" },
  { name: "France", image: "/assets/destinations/france.jpg" },
  { name: "Germany", image: "/assets/destinations/germany.jpg" },
  { name: "Switzerland", image: "/assets/destinations/switzerland.jpg" },
  { name: "Dubai", image: "/assets/destinations/dubai.jpg" },
  { name: "Spain", image: "/assets/destinations/spain.jpg" },
  { name: "Malaysia", image: "/assets/destinations/malaysia.jpg" },
  { name: "Mauritius", image: "/assets/destinations/mauritius.jpg" },
  { name: "India", image: "/assets/destinations/india.jpg" },
  { name: "Netherlands", image: "/assets/destinations/netherlands.jpg" },
  { name: "Italy", image: "/assets/destinations/italy.jpg" },
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
        background: "linear-gradient(to right, #e0eafc, #cfdef3)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: isMobile ? "1.8rem" : "2.5rem",
          marginBottom: "10px",
          color: "#1a1a1a",
          fontWeight: 700,
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        🌍 Top Study Destinations
      </h2>
      <p
        style={{
          fontSize: isMobile ? "0.95rem" : "1.1rem",
          marginBottom: "30px",
          color: "#444",
          maxWidth: "600px",
          margin: "0 auto 30px",
        }}
      >
        Explore popular countries to study abroad with <strong>Sanvi’s Abroad Xperts</strong>
      </p>

      <div
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          width: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            animation: "scroll 40s linear infinite",
            gap: "16px",
          }}
        >
          {[...destinations, ...destinations].map((dest, index) => (
            <div
              key={index}
              style={{
                flex: "0 0 auto",
                width: `${cardWidth}px`,
                background: "#fff",
                borderRadius: "16px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                textAlign: "center",
                overflow: "hidden",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={dest.image}
                alt={dest.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/destinations/default.jpg";
                }}
                style={{
                  width: "100%",
                  height: `${cardHeight}px`,
                  objectFit: "cover",
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                }}
              />
              <div style={{ padding: "14px" }}>
                <h3
                  style={{
                    fontSize: isMobile ? "1rem" : "1.1rem",
                    margin: "10px 0",
                    color: "#333",
                    fontWeight: 600,
                  }}
                >
                  {dest.name}
                </h3>
                <button
                  onClick={() =>
                    navigate(`/country/${dest.name.toLowerCase().replace(/\s+/g, "-")}`)
                  }
                  style={{
                    background: "linear-gradient(to right, #0077ff, #00b0ff)",
                    color: "#fff",
                    border: "none",
                    padding: isMobile ? "8px 12px" : "10px 18px",
                    borderRadius: "8px",
                    fontSize: isMobile ? "0.85rem" : "1rem",
                    cursor: "pointer",
                    fontWeight: 500,
                    transition: "background 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "linear-gradient(to right, #005fcc, #0099cc)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "linear-gradient(to right, #0077ff, #00b0ff)";
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
