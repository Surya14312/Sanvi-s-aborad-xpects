import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TrendingCourses() {
  const [activeTab, setActiveTab] = useState("UK");
  const [columns, setColumns] = useState(3);
  const [headerFontSize, setHeaderFontSize] = useState("2.5rem");
  const navigate = useNavigate();

  const coursesData = {
    UK: [
      { title: "MBA", image: "/assets/courses/mba.jpg", description: "Master of Business Administration in top UK universities." },
      { title: "Data Science", image: "/assets/courses/data-science.jpg", description: "Learn cutting-edge Data Science skills and AI tools." },
      { title: "Artificial Intelligence", image: "/assets/courses/ai.jpg", description: "Advance your career in AI & machine learning." },
      { title: "Law", image: "/assets/courses/law.jpg", description: "Study law in the UK for global legal expertise." },
      { title: "Cybersecurity", image: "/assets/courses/cybersecurity.jpg", description: "Learn advanced cybersecurity tools and techniques." },
      { title: "Marketing", image: "/assets/courses/marketing.jpg", description: "Master digital and traditional marketing strategies." },
    ],
    USA: [
      { title: "Computer Science", image: "/assets/courses/computer-science.jpg", description: "Pursue CS in leading US tech universities." },
      { title: "Engineering", image: "/assets/courses/engineering.jpg", description: "Explore various engineering specializations in USA." },
      { title: "Finance", image: "/assets/courses/finance.jpg", description: "Top-ranked finance programs for a global career." },
      { title: "Healthcare", image: "/assets/courses/healthcare.jpg", description: "Medical and healthcare programs with global demand." },
      { title: "Business Analytics", image: "/assets/courses/business-analytics.jpg", description: "Excel in business analytics with Canadian universities." },
      { title: "Information Technology", image: "/assets/courses/it.jpg", description: "Advance in IT fields with Australian universities." },
    ],
    Canada: [
      { title: "Business Analytics", image: "/assets/courses/business-analytics.jpg", description: "Excel in business analytics with Canadian universities." },
      { title: "Cybersecurity", image: "/assets/courses/cybersecurity.jpg", description: "Learn advanced cybersecurity tools and techniques." },
      { title: "Nursing", image: "/assets/courses/nursing.jpg", description: "Build a career in nursing and healthcare." },
      { title: "Marketing", image: "/assets/courses/marketing.jpg", description: "Master digital and traditional marketing strategies." },
    ],
    Australia: [
      { title: "Environmental Science", image: "/assets/courses/environment.jpg", description: "Study sustainability and environmental sciences." },
      { title: "Accounting", image: "/assets/courses/accounting.jpg", description: "Build your career in global accounting practices." },
      { title: "Medicine", image: "/assets/courses/medicine.jpg", description: "Medical programs with world-class facilities." },
      { title: "Information Technology", image: "/assets/courses/it.jpg", description: "Advance in IT fields with Australian universities." },
    ],
  };

  const tabs = Object.keys(coursesData);

  const handleLearnMore = (country, courseTitle) => {
    navigate(`/courses/${country}/${encodeURIComponent(courseTitle)}`);
  };

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 600) {
        setColumns(1);
        setHeaderFontSize("1.8rem");
      } else if (window.innerWidth < 900) {
        setColumns(2);
        setHeaderFontSize("2.2rem");
      } else {
        setColumns(3);
        setHeaderFontSize("2.5rem");
      }
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const styles = {
    container: { margin: "3rem auto", maxWidth: "1200px" },
    header: { textAlign: "center" },
    headerTitle: {
      fontSize: headerFontSize,
      fontWeight: "bold",
      marginBottom: "2.5rem",
      color: "#0f2d65",
      textShadow: "1px 1px 4px rgba(0, 0, 0, 0.1)",
      position: "relative",
      display: "inline-block",
      paddingBottom: "10px",
      backgroundImage: "linear-gradient(to right, rgba(255,0,0,0.5), rgba(255,0,0,0.3))",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 5px",
      backgroundPosition: "0 100%",
    },
    headerSpan: { color: "#007bff" },
    tabs: { display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "2rem", listStyle: "none", padding: 0 },
    tabItem: {
      padding: "10px 20px",
      margin: "5px",
      cursor: "pointer",
      borderRadius: "8px",
      background: "#f1f5fb",
      fontWeight: 500,
      transition: "all 0.3s ease"
    },
    tabActive: { background: "#007bff", color: "white" },
    grid: { display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: "25px" },
    card: {
      background: "white",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
      display: "flex",
      flexDirection: "column",
      transition: "transform 0.3s ease, box-shadow 0.3s ease"
    },
    img: { width: "100%", height: "180px", objectFit: "cover" },
    content: { padding: "20px", display: "flex", flexDirection: "column", height: "100%" },
    title: { fontSize: "1.3rem", marginBottom: "10px" },
    desc: { flexGrow: 1, fontSize: "0.95rem", color: "#555", marginBottom: "15px" },
    button: {
      background: "#007bff",
      color: "white",
      padding: "10px 15px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "background 0.3s ease"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.headerTitle}>
          Discover <span style={styles.headerSpan}>Trending Courses</span> Worldwide
        </h2>
      </div>

      <ul style={styles.tabs}>
        {tabs.map((tab) => (
          <li
            key={tab}
            style={{
              ...styles.tabItem,
              ...(activeTab === tab ? styles.tabActive : {})
            }}
            onClick={() => setActiveTab(tab)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0056b3";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              if (activeTab === tab) {
                e.currentTarget.style.background = "#007bff";
                e.currentTarget.style.color = "white";
              } else {
                e.currentTarget.style.background = "#f1f5fb";
                e.currentTarget.style.color = "black";
              }
            }}
          >
            Courses in the {tab}
          </li>
        ))}
      </ul>

      <div style={styles.grid}>
        {coursesData[activeTab].map((course, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
            }}
          >
            <img src={course.image} alt={course.title} style={styles.img} />
            <div style={styles.content}>
              <h3 style={styles.title}>{course.title}</h3>
              <p style={styles.desc}>{course.description}</p>
              <button
                style={styles.button}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#0056b3")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#007bff")}
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
