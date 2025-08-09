// src/components/Destinations.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const destinations = [
  {
    name: "UK",
    image: "/assets/destinations/uk.jpg",
  },
  {
    name: "Canada",
    image: "/assets/destinations/canada.jpg",
  },
  {
    name: "Singapore",
    image: "/assets/destinations/singapore.jpg",
  },
  {
    name: "Ireland",
    image: "/assets/destinations/ireland.jpg",
  },
  {
    name: "France",
    image: "/assets/destinations/france.jpg",
  },
  {
    name: "Germany",
    image: "/assets/destinations/germany.jpg",
  },
  {
    name: "Switzerland",
    image: "/assets/destinations/switzerland.jpg",
  },
  {
    name: "Dubai",
    image: "/assets/destinations/dubai.jpg",
  },
  {
    name: "Spain",
    image: "/assets/destinations/spain.jpg",
  },
  {
    name: "Malaysia",
    image: "/assets/destinations/malaysia.jpg",
  },
  {
    name: "Mauritius",
    image: "/assets/destinations/mauritius.jpg",
  },
  {
    name: "India",
    image: "/assets/destinations/india.jpg",
  },
  {
    name: "Netherlands",
    image: "/assets/destinations/netherlands.jpg",
  },
  {
    name: "Italy",
    image: "/assets/destinations/italy.jpg",
  },
];

const Destinations = () => {
  const navigate = useNavigate();

  return (
    <div className="destinations-container">
      <h2>Top Study Destinations</h2>
      <p>
        Explore popular countries to study abroad with Sanvi’s Abroad Xperts
      </p>

      <div className="destinations-grid">
        {destinations.map((dest, index) => (
          <div
            className="destination-card"
            key={index}
            onClick={() => navigate(`/country/${dest.name.toLowerCase()}`)}
            style={{ cursor: "pointer" }}
          >
            <img src={dest.image} alt={dest.name} />
            <h3>{dest.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
