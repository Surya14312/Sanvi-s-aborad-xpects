// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

const serviceDetails = {
  "career-counseling": {
    title: "Personalized Career Counseling",
    content:
      "One-on-one expert guidance to help you select the right career path, destination, and course tailored to your skills, interests, and ambitions."
  },
  "exam-prep": {
    title: "International Exam Preparation",
    content:
      "Coaching for IELTS, TOEFL, PTE, GRE, GMAT, and SAT with adaptive learning plans, mock tests, and real-time feedback."
  },
  admissions: {
    title: "University Admissions Support",
    content:
      "Complete assistance for applications, SOP drafting, recommendation letters, and portfolio enhancement to maximize acceptance rates."
  },
  "course-selection": {
    title: "Course & University Selection",
    content:
      "AI-driven recommendations for top universities and programs that fit your budget, ranking preferences, and future goals."
  },
  visa: {
    title: "Visa & Documentation Assistance",
    content:
      "Complete visa application support for study, work, and dependent visas with document verification and interview training."
  },
  scholarship: {
    title: "Scholarships & Financial Aid",
    content:
      "End-to-end support in applying for scholarships, grants, and education loans to make your global education affordable."
  },
  "pre-departure": {
    title: "Pre-departure Guidance",
    content:
      "Sessions covering travel arrangements, packing lists, culture-specific etiquette, and key contacts before you fly."
  },
  "post-landing": {
    title: "Post-landing Services",
    content:
      "On-ground help with airport pickup, housing, SIM cards, bank account setup, and orientation in your new city."
  },
  "work-permit": {
    title: "Work Permits & PR Guidance",
    content:
      "Assistance with post-study work visas, part-time jobs, and permanent residency applications."
  },
  "language-training": {
    title: "Foreign Language Training",
    content:
      "Learn French, German, Spanish, or other global languages to improve academic success and cultural integration."
  },
  internship: {
    title: "Internship & Job Placement",
    content:
      "Find internships and relevant part-time opportunities to gain industry exposure while studying."
  },
  immigration: {
    title: "Immigration Consulting",
    content:
      "Expert advice on skilled migration, family sponsorship, and settlement programs in various countries."
  },
  cultural: {
    title: "Cultural Integration Programs",
    content:
      "Events and workshops to help you adapt to local customs, workplace culture, and lifestyle norms abroad."
  },
  alumni: {
    title: "Global Alumni Network",
    content:
      "Connect with successful alumni for mentorship, career opportunities, and professional networking."
  },
  relocation: {
    title: "Family Relocation Support",
    content:
      "Guidance for relocating your family, including schooling, housing, and community connections."
  },
  "skill-development": {
    title: "Skill Development & Training",
    content:
      "Short-term professional courses to upgrade your skills and make you job-ready in the global market."
  }
};

function ServiceDetail() {
  const { id } = useParams();
  const service = serviceDetails[id];

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <div className="service-detail">
      <h1>{service.title}</h1>
      <p>{service.content}</p>
      <Link to="/what-we-do">← Back to What We Do</Link>
    </div>
  );
}

export default ServiceDetail;
