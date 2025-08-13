import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function TrendingCourses() {
  const [activeTab, setActiveTab] = useState("UK");
  const [columns, setColumns] = useState(3);
  const navigate = useNavigate();

const coursesData = {
  UK: [
    { title: "MBA", image: "/assets/courses/mba.jpg", description: "Master of Business Administration in top UK universities." },
    { title: "Data Science", image: "/assets/courses/data-science.jpg", description: "Learn cutting-edge Data Science skills and AI tools." },
    { title: "Artificial Intelligence", image: "/assets/courses/ai.jpg", description: "Advance your career in AI & machine learning." },
    { title: "Law", image: "/assets/courses/law.jpg", description: "Study law in the UK for global legal expertise." },
   
   
  ],
  USA: [
    { title: "Computer Science", image: "/assets/courses/computer-science.jpg", description: "Pursue CS in leading US tech universities." },
    { title: "Engineering", image: "/assets/courses/engineering.jpg", description: "Explore various engineering specializations in USA." },
    { title: "Finance", image: "/assets/courses/finance.jpg", description: "Top-ranked finance programs for a global career." },
    { title: "Healthcare", image: "/assets/courses/healthcare.jpg", description: "Medical and healthcare programs with global demand." },
   
  ],
  Canada: [
    { title: "Business Analytics", image: "/assets/courses/business-analytics.jpg", description: "Excel in business analytics with Canadian universities." },
    { title: "Cybersecurity", image: "/assets/courses/cybersecurity.jpg", description: "Learn advanced cybersecurity tools and techniques." },
    { title: "Nursing", image: "/assets/courses/nursing.jpg", description: "Build a career in nursing and healthcare." },
    { title: "Marketing", image: "/assets/courses/marketing.jpg", description: "Master digital and traditional marketing strategies." },
  ],
  Europe: [
    { title: "Environmental Science", image: "/assets/courses/environment.jpg", description: "Study sustainability and environmental sciences." },
    { title: "Accounting", image: "/assets/courses/accounting.jpg", description: "Build your career in global accounting practices." },
    { title: "Medicine", image: "/assets/courses/medicine.jpg", description: "Medical programs with world-class facilities." },
    { title: "Information Technology", image: "/assets/courses/it.jpg", description: "Advance in IT fields with Australian universities." },
  ],
  Japan: [
    { title: "Robotics Engineering", image: "/assets/courses/robotics.jpg", description: "Master robotics in one of the world’s tech leaders." },
    { title: "Game Development", image: "/assets/courses/game-dev.jpg", description: "Learn advanced game design and development in Japan." },
    { title: "Business Management", image: "/assets/courses/business-management.jpg", description: "Explore innovative Japanese business strategies." },
    { title: "Cultural Studies", image: "/assets/courses/culture.jpg", description: "Immerse in Japanese culture, language, and traditions." },
  ],
  China: [
     { title: "Cybersecurity", image: "/assets/courses/cybersecurity.jpg", description: "Learn advanced cybersecurity tools and techniques." },
    { title: "Engineering", image: "/assets/courses/engineering.jpg", description: "Study engineering in China's top universities." },
    { title: "Artificial Intelligence", image: "/assets/courses/ai.jpg", description: "Specialize in AI and big data in China’s tech hubs." },
     { title: "Marketing", image: "/assets/courses/marketing.jpg", description: "Master digital and traditional marketing strategies." },
  ],
  Dubai: [
    { title: "Hospitality Management", image: "/assets/courses/hospitality.jpg", description: "Excel in luxury hospitality in Dubai’s tourism hub." },
    { title: "Architecture", image: "/assets/courses/architecture.jpg", description: "Study modern and Islamic architecture in Dubai." },
     { title: "Business Analytics", image: "/assets/courses/business-analytics.jpg", description: "Excel in business analytics with US institutions." },
    { title: "Information Technology", image: "/assets/courses/it.jpg", description: "Advance in IT fields with innovative US universities." },
  ],
};


  const tabs = Object.keys(coursesData);

  const handleLearnMore = (country, courseTitle) => {
    navigate(`/courses/${country}/${encodeURIComponent(courseTitle)}`);
  };

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
