// src/pages/StudentServices.jsx
import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Admission Guidance",
    description:
      "Admission guidance from our expert counselors, tailored for your academic aspirations and career goals.",
    image: "/images/admission-guidance.jpg",
    link: "/blog/admission-guidance",
  },
  {
    title: "Career Counseling",
    description:
      "Our experienced advisors will help you choose the best career path aligned with the international market.",
    image: "/images/career-counseling.jpg",
    link: "/blog/career-counseling",
  },
  {
    title: "Course Selection",
    description:
      "Get assistance in selecting the most suitable course based on your interests and future goals.",
    image: "/images/course-selection.jpg",
    link: "/blog/course-selection",
  },
  {
    title: "Documentation Services",
    description:
      "Complete guidance on preparing, organizing, and submitting your academic and visa documents.",
    image: "/images/documentation.jpg",
    link: "/blog/documentation-services",
  },
  {
    title: "Application Procedure",
    description:
      "Step-by-step support to complete your university application accurately and on time.",
    image: "/images/application.jpg",
    link: "/blog/application-procedure",
  },
  {
    title: "Financial Assistance",
    description:
      "Explore options like scholarships, student loans, and financial planning for your education.",
    image: "/images/financial-assistance.jpg",
    link: "/blog/financial-assistance",
  },
  {
    title: "Travel Assistance",
    description:
      "Help with booking flights, travel insurance, and planning your journey to the destination country.",
    image: "/images/travel-assistance.jpg",
    link: "/blog/travel-assistance",
  },
  {
    title: "Post-Arrival Support",
    description:
      "We assist you with airport pickup, accommodation, and settling in once you reach your university.",
    image: "/images/post-arrival.jpg",
    link: "/blog/post-arrival-support",
  },
  {
    title: "Country Selection",
    description:
      "We help you choose the best study-abroad destination based on your goals, budget, and career plans.",
    image: "/images/country-selection.jpg",
    link: "/blog/country-selection",
  },
  {
    title: "University Selection",
    description:
      "Guidance in choosing the right university based on your academic profile and preferences.",
    image: "/images/university-selection.jpg",
    link: "/blog/university-selection",
  },
  {
    title: "Scholarship Assistance",
    description:
      "Support in identifying and applying for scholarships to help fund your international education.",
    image: "/images/scholarship.jpg",
    link: "/blog/scholarship-assistance",
  },
  {
    title: "Visa Assistance",
    description:
      "Comprehensive guidance for your student visa process and document preparation.",
    image: "/images/visa-assistance.jpg",
    link: "/blog/visa-assistance",
  },
  {
    title: "Test Preparations",
    description:
      "Coaching and resources for tests like IELTS, TOEFL, GRE, GMAT, SAT, and more.",
    image: "/images/test-preparation.jpg",
    link: "/blog/test-preparations",
  },
  {
    title: "Pre-Departure Orientation",
    description:
      "Get ready for life abroad with our cultural, academic, and lifestyle orientation sessions.",
    image: "/images/pre-departure.jpg",
    link: "/blog/pre-departure-orientation",
  },
  {
    title: "Continuous Communication",
    description:
      "Stay in touch with our counselors throughout your academic journey abroad for ongoing support.",
    image: "/images/continuous-communication.jpg",
    link: "/blog/continuous-communication",
  },
];

const StudentServices = () => {
  return (
    <div className="services-container">
      <h1 className="services-heading">Student Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img
              src={service.image}
              alt={service.title}
              className="service-img"
            />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="read-more-btn">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentServices;
