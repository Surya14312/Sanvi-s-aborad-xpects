// src/pages/SpecialPathwayPrograms.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const programs = [
  {
    title: "2+2 (China + Japan)",
    description:
      "Study 2 years in China + 2 years in Japan and gain international exposure.",
    duration: "4 years total (2+2 split)",
    benefits: [
      "Dual country exposure in Asia’s top tech hubs",
      "Strong focus on AI, Robotics, and Engineering",
      "Affordable tuition compared to Western countries",
    ],
    universities: ["Tsinghua University (China)", "Tokyo University (Japan)"],
    image: "/assets/courses/robotics.jpg",
  },
  {
    title: "India + UK",
    description: "Start your program in India and transfer to a top UK university.",
    duration: "1-2 years in India + 2 years in UK",
    benefits: [
      "Lower tuition for initial years",
      "Opportunity to earn a UK degree",
      "Save on living costs while studying in India",
    ],
    universities: ["Delhi University (India)", "University of Manchester (UK)"],
    image: "/assets/courses/mba.jpg",
  },
  {
    title: "India + USA",
    description: "Begin your studies in India and complete your program in the USA.",
    duration: "2 years in India + 2 years in USA",
    benefits: [
      "Strong foundation in India before transfer",
      "Pathway to top US universities",
      "Opportunities for OPT and H1B visas",
    ],
    universities: ["IIT (India)", "MIT (USA)", "Stanford University (USA)"],
    image: "/assets/courses/data-science.jpg",
  },
];

export default function SpecialPathwayPrograms() {
  const navigate = useNavigate();

  const handleLearnMore = (program) => {
    navigate(`/special-pathway/${encodeURIComponent(program.title)}`, {
      state: { program }, // pass program details to CourseDetails
    });
  };

  return (
    <div className="special-pathway-page">
      <h1 className="special-pathway-title">🌏 Special Pathway Programs</h1>
      <p className="special-pathway-subtitle">
        Unique international education pathways designed to maximize global exposure.
      </p>

      <div className="special-pathway-grid">
        {programs.map((program, index) => (
          <div className="special-pathway-card" key={index}>
            <img
              src={program.image}
              alt={program.title}
              onError={(e) => (e.currentTarget.src = "/assets/courses/default.jpg")}
            />
            <div className="special-pathway-content">
              <h2>{program.title}</h2>
              <p>{program.description}</p>
              <button
                className="learn-more-btn"
                onClick={() => handleLearnMore(program)}
              >
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
