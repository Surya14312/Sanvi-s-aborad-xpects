// src/pages/ProgramDetails.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


const programDetails = {
  "2+2 (China + Japan)": {
    overview:
      "The 2+2 program allows students to study 2 years in China followed by 2 years in Japan. Gain international exposure and dual academic experience.",
    benefits: [
      "Experience diverse cultures and education systems.",
      "Build a global network of peers and professionals.",
      "Enhance career prospects with dual-degree credentials.",
    ],
    eligibility: [
      "Completed higher secondary education (12th grade or equivalent).",
      "Strong academic record in relevant subjects.",
      "Proficiency in English; optional Chinese/Japanese language courses.",
    ],
    image: "/assets/courses/robotics.jpg",
  },
  "India + UK": {
    overview:
      "Start your program in India and transfer to a top UK university to complete your degree. Enjoy the best of both worlds: affordable education in India and internationally recognized degree in the UK.",
    benefits: [
      "Cost-effective pathway to UK degrees.",
      "Smooth transition with academic credit transfer.",
      "Exposure to UK academic standards and culture.",
    ],
    eligibility: [
      "Completed higher secondary education (12th grade or equivalent).",
      "Meet minimum grades required for transfer.",
      "English proficiency (IELTS/TOEFL may be required).",
    ],
    image: "/assets/courses/mba.jpg",
  },
  "India + USA": {
    overview:
      "Begin your studies in India and complete your program in the USA. Gain global perspective, top-quality education, and international career opportunities.",
    benefits: [
      "Earn a US degree while starting in India.",
      "Affordable start with global recognition.",
      "Opportunities for internships and work experience in the USA.",
    ],
    eligibility: [
      "Completed higher secondary education (12th grade or equivalent).",
      "Strong academic record and standardized test scores (SAT/ACT may be required).",
      "English proficiency (IELTS/TOEFL).",
    ],
    image: "/assets/courses/data-science.jpg",
  },
};

export default function ProgramDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const programTitle = location.state?.program;

  if (!programTitle || !programDetails[programTitle]) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>Program not found</h2>
        <button onClick={() => navigate("/special-pathway-programs")}>
          Go Back
        </button>
      </div>
    );
  }

  const { overview, benefits, eligibility, image } = programDetails[programTitle];

  return (
    <div className="program-details-page">
      <h1 className="program-title">{programTitle}</h1>
      <img
        src={image}
        alt={programTitle}
        className="program-image"
        onError={(e) => (e.target.src = "/assets/courses/default.jpg")}
      />
      <section className="program-section">
        <h2>Overview</h2>
        <p>{overview}</p>
      </section>
      <section className="program-section">
        <h2>Benefits</h2>
        <ul>
          {benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>
      <section className="program-section">
        <h2>Eligibility</h2>
        <ul>
          {eligibility.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </section>
      <button className="back-button" onClick={() => navigate("/special-pathway-programs")}>
        Back to Programs
      </button>
    </div>
  );
}
