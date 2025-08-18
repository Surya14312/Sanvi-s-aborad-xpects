// src/pages/CountryDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

// Centralized country details
const countryDetails = {
  uk: {
    name: "United Kingdom",
    description: "The UK offers world-class universities, rich culture, and strong job prospects.",
    image: "/assets/countries/uk.jpg",
  },
  canada: {
    name: "Canada",
    description: "Known for high-quality education, affordable tuition, and post-study work opportunities.",
    image: "/assets/countries/canada.jpg",
  },
  singapore: {
    name: "Singapore",
    description: "A modern hub for technology, business, and global education.",
    image: "/assets/countries/singapore.jpg",
  },
  france: {
    name: "France",
    description: "Study in the heart of Europe with a mix of culture, history, and top universities.",
    image: "/assets/countries/france.jpg",
  },
  // 👉 Continue adding germany, italy, japan, etc...
};

export default function CountryDetails() {
  const { slug } = useParams();
  const country = countryDetails[slug];

  if (!country) {
    return (
      <div className="country-details">
        <h2>Country not found ❌</h2>
        <Link to="/countries">⬅ Back to Countries</Link>
      </div>
    );
  }

  return (
    <div className="country-details">
      <h1>{country.name}</h1>
      <img src={country.image} alt={country.name} />
      <p>{country.description}</p>
      <Link to="/countries" className="back-link">
        ⬅ Back to Countries
      </Link>
    </div>
  );
}
