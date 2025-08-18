// src/pages/GlobalCourseDetail.jsx
import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { courses } from "./GlobalCourses"; // Import all courses for direct URL access

export default function GlobalCourseDetail() {
  const { courseName } = useParams(); // Dynamic URL
  const { state } = useLocation(); // course passed from navigate
  const navigate = useNavigate();

  // Find course from state or array (works if user directly visits URL)
  const course = state?.course || courses.find(c => c.name === decodeURIComponent(courseName));

  if (!course) {
    return (
      <div style={{
        padding: "40px",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "#f7f7f7",
        minHeight: "100vh"
      }}>
        <h2 style={{ color: "#c91432", marginBottom: "20px" }}>
          Course not found: {decodeURIComponent(courseName)}
        </h2>
        <button 
          onClick={() => navigate("/courses")} 
          style={{
            padding: "10px 20px",
            backgroundColor: "#c91432",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s"
          }}
          onMouseOver={e => e.target.style.backgroundColor = "#a01028"}
          onMouseOut={e => e.target.style.backgroundColor = "#c91432"}
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div style={{
      padding: "40px 20px",
      maxWidth: "900px",
      margin: "0 auto",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "#f9f9f9",
      borderRadius: "12px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
    }}>
      <button 
        onClick={() => navigate("/courses")} 
        style={{
          padding: "8px 16px",
          backgroundColor: "#c91432",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "0.3s",
          marginBottom: "30px"
        }}
        onMouseOver={e => e.target.style.backgroundColor = "#a01028"}
        onMouseOut={e => e.target.style.backgroundColor = "#c91432"}
      >
        ⬅ Back
      </button>

      <h1 style={{
        fontSize: "36px",
        marginBottom: "20px",
        color: "#222",
        textAlign: "center",
        textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
      }}>{course.name}</h1>

      <img 
        src={course.image} 
        alt={course.name} 
        style={{
          width: "100%",
          maxHeight: "450px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "30px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
        }} 
      />

      <p style={{
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#555",
        textAlign: "justify"
      }}>{course.description}</p>
    </div>
  );
}
