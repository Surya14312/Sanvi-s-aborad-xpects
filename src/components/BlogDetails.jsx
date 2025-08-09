import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BlogDetails() {
  const { state } = useLocation(); // gets blog data passed via navigation
  const navigate = useNavigate();

  // Scroll to top when component loads or blog data changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state]);

  // If no blog data, show message and go back button
  if (!state) {
    return (
      <div className="blog-not-found" style={styles.notFound}>
        <h2>Blog not found</h2>
        <button onClick={() => navigate(-1)} style={styles.button}>
          Go Back
        </button>
      </div>
    );
  }

  // Destructure blog info from state
  const { title, image, content } = state;

  return (
    <div className="blog-details" style={styles.container}>
      <img src={image} alt={title} style={styles.image} />
      <h1 style={styles.title}>{title}</h1>

      {/* Render blog content sections if array */}
      {Array.isArray(content) ? (
        content.map((section, idx) => (
          <div key={idx} className="blog-section" style={styles.section}>
            <h2 style={styles.sectionHeading}>{section.heading}</h2>
            <p style={styles.sectionText}>{section.text}</p>
          </div>
        ))
      ) : (
        <p style={styles.paragraph}>{content}</p>
      )}

      <button onClick={() => navigate(-1)} style={styles.button}>
        Back to Blogs
      </button>
    </div>
  );
}

// Simple inline styles (replace with CSS or your styling system)
const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#222",
  },
  image: {
    width: "100%",
    maxHeight: "400px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "30px",
    color: "#b22222", // Sanvi’s Abroad Xperts theme color example (dark red)
    borderBottom: "3px solid #b22222",
    paddingBottom: "10px",
  },
  section: {
    marginBottom: "25px",
  },
  sectionHeading: {
    fontSize: "1.8rem",
    color: "#8b0000",
    marginBottom: "10px",
  },
  sectionText: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
  },
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: "1.7",
    marginBottom: "40px",
  },
  button: {
    backgroundColor: "#b22222",
    color: "#fff",
    padding: "10px 25px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  notFound: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
};

export default BlogDetails;
