// src/pages/SpecialPathwayPrograms.jsx
import React from "react";
import { useNavigate } from "react-router-dom";


const programs = [
  {
    title: "2+2 (China + Japan)",
    description: "Study 2 years in China + 2 years in Japan and gain international exposure.",
    image: "/assets/courses/robotics.jpg",
  },
  {
    title: "India + UK",
    description: "Start your program in India and transfer to a top UK university.",
    image: "/assets/courses/mba.jpg",
  },
  {
    title: "India + USA",
    description: "Begin your studies in India and complete your program in the USA.",
    image: "/assets/courses/data-science.jpg",
  },
];

export default function SpecialPathwayPrograms() {
  const navigate = useNavigate();

  const handleLearnMore = (programTitle) => {
    navigate(`/special-pathway/${encodeURIComponent(programTitle)}`, {
      state: { program: programTitle },
    });
  };

  return (
    <div className="special-pathway-page">
      <h1 className="special-pathway-title">🌏 Special Pathway Programs</h1>
      <div className="special-pathway-grid">
        {programs.map((program, index) => (
          <div className="special-pathway-card" key={index}>
            <img
              src={program.image}
              alt={program.title}
              onError={(e) => (e.target.src = "/assets/courses/default.jpg")}
            />
            <h2>{program.title}</h2>
            <p>{program.description}</p>
            <button onClick={() => handleLearnMore(program.title)}>
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
