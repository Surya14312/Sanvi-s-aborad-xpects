import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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

  const countries = [
    "UK", "Canada", "Singapore", "Ireland", "France", "Germany",
    "Switzerland", "Dubai", "Spain", "Malaysia", "Mauritius",
    "India", "Netherlands", "Italy",
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

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={closeAllMenus}>
          <img src="/assets/logo.png" alt="Logo" />
        </Link>
      </div>

      <div
        className="hamburger"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </div>

      <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
        {/* Study Abroad */}
        <li className="dropdown">
          <span onClick={() => toggleDropdown("study")}>
            Study Abroad ▾
          </span>
          <ul className={`dropdown-menu ${dropdownOpen.study ? "active" : ""}`}>
            {countries.map((c, i) => (
              <li key={i}>
                <NavLink to={`/study-in/${c.toLowerCase()}`} onClick={closeAllMenus}>
                  {c}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>

        {/* Student Services */}
        <li className="dropdown">
          <span onClick={() => toggleDropdown("services")}>
            Student Services ▾
          </span>
          <ul className={`dropdown-menu ${dropdownOpen.services ? "active" : ""}`}>
            {studentServices.map((s, i) => (
              <li key={i}>
                <NavLink to={s.path} onClick={closeAllMenus}>{s.name}</NavLink>
              </li>
            ))}
          </ul>
        </li>

        {/* What We Do */}
        <li className="dropdown">
          <span onClick={() => toggleDropdown("whatWeDo")}>
            What We Do ▾
          </span>
          <ul className={`dropdown-menu ${dropdownOpen.whatWeDo ? "active" : ""}`}>
            {whatWeDoItems.map((item, i) => (
              <li key={i}>
                <NavLink to={item.path} onClick={closeAllMenus}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </li>

        <li><NavLink to="/events" onClick={closeAllMenus}>Events</NavLink></li>
        <li><NavLink to="/resources" onClick={closeAllMenus}>Resources</NavLink></li>
      </ul>

      <div className="contact-btn">
        <NavLink to="/contact" onClick={closeAllMenus}>
          <button>Contact Us</button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
