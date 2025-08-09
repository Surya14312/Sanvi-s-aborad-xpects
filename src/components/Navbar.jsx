import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [studyOpen, setStudyOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);

  const countries = [
    "UK",
    // "USA",
    "Canada",
    "Singapore",
    "Ireland",
    "France",
    "Germany",
    "Switzerland",
    "Dubai",
    "Spain",
    "Malaysia",
    "Mauritius",
    "India",
    "Netherlands",
    "Italy",
  ];

  const studentServices = [
    { name: "Career Counseling", path: "/career-counseling" },
    { name: "Course Selection", path: "/course-selection" },
    { name: "Documentation Services", path: "/documentation-services" },
    { name: "Application Procedure", path: "/application-procedure" },
    { name: "Financial Assistance", path: "/financial-assistance" },
    { name: "Travel Assistance", path: "/travel-assistance" },
    { name: "Post-Arrival Support", path: "/post-arrival-support" },
    { name: "Country Selection", path: "/country-selection" },
    { name: "University Selection", path: "/university-selection" },
    { name: "Scholarship Assistance", path: "/scholarship-assistance" },
    { name: "Visa Assistance", path: "/visa-assistance" },
    { name: "Test Preparations", path: "/test-preparation" },
  ];

  const whatWeDoItems = [
    { name: "What We Do", path: "/what-we-do" },
    { name: "About Us", path: "/about" },
    { name: "Work With Us", path: "/work-with-us" },
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="/assets/logo.png" alt="Logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        {/* Study Abroad Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setStudyOpen(true)}
          onMouseLeave={() => setStudyOpen(false)}
        >
          <span>Study Abroad ▾</span>
          {studyOpen && (
            <ul className="dropdown-menu">
              {countries.map((country, i) => (
                <li key={i}>
                  <Link to={`/study-in/${country.toLowerCase()}`}>
                    {country}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Student Services Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <span>Student Services ▾</span>
          {servicesOpen && (
            <ul className="dropdown-menu">
              {studentServices.map((service, i) => (
                <li key={i}>
                  <Link to={service.path}>{service.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* What We Do Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setWhatWeDoOpen(true)}
          onMouseLeave={() => setWhatWeDoOpen(false)}
        >
          <span>What We Do ▾</span>
          {whatWeDoOpen && (
            <ul className="dropdown-menu">
              {whatWeDoItems.map((item, i) => (
                <li key={i}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Static Links */}
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
      </ul>

      {/* Contact Button */}
      <div className="contact-btn">
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
