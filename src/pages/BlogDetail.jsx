// src/pages/BlogDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const blogs = [
  {
    slug: "education-fair-2025",
    title: "The Sanvi's Aboard Education Fair is Back in 2025!",
    image: "/assets/blogs/education-fair.jpg",
    content: `Join the largest international education fair in 2025! Explore top universities, 
network with global institutions, and get free counseling on study abroad programs.`,
  },
  {
    slug: "mba-in-canada",
    title: "MBA in Canada for Indian Students",
    image: "/assets/blogs/mba-canada.jpg",
    content: `Discover top MBA programs in Canada, eligibility criteria, 
application tips, and scholarships available for Indian students.`,
  },
  {
    slug: "popular-courses",
    title: "Popular Courses to Study Abroad",
    image: "/assets/blogs/popular-courses.jpg",
    content: `Explore trending global courses like AI, Data Science, Business Analytics, 
and Healthcare programs for international students.`,
  },
  {
    slug: "scholarships-2025",
    title: "Scholarships for International Students 2025",
    image: "/assets/blogs/scholarships.jpg",
    content: `Find all the latest scholarships for international students in 2025, 
eligibility, application deadlines, and tips to maximize your chances.`,
  },
  {
    slug: "top-uk-universities",
    title: "Top Universities in the UK for 2025",
    image: "/assets/blogs/uk-universities.jpg",
    content: `A comprehensive guide to the top UK universities for 2025, courses offered, 
tuition fees, and student life insights.`,
  },
  {
    slug: "cost-of-studying-abroad",
    title: "Cost of Studying Abroad - Complete Guide",
    image: "/assets/blogs/cost-study-abroad.jpg",
    content: `Understand tuition fees, living expenses, accommodation, and hidden costs 
of studying abroad, with tips to save money.`,
  },
  {
    slug: "student-visa-tips",
    title: "Student Visa Tips for 2025",
    image: "/assets/blogs/student-visa.jpg",
    content: `Step-by-step guidance on how to secure your student visa for top study 
destinations in 2025.`,
  },
  {
    slug: "choose-right-country",
    title: "How to Choose the Right Country for Higher Education",
    image: "/assets/blogs/choose-country.jpg",
    content: `Factors to consider when selecting a country for your higher education, 
including cost, culture, courses, and career opportunities.`,
  },
];

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Blog not found</h2>
        <button
          onClick={() => navigate("/blogs")}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            cursor: "pointer",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      }}
    >
      <button
        onClick={() => navigate("/blogs")}
        style={{
          marginBottom: "20px",
          padding: "8px 16px",
          cursor: "pointer",
          borderRadius: "6px",
          border: "none",
          background: "#007bff",
          color: "#fff",
        }}
      >
        ⬅ Back to Blogs
      </button>

      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>{blog.title}</h1>

      <img
        src={blog.image}
        alt={blog.title}
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      />

      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>{blog.content}</p>
    </div>
  );
}
