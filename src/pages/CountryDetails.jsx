// src/pages/CountryDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

// Centralized country details
const countryDetails = {
  uk: {
    name: "United Kingdom",
    description:
      "The UK offers world-class universities, rich culture, and strong job prospects.",
    image: "/assets/countries/uk.jpg",
  },
  canada: {
    name: "Canada",
    description:
      "Known for high-quality education, affordable tuition, and post-study work opportunities.",
    image: "/assets/countries/canada.jpg",
  },
  singapore: {
    name: "Singapore",
    description:
      "A modern hub for technology, business, and global education.",
    image: "/assets/countries/singapore.jpg",
  },
  france: {
    name: "France",
    description:
      "Study in the heart of Europe with a mix of culture, history, and top universities.",
    image: "/assets/countries/france.jpg",
  },
  germany: {
    name: "Germany",
    description:
      "Germany is renowned for tuition-free universities, engineering, and research excellence.",
    image: "/assets/countries/germany.jpg",
  },
  italy: {
    name: "Italy",
    description:
      "Experience rich culture, art, and globally recognized universities in Italy.",
    image: "/assets/countries/italy.jpg",
  },
  japan: {
    name: "Japan",
    description:
      "A hub of innovation, robotics, and technology with strong academic traditions.",
    image: "/assets/countries/japan.jpg",
  },
  switzerland: {
    name: "Switzerland",
    description:
      "Known for hospitality, finance, and world-leading research institutions.",
    image: "/assets/countries/switzerland.jpg",
  },
  dubai: {
    name: "Dubai",
    description:
      "An international education hub with global universities and career opportunities.",
    image: "/assets/countries/dubai.jpg",
  },
  spain: {
    name: "Spain",
    description:
      "Study in Spain to enjoy culture, lifestyle, and affordable higher education.",
    image: "/assets/countries/spain.jpg",
  },
  malaysia: {
    name: "Malaysia",
    description:
      "Emerging as a global education hub with affordable tuition and diverse programs.",
    image: "/assets/countries/malaysia.jpg",
  },
  mauritius: {
    name: "Mauritius",
    description:
      "Known for safe environment, quality education, and affordable living costs.",
    image: "/assets/countries/mauritius.jpg",
  },
  india: {
    name: "India",
    description:
      "India provides diverse education opportunities, cultural depth, and technical excellence.",
    image: "/assets/countries/india.jpg",
  },
  netherlands: {
    name: "Netherlands",
    description:
      "Famous for innovative programs, English-taught courses, and global career prospects.",
    image: "/assets/countries/netherlands.jpg",
  },
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
