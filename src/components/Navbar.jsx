import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    { name: "PreDeparture", path: "/pre-departure-orientation" },
    { name: "Continuous Communication", path: "/continuous-communication" },
  ];

  const whatWeDoItems = [
    { name: "What We Do", path: "/what-we-do" },
    { name: "About Us", path: "/about" },
    { name: "Work With Us", path: "/work-with-us" },
  ];

  // Close mobile menu & dropdowns when a link is clicked (optional)
  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setStudyOpen(false);
    setServicesOpen(false);
    setWhatWeDoOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/" onClick={closeAllMenus}>
          <img src="/assets/logo.png" alt="Logo" />
        </Link>
      </div>

      {/* Hamburger Menu Icon */}
      <div
        className="hamburger"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{ cursor: "pointer", fontSize: "24px", userSelect: "none" }}
        aria-label="Toggle menu"
      >
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
        {/* Study Abroad Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => window.innerWidth > 768 && setStudyOpen(true)}
          onMouseLeave={() => window.innerWidth > 768 && setStudyOpen(false)}
        >
          <span
            onClick={() => setStudyOpen(!studyOpen)}
            style={{ cursor: "pointer" }}
            aria-expanded={studyOpen}
            aria-haspopup="true"
          >
            Study Abroad ▾
          </span>
          <ul className={`dropdown-menu ${studyOpen ? "active" : ""}`}>
            {countries.map((country, i) => (
              <li key={i}>
                <Link
                  to={`/study-in/${country.toLowerCase()}`}
                  onClick={closeAllMenus}
                >
                  {country}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        {/* Student Services Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => window.innerWidth > 768 && setServicesOpen(true)}
          onMouseLeave={() => window.innerWidth > 768 && setServicesOpen(false)}
        >
          <span
            onClick={() => setServicesOpen(!servicesOpen)}
            style={{ cursor: "pointer" }}
            aria-expanded={servicesOpen}
            aria-haspopup="true"
          >
            Student Services ▾
          </span>
          <ul className={`dropdown-menu ${servicesOpen ? "active" : ""}`}>
            {studentServices.map((service, i) => (
              <li key={i}>
                <Link to={service.path} onClick={closeAllMenus}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        {/* What We Do Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => window.innerWidth > 768 && setWhatWeDoOpen(true)}
          onMouseLeave={() => window.innerWidth > 768 && setWhatWeDoOpen(false)}
        >
          <span
            onClick={() => setWhatWeDoOpen(!whatWeDoOpen)}
            style={{ cursor: "pointer" }}
            aria-expanded={whatWeDoOpen}
            aria-haspopup="true"
          >
            What We Do ▾
          </span>
          <ul className={`dropdown-menu ${whatWeDoOpen ? "active" : ""}`}>
            {whatWeDoItems.map((item, i) => (
              <li key={i}>
                <Link to={item.path} onClick={closeAllMenus}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        {/* Static Links */}
        <li>
          <Link to="/events" onClick={closeAllMenus}>
            Events
          </Link>
        </li>
        <li>
          <Link to="/resources" onClick={closeAllMenus}>
            Resources
          </Link>
        </li>
      </ul>

      {/* Contact Button */}
      <div className="contact-btn">
        <Link to="/contact" onClick={closeAllMenus}>
          <button>Contact Us</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
