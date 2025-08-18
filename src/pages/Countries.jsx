// src/pages/Countries.jsx
import React from "react";
import { Link } from "react-router-dom";

// ✅ Centralized country list with study-in routes
const countries = [
  { slug: "uk", name: "United Kingdom", image: "/assets/countries/uk.jpg" },
  { slug: "canada", name: "Canada", image: "/assets/countries/canada.jpg" },
  { slug: "singapore", name: "Singapore", image: "/assets/countries/singapore.jpg" },
  { slug: "france", name: "France", image: "/assets/countries/france.jpg" },
  { slug: "germany", name: "Germany", image: "/assets/countries/germany.jpg" },
  { slug: "italy", name: "Italy", image: "/assets/countries/italy.jpg" },
  { slug: "ireland", name: "Ireland", image: "/assets/countries/ireland.jpg" },
  { slug: "switzerland", name: "Switzerland", image: "/assets/countries/switzerland.jpg" },
  { slug: "dubai", name: "Dubai", image: "/assets/countries/dubai.jpg" },
  { slug: "spain", name: "Spain", image: "/assets/countries/spain.jpg" },
  { slug: "malaysia", name: "Malaysia", image: "/assets/countries/malaysia.jpg" },
  { slug: "mauritius", name: "Mauritius", image: "/assets/countries/mauritius.jpg" },
  { slug: "india", name: "India", image: "/assets/countries/india.jpg" },
  { slug: "netherlands", name: "Netherlands", image: "/assets/countries/netherlands.jpg" },
  { slug: "japan", name: "Japan", image: "/assets/countries/japan.jpg" },
];

export default function Countries() {
  return (
    <div className="countries-page">
      <h1 className="countries-title">🌍 Explore Our Study Destinations</h1>
      <div className="countries-grid">
        {countries.map((c) => (
          <Link
            to={`/study-in/${c.slug}`} // ✅ direct to study-in/slug
            key={c.slug}
            className="country-card"
          >
            <img
              src={c.image}
              alt={c.name}
              onError={(e) => (e.target.src = "/assets/countries/default.jpg")}
            />
            <h2>{c.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
