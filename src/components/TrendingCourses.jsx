import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TrendingCourses() {
  const [activeTab, setActiveTab] = useState("UK");
  const navigate = useNavigate();

  const coursesData = {
    UK: [
      {
        title: "MBA",
        image: "/assets/courses/mba.jpg",
        description:
          "Master of Business Administration in top UK universities.",
      },
      {
        title: "Data Science",
        image: "/assets/courses/data-science.jpg",
        description: "Learn cutting-edge Data Science skills and AI tools.",
      },
      {
        title: "Artificial Intelligence",
        image: "/assets/courses/ai.jpg",
        description: "Advance your career in AI & machine learning.",
      },
      {
        title: "Law",
        image: "/assets/courses/law.jpg",
        description: "Study law in the UK for global legal expertise.",
      },
    ],
    USA: [
      {
        title: "Computer Science",
        image: "/assets/courses/computer-science.jpg",
        description: "Pursue CS in leading US tech universities.",
      },
      {
        title: "Engineering",
        image: "/assets/courses/engineering.jpg",
        description: "Explore various engineering specializations in USA.",
      },
      {
        title: "Finance",
        image: "/assets/courses/finance.jpg",
        description: "Top-ranked finance programs for a global career.",
      },
      {
        title: "Healthcare",
        image: "/assets/courses/healthcare.jpg",
        description: "Medical and healthcare programs with global demand.",
      },
    ],
    Canada: [
      {
        title: "Business Analytics",
        image: "/assets/courses/business-analytics.jpg",
        description: "Excel in business analytics with Canadian universities.",
      },
      {
        title: "Cybersecurity",
        image: "/assets/courses/cybersecurity.jpg",
        description: "Learn advanced cybersecurity tools and techniques.",
      },
      {
        title: "Nursing",
        image: "/assets/courses/nursing.jpg",
        description: "Build a career in nursing and healthcare.",
      },
      {
        title: "Marketing",
        image: "/assets/courses/marketing.jpg",
        description: "Master digital and traditional marketing strategies.",
      },
    ],
    Australia: [
      {
        title: "Environmental Science",
        image: "/assets/courses/environment.jpg",
        description: "Study sustainability and environmental sciences.",
      },
      {
        title: "Accounting",
        image: "/assets/courses/accounting.jpg",
        description: "Build your career in global accounting practices.",
      },
      {
        title: "Medicine",
        image: "/assets/courses/medicine.jpg",
        description: "Medical programs with world-class facilities.",
      },
      {
        title: "Information Technology",
        image: "/assets/courses/it.jpg",
        description: "Advance in IT fields with Australian universities.",
      },
    ],
  };

  const tabs = Object.keys(coursesData);

  const handleLearnMore = (country, courseTitle) => {
    navigate(`/courses/${country}/${encodeURIComponent(courseTitle)}`);
  };

  return (
    <div className="trending-courses">
      <h2 className="trending-title">
        Discover <span>Trending Courses</span> Worldwide
      </h2>

      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            Courses in {tab}
          </button>
        ))}
      </div>

      <div className="courses-grid">
        {coursesData[activeTab].map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.title} />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button
                className="learn-more-btn"
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
