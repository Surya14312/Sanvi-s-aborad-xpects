// src/pages/GlobalCourses.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // <-- Make sure this is imported


const courses = [
  // --- Technology & IT ---
  {
    name: "Artificial Intelligence (AI)",
    description: "Master AI fundamentals, including deep learning, NLP, and computer vision for global applications.",
    image: "/assets/courses/ai.jpg",
    study: [
      "Machine Learning & Deep Learning",
      "Natural Language Processing (NLP)",
      "Computer Vision & Robotics",
      "AI Ethics & Applications"
    ],
    use: [
      "AI Engineer in Tech Companies",
      "Researcher in Universities & Labs",
      "Robotics & Automation Specialist",
      "AI Product Manager"
    ],
    eligibility: "Bachelor’s in Computer Science / IT / Engineering. English proficiency (IELTS/TOEFL) required.",
    countries: ["USA", "UK", "Canada", "Germany", "Australia", "Singapore"]
  },
  {
    name: "Data Science",
    description: "Learn data visualization, big data, and predictive analytics using Python and R.",
    image: "/assets/courses/data-science.jpg",
    study: [
      "Data Mining & Visualization",
      "Big Data & Hadoop",
      "Predictive & Prescriptive Analytics",
      "Python, R, SQL, Tableau"
    ],
    use: [
      "Data Scientist",
      "Business Intelligence Analyst",
      "Big Data Engineer",
      "Machine Learning Specialist"
    ],
    eligibility: "Bachelor’s in CS, Statistics, or related. Math background preferred. IELTS/TOEFL may be required.",
    countries: ["USA", "UK", "Canada", "Australia", "Netherlands", "Ireland"]
  },
  {
    name: "Cybersecurity",
    description: "Understand ethical hacking, penetration testing, and digital forensics to protect IT systems.",
    image: "/assets/courses/cybersecurity.jpg",
    study: [
      "Network Security",
      "Ethical Hacking & Penetration Testing",
      "Cryptography & Blockchain Security",
      "Digital Forensics & Cloud Security"
    ],
    use: [
      "Cybersecurity Analyst",
      "Penetration Tester",
      "Forensics Investigator",
      "CISO / Security Manager"
    ],
    eligibility: "Bachelor’s in CS, IT, or Electronics. Strong math background required. IELTS/TOEFL for abroad.",
    countries: ["USA", "UK", "Canada", "Australia", "Singapore", "Germany"]
  },
  {
    name: "Robotics",
    description: "Explore robotics automation, industrial robotics, and AI-powered robots.",
    image: "/assets/courses/robotics.jpg",
    study: [
      "Control Systems",
      "Robotics Hardware & Design",
      "Artificial Intelligence for Robots",
      "Automation & Industrial Robotics"
    ],
    use: [
      "Robotics Engineer",
      "Automation Specialist",
      "AI Researcher in Robotics",
      "Industrial Designer"
    ],
    eligibility: "Bachelor’s in Mechanical, Electrical, or CS Engineering. IELTS/TOEFL required for most countries.",
    countries: ["USA", "UK", "Canada", "Germany", "Japan", "South Korea"]
  },
  {
    name: "Cloud Computing",
    description: "Develop expertise in AWS, Microsoft Azure, and Google Cloud solutions.",
    image: "/assets/courses/cloud.jpg",
    study: [
      "AWS, Azure, Google Cloud",
      "Cloud Security",
      "DevOps & Containers (Docker, Kubernetes)",
      "Serverless Architecture"
    ],
    use: [
      "Cloud Engineer",
      "DevOps Engineer",
      "Cloud Solutions Architect",
      "System Administrator"
    ],
    eligibility: "Bachelor’s in CS, IT, or Electronics. Cloud certifications recommended.",
    countries: ["USA", "UK", "Canada", "Australia", "Germany", "Singapore"]
  },

  // --- Business & Management ---
  {
    name: "Digital Marketing",
    description: "Learn SEO, SEM, content marketing, and advanced analytics to reach global audiences.",
    image: "/assets/courses/digital-marketing.jpg",
    study: [
      "SEO & SEM",
      "Social Media Marketing",
      "Content Marketing & Copywriting",
      "Web Analytics & Google Ads"
    ],
    use: [
      "Digital Marketing Manager",
      "SEO/SEM Specialist",
      "Social Media Strategist",
      "Marketing Consultant"
    ],
    eligibility: "Open to all graduates. Strong English/communication skills required.",
    countries: ["UK", "USA", "Canada", "Australia", "Ireland", "Singapore"]
  },
  {
    name: "Business Analytics",
    description: "Master decision-making with business intelligence tools and predictive analytics.",
    image: "/assets/courses/business-analytics.jpg",
    study: [
      "Data Visualization (Tableau, Power BI)",
      "Predictive & Prescriptive Analytics",
      "Statistical Modeling",
      "Business Intelligence"
    ],
    use: [
      "Business Analyst",
      "Data Consultant",
      "Analytics Manager",
      "Market Research Specialist"
    ],
    eligibility: "Bachelor’s in Business, IT, or Statistics. IELTS/TOEFL for abroad.",
    countries: ["USA", "UK", "Canada", "Australia", "Singapore", "Netherlands"]
  },
  {
    name: "Project Management",
    description: "Gain PMP, Agile, and Scrum expertise for managing global projects.",
    image: "/assets/courses/project-management.jpg",
    study: [
      "Agile & Scrum Methodologies",
      "PMP Framework",
      "Risk Management",
      "Leadership & Team Building"
    ],
    use: [
      "Project Manager",
      "Scrum Master",
      "Operations Manager",
      "Consultant"
    ],
    eligibility: "Any bachelor’s degree with 2+ years experience. PMP certification recommended.",
    countries: ["UK", "USA", "Canada", "Australia", "Germany", "UAE"]
  },

  // --- Healthcare & Science ---
  {
    name: "Nursing",
    description: "Gain advanced skills in patient care, clinical practice, and nursing leadership.",
    image: "/assets/courses/nursing.jpg",
    study: [
      "Anatomy & Physiology",
      "Clinical Nursing Practice",
      "Critical Care",
      "Healthcare Leadership"
    ],
    use: [
      "Registered Nurse",
      "Clinical Specialist",
      "Nursing Educator",
      "Healthcare Manager"
    ],
    eligibility: "High school with science background. IELTS/TOEFL required.",
    countries: ["UK", "USA", "Canada", "Australia", "New Zealand", "Germany"]
  },
  {
    name: "Medicine (MBBS)",
    description: "Comprehensive training in medical sciences, surgery, and patient care.",
    image: "/assets/courses/medicine.jpg",
    study: [
      "Human Anatomy & Biochemistry",
      "Clinical Training",
      "Surgery & Internal Medicine",
      "Public Health"
    ],
    use: [
      "Doctor",
      "Surgeon",
      "Medical Researcher",
      "Public Health Consultant"
    ],
    eligibility: "High school with Biology, Chemistry, Physics. Entrance exam (NEET/MCAT). IELTS/TOEFL for abroad.",
    countries: ["USA", "UK", "Canada", "Australia", "Germany", "Russia"]
  }
];

export default function GlobalCourses() {
  const navigate = useNavigate();

  return (
    <div className="global-courses-page" style={{ padding: "20px" }}>
      <h1 className="global-courses-title">🚀 Explore Trending Global Courses</h1>
      <div className="courses-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "20px" }}>
        {courses.map((course, index) => (
          <div
            className="course-card"
            key={index}
            style={{ cursor: "pointer", border: "1px solid #ccc", borderRadius: "8px", padding: "15px", background: "#fff" }}
            onClick={() =>
              navigate(`/courses/${encodeURIComponent(course.name)}`, { state: { course } })
            }
          >
            <img
              src={course.image}
              alt={course.name}
              style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "5px" }}
              onError={(e) => (e.target.src = "/assets/courses/default.jpg")}
            />
            <h2 style={{ fontSize: "18px", margin: "10px 0" }}>{course.name}</h2>
            <p style={{ fontSize: "14px", color: "#555" }}>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Export courses array separately if needed
export { courses };