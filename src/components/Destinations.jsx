// src/components/Destinations.jsx
import React from "react";
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
  { name: "Malta", image: "/assets/destinations/malta.jpg" },
  { name: "Lithuania", image: "/assets/destinations/lithuania.jpg" },
  { name: "Philippines", image: "/assets/destinations/philippines.jpg" },
  { name: "Belarus", image: "/assets/destinations/belarus.jpg" },
  { name: "China", image: "/assets/destinations/china.jpg" },
  { name: "Georgia", image: "/assets/destinations/georgia.jpg" },
  { name: "Vietnam", image: "/assets/destinations/vietnam.jpg" },
];

const Destinations = () => {
  const navigate = useNavigate();

  return (
    <div className="destinations-container">
      <h2>Top Study Destinations</h2>
      <p>
        Explore popular countries to study abroad with Sanvi’s Abroad Xperts
      </p>

      {/* Seamless marquee container */}
      <div className="marquee-container">
        <div className="marquee-track">
          {[...destinations, ...destinations].map((dest, index) => (
            <div className="destination-card" key={index}>
              <img src={dest.image} alt={dest.name} />
              <div className="dest-info">
                <h3>{dest.name}</h3>
                <button
                  onClick={() =>
                    navigate(`/country/${dest.name.toLowerCase()}`)
                  }
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
