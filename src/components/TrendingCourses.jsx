import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TrendingCourses() {
  const [activeTab, setActiveTab] = useState("UK");
  const [columns, setColumns] = useState(3);
  const navigate = useNavigate();

  // ✅ Centralized course images (unique for each course, no duplicates)
  const images = {
    mba: "/assets/courses/mba.jpg",
    dataScience: "/assets/courses/data-science.jpg",
    ai: "/assets/courses/ai.jpg",
    law: "/assets/courses/law.jpg",
    cybersecurity: "/assets/courses/cybersecurity.jpg",
    marketing: "/assets/courses/marketing.jpg",
    engineering: "/assets/courses/engineering.jpg",
    healthcare: "/assets/courses/healthcare.jpg",
    businessAnalytics: "/assets/courses/business-analytics.jpg",
    nursing: "/assets/courses/nursing.jpg",
    environment: "/assets/courses/environment.jpg",
    accounting: "/assets/courses/accounting.jpg",
    medicine: "/assets/courses/medicine.jpg",
    it: "/assets/courses/it.jpg",
    robotics: "/assets/courses/robotics.jpg",
    gameDev: "/assets/courses/game-dev.jpg",
    businessManagement: "/assets/courses/business-management.jpg",
    culture: "/assets/courses/culture.jpg",
    hospitality: "/assets/courses/hospitality.jpg",
    architecture: "/assets/courses/architecture.jpg",
  };

  // ✅ Courses data
  const coursesData = {
    UK: [
      { title: "MBA", image: images.mba, description: "Master of Business Administration in top UK universities." },
      { title: "Data Science", image: images.dataScience, description: "Learn cutting-edge Data Science skills and AI tools." },
      { title: "Artificial Intelligence", image: images.ai, description: "Advance your career in AI & machine learning." },
      { title: "Law", image: images.law, description: "Study law in the UK for global legal expertise." },
    ],
    Europe: [
      { title: "Environmental Science", image: images.environment, description: "Study sustainability and environmental sciences." },
      { title: "Accounting", image: images.accounting, description: "Build your career in global accounting practices." },
      { title: "Medicine", image: images.medicine, description: "Medical programs with world-class facilities." },
      { title: "Information Technology", image: images.it, description: "Advance in IT fields with European universities." },
    ],
    Dubai: [
      { title: "Hospitality Management", image: images.hospitality, description: "Excel in luxury hospitality in Dubai’s tourism hub." },
      { title: "Architecture", image: images.architecture, description: "Study modern and Islamic architecture in Dubai." },
      { title: "Business Analytics", image: images.businessAnalytics, description: "Excel in business analytics with Dubai institutions." },
      { title: "Information Technology", image: images.it, description: "Advance in IT fields with innovative Dubai universities." },
    ],
    Singapore: [
      { title: "Business Analytics", image: images.businessAnalytics, description: "Excel in business analytics in Singapore’s tech hub." },
      { title: "Cybersecurity", image: images.cybersecurity, description: "Learn advanced cybersecurity tools and techniques." },
      { title: "Marketing", image: images.marketing, description: "Master digital and traditional marketing strategies." },
      { title: "Finance", image: images.accounting, description: "Top-ranked finance programs in Singapore universities." },
    ],
    "Special Pathway Programs": [
      { title: "2+2 (China + Japan)", image: images.robotics, description: "Study 2 years in China + 2 years in Japan." },
      { title: "India + UK", image: images.mba, description: "Start in India and transfer to a UK university." },
      { title: "India + USA", image: images.dataScience, description: "Begin in India and complete your program in the USA." },
    ],
  };

  // ✅ Only required filters
  const tabs = ["UK", "Europe", "Dubai", "Singapore", "Special Pathway Programs"];

  // ✅ Navigate with details
  const handleLearnMore = (country, courseTitle) => {
    navigate(`/courses/${country}/${encodeURIComponent(courseTitle)}`, {
      state: {
        country,
        course: courseTitle,
        details: {
          whyCountry: `Why ${country}`,
          whyCourse: `Why ${courseTitle} in ${country}`,
          benefits: `Benefits for Indians to study ${courseTitle} in ${country}`,
        },
      },
    });
  };

  // ✅ Responsive layout
  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 480) setColumns(1);
      else if (window.innerWidth < 768) setColumns(2);
      else if (window.innerWidth < 1024) setColumns(2);
      else if (window.innerWidth < 1440) setColumns(3);
      else setColumns(4);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <div className="trending-container">
      <div className="trending-header">
        <h2 className="trending-header-title">
          Discover <span className="highlight">Trending Courses</span> Worldwide
        </h2>
      </div>

      {/* ✅ Filter Tabs */}
      <ul className="trending-tabs">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`trending-tab-item ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            Courses in the {tab}
          </li>
        ))}
      </ul>

      {/* ✅ Course Cards */}
      <div className="trending-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {coursesData[activeTab].map((course, index) => (
          <div key={index} className="trending-card">
            <img src={course.image} alt={course.title} />
            <div className="trending-content">
              <h3 className="trending-title">{course.title}</h3>
              <p className="trending-desc">{course.description}</p>
              <button
                className="trending-button"
                onClick={() => handleLearnMore(activeTab, course.title)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingCourses;
