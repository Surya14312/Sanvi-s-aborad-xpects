import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TrendingCourses() {
  const [activeTab, setActiveTab] = useState("UK");
  const [fadeIn, setFadeIn] = useState(false);
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

  // Trigger fade-in animation when tab changes
  useEffect(() => {
    setFadeIn(false);
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "auto" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}
      >
        Discover <span style={{ color: "#18408a" }}>Trending Courses</span>{" "}
        Worldwide
      </h2>

      {/* Tabs */}
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          listStyle: "none",
          padding: 0,
          marginBottom: "2rem",
          borderBottom: "2px solid #eee",
        }}
      >
        {tabs.map((tab) => (
          <li
            key={tab}
            style={{
              padding: "0.5rem 1rem",
              cursor: "pointer",
              borderBottom:
                activeTab === tab
                  ? "3px solid #18408a"
                  : "3px solid transparent",
              color: activeTab === tab ? "#18408a" : "#555",
              fontWeight: activeTab === tab ? "bold" : "normal",
              transition: "all 0.3s ease",
            }}
            onClick={() => setActiveTab(tab)}
            onMouseOver={(e) => (e.target.style.color = "#18408a")}
            onMouseOut={(e) =>
              (e.target.style.color = activeTab === tab ? "#18408a" : "#555")
            }
          >
            {tab}
          </li>
        ))}
      </ul>

      {/* Courses Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {coursesData[activeTab].map((course, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            }}
          >
            <img
              src={course.image}
              alt={course.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.08)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                padding: "1rem",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  margin: "0.5rem 0",
                }}
              >
                {course.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#555", flexGrow: 1 }}>
                {course.description}
              </p>
              <button
                onClick={() => handleLearnMore(activeTab, course.title)}
                style={{
                  background: "#18408a",
                  color: "#fff",
                  border: "none",
                  padding: "0.6rem 1rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  marginTop: "1rem",
                  transition: "background 0.3s ease, transform 0.3s ease",
                  alignSelf: "flex-start",
                }}
                onMouseOver={(e) => {
                  e.target.style.background = "#0f2d65";
                  e.target.style.transform = "translateY(-3px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "#18408a";
                  e.target.style.transform = "translateY(0)";
                }}
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
