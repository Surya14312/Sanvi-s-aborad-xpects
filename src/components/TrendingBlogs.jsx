import React from "react";
import { useNavigate } from "react-router-dom";

function TrendingBlogs() {
  const navigate = useNavigate();

  const blogs = [
    {
      title: "The Sanvi's Aboard Education Fair is Back in 2025!",
      image: "/assets/blogs/education-fair.jpg",
      slug: "education-fair-2025",
    },
    {
      title: "MBA in Canada for Indian Students",
      image: "/assets/blogs/mba-canada.jpg",
      slug: "mba-in-canada",
    },
    {
      title: "Popular Courses to Study Abroad",
      image: "/assets/blogs/popular-courses.jpg",
      slug: "popular-courses",
    },
    {
      title: "Scholarships for International Students 2025",
      image: "/assets/blogs/scholarships.jpg",
      slug: "scholarships-2025",
    },
    {
      title: "Top Universities in the UK for 2025",
      image: "/assets/blogs/uk-universities.jpg",
      slug: "top-uk-universities",
    },
    {
      title: "Cost of Studying Abroad - Complete Guide",
      image: "/assets/blogs/cost-study-abroad.jpg",
      slug: "cost-of-studying-abroad",
    },
    {
      title: "Student Visa Tips for 2025",
      image: "/assets/blogs/student-visa.jpg",
      slug: "student-visa-tips",
    },
    {
      title: "How to Choose the Right Country for Higher Education",
      image: "/assets/blogs/choose-country.jpg",
      slug: "choose-right-country",
    },
  ];

  const handleReadMore = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <section
      style={{
        padding: "50px 20px",
        background: "linear-gradient(135deg, #f8f9fa, #eef2f7)",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        animation: "fadeSlideIn 0.8s ease-out",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#222",
          marginBottom: "40px",
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
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
          justifyItems: "center",
          alignItems: "start",
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
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 12px 30px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(0, 0, 0, 0.08)";
            }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.08)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
            <div
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#000")}
              >
                {blog.title}
              </h3>
              <button
                style={{
                  background: "#007bff",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.4s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0056b3";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#007bff";
                  e.currentTarget.style.transform = "translateY(0)";
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
