import React, { useState } from "react";
import SmartLink from "./SmartLink"; // ✅ Use SmartLink for routing

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

  // ✅ Countries for Study Abroad dropdown
  const countries = [
    "UK", "Canada", "Singapore", "Ireland", "France", "Germany",
    "Switzerland", "Dubai", "Spain", "Malaysia", "Mauritius",
    "India", "Netherlands", "Italy",
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
    { name: "PreDeparture", path: "/pre-departure-orientation" },
    { name: "Continuous Communication", path: "/continuous-communication" },
  ];

  // ✅ What We Do dropdown
  const whatWeDoItems = [
    { name: "What We Do", path: "/what-we-do" },
    { name: "About Us", path: "/about" },
    { name: "Work With Us", path: "/work-with-us" },
  ];

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
            {countries.map((country, i) => (
              <li key={i}>
                <SmartLink
                  to={`/study-in/${country.toLowerCase()}`}
                  onClick={closeAllMenus}
                >
                  {country}
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
