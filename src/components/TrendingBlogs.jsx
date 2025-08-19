import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TrendingBlogs() {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Track screen size changes
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive breakpoints
  const isSmallPhone = screenWidth <= 480;
  const isUltraSmall = screenWidth <= 360;

  const blogs = [
    { title: "The Sanvi's Aboard Education Fair is Back in 2025!", image: "/assets/blogs/education-fair.jpg", slug: "education-fair-2025" },
    { title: "MBA in Canada for Indian Students", image: "/assets/blogs/mba-canada.jpg", slug: "mba-in-canada" },
    { title: "Popular Courses to Study Abroad", image: "/assets/blogs/popular-courses.jpg", slug: "popular-courses" },
    { title: "Scholarships for International Students 2025", image: "/assets/blogs/scholarships.jpg", slug: "scholarships-2025" },
    { title: "Top Universities in the UK for 2025", image: "/assets/blogs/uk-universities.jpg", slug: "top-uk-universities" },
    { title: "Cost of Studying Abroad - Complete Guide", image: "/assets/blogs/cost-study-abroad.jpg", slug: "cost-of-studying-abroad" },
    { title: "Student Visa Tips for 2025", image: "/assets/blogs/student-visa.jpg", slug: "student-visa-tips" },
    { title: "How to Choose the Right Country for Higher Education", image: "/assets/blogs/choose-country.jpg", slug: "choose-right-country" },
  ];

  const handleReadMore = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <section
      style={{
        padding: "40px 16px",
        background: "linear-gradient(135deg, #f8f9fa, #eef2f7)",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: isUltraSmall ? "1.6rem" : isSmallPhone ? "2rem" : "2.5rem",
          fontWeight: "bold",
          color: "#222",
          marginBottom: "30px",
        }}
      >
        Trending{" "}
        <span style={{ color: "#007bff", position: "relative" }}>
          Insights & Blogs
        </span>
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isSmallPhone ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
          gap: isSmallPhone ? "16px" : "30px",
          maxWidth: "1200px",
          margin: "0 auto",
          justifyItems: "center",
        }}
      >
        {blogs.map((blog, index) => (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: "350px",
            }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              style={{
                width: "100%",
                height: isUltraSmall ? "140px" : isSmallPhone ? "160px" : "180px",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <h3
                style={{
                  fontSize: isUltraSmall ? "0.9rem" : isSmallPhone ? "1rem" : "1.4rem",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {blog.title}
              </h3>
              <button
                style={{
                  background: "#007bff",
                  color: "white",
                  width: isSmallPhone ? "100%" : "auto",
                  padding: isSmallPhone ? "12px" : "10px 20px",
                  fontSize: isSmallPhone ? "0.9rem" : "1rem",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => handleReadMore(blog.slug)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingBlogs;
