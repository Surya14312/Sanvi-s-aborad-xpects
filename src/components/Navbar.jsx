import React, { useState } from "react";
import SmartLink from "./SmartLink";

// ✅ Study Abroad Countries
const studyAbroadCountries = [
  "UK", "Canada", "Singapore", "Ireland", "France", "Germany",
  "Switzerland", "Dubai", "Spain",  
  "Netherlands", "Italy", "Poland", "Portugal", "USA", "Malta", "Lithuania",
];

// ✅ MBBS Countries
const mbbsCountries = [
  { name: "China", path: "/mbbs/china" },
  { name: "Georgia", path: "/mbbs/georgia" },
  { name: "Philippines", path: "/mbbs/philippines" },
  { name: "Vietnam", path: "/mbbs/vietnam" }
  , { name: "Belarus", path: "/mbbs/belarus" }
];

// ✅ Student Services
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
  { name: "PreDeparture Orientation", path: "/pre-departure-orientation" },
  { name: "Continuous Communication", path: "/continuous-communication" },
];

// ✅ What We Do
const whatWeDoItems = [
  { name: "What We Do", path: "/what-we-do" },
  { name: "About Us", path: "/about" },
  // { name: "Work With Us", path: "/work-with-us" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    study: false,
    services: false,
    whatWeDo: false,
  });

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setDropdownOpen({ study: false, services: false, whatWeDo: false });
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <SmartLink to="/" onClick={closeAllMenus}>
          <img src="/assets/logo.png" alt="Logo" />
        </SmartLink>
      </div>

      {/* Mobile Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>

        {/* Study Abroad Dropdown */}
        <li className="dropdown">
          <span onClick={() => toggleDropdown("study")}>
            Study Abroad ▾
          </span>
          <ul className={`dropdown-menu ${dropdownOpen.study ? "active" : ""}`}>
            {/* Regular Study Abroad Countries */}
            {studyAbroadCountries.map((country, i) => (
              <li key={i}>
                <SmartLink
                  to={`/study-in/${country.toLowerCase()}`}
                  onClick={closeAllMenus}
                >
                  {country}
                </SmartLink>
              </li>
            ))}

            {/* MBBS Countries */}
            {mbbsCountries.map((mbbs, i) => (
              <li key={`mbbs-${i}`}>
                <SmartLink
                  to={mbbs.path}
                  onClick={closeAllMenus}
                >
                  MBBS in {mbbs.name}
                </SmartLink>
              </li>
            ))}
          </ul>
        </li>

        {/* Student Services Dropdown */}
        <li className="dropdown">
          <span onClick={() => toggleDropdown("services")}>
            Student Services ▾
          </span>
          <ul className={`dropdown-menu ${dropdownOpen.services ? "active" : ""}`}>
            {studentServices.map((service, i) => (
              <li key={i}>
                <SmartLink to={service.path} onClick={closeAllMenus}>
                  {service.name}
                </SmartLink>
              </li>
            ))}
          </ul>
        </li>

        {/* What We Do Dropdown */}
        <li className="dropdown">
          <span onClick={() => toggleDropdown("whatWeDo")}>
            What We Do ▾
          </span>
          <ul className={`dropdown-menu ${dropdownOpen.whatWeDo ? "active" : ""}`}>
            {whatWeDoItems.map((item, i) => (
              <li key={i}>
                <SmartLink to={item.path} onClick={closeAllMenus}>
                  {item.name}
                </SmartLink>
              </li>
            ))}
          </ul>
        </li>

        {/* Blogs Link */}
        <li>
          <SmartLink to="/trending-blogs" onClick={closeAllMenus}>
            Blogs
          </SmartLink>
        </li>
      </ul>

      {/* Contact Button */}
      <div className="contact-btn">
        <SmartLink to="/contact" onClick={closeAllMenus}>
          <button>Contact Us</button>
        </SmartLink>
      </div>
    </nav>
  );
}

export default Navbar;
