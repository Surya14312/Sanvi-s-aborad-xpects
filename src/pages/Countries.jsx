// src/pages/Countries.jsx
import React from "react";
import { Link } from "react-router-dom";

// ✅ Study Abroad Countries
const studyAbroadCountries = [
  "UK", "Canada", "Singapore", "Ireland", "France", "Germany",
  "Switzerland", "Dubai", "Spain", "Malaysia", "Mauritius",
  "Netherlands", "Italy", "Poland", "Portugal", "USA", "Malta", "Lithuania"
];

// ✅ MBBS Countries
const mbbsCountries = [
  { name: "China", path: "/mbbs/china", image: "/assets/countries/china.jpg" },
  { name: "Georgia", path: "/mbbs/georgia", image: "/assets/countries/georgia.jpg" },
  { name: "Philippines", path: "/mbbs/philippines", image: "/assets/countries/philippines.jpg" },
  { name: "Vietnam", path: "/mbbs/vietnam", image: "/assets/countries/vietnam.jpg" }
];

// ✅ Central country images for study-abroad
const studyAbroadImages = {
  UK: "/assets/countries/uk.jpg",
  Canada: "/assets/countries/canada.jpg",
  Singapore: "/assets/countries/singapore.jpg",
  Ireland: "/assets/countries/ireland.jpg",
  France: "/assets/countries/france.jpg",
  Germany: "/assets/countries/germany.jpg",
  Switzerland: "/assets/countries/switzerland.jpg",
  Dubai: "/assets/countries/dubai.jpg",
  Spain: "/assets/countries/spain.jpg",
  Malaysia: "/assets/countries/malaysia.jpg",
  Mauritius: "/assets/countries/mauritius.jpg",
  Netherlands: "/assets/countries/netherlands.jpg",
  Italy: "/assets/countries/italy.jpg",
  Poland: "/assets/countries/poland.jpg",
  Portugal: "/assets/countries/portugal.jpg",
  USA: "/assets/countries/usa.jpg",
  Malta: "/assets/countries/malta.jpg",
  Lithuania: "/assets/countries/lithuania.jpg",
};

export default function Countries() {
  return (
    <div className="countries-page">
      <h1 className="countries-title">🌍 Explore Our Study Destinations</h1>

      <div className="countries-grid">
        {/* Study Abroad Countries */}
        {studyAbroadCountries.map((country) => (
          <Link
            key={country}
            to={`/study-in/${country.toLowerCase()}`}
            className="country-card"
          >
            <img
              src={studyAbroadImages[country] || "/assets/countries/default.jpg"}
              alt={country}
              onError={(e) => (e.target.src = "/assets/countries/default.jpg")}
            />
            <h2>{country}</h2>
          </Link>
        ))}

        {/* MBBS Countries */}
        {mbbsCountries.map((mbbs) => (
          <Link
            key={mbbs.name}
            to={mbbs.path}
            className="country-card"
          >
            <img
              src={mbbs.image || "/assets/countries/default.jpg"}
              alt={mbbs.name}
              onError={(e) => (e.target.src = "/assets/countries/default.jpg")}
            />
            <h2>MBBS in {mbbs.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
