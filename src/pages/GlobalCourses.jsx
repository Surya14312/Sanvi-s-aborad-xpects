// src/pages/GlobalCourses.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // <-- Make sure this is imported


const courses = [
  // --- Technology & IT ---
  {
    name: "Artificial Intelligence (AI)",
    description: "Master AI fundamentals, including deep learning, NLP, and computer vision for global applications.",
    image: "/assets/courses/ai.jpg",
  },
  {
    name: "Data Science",
    description: "Learn data visualization, big data, and predictive analytics using Python and R.",
    image: "/assets/courses/data-science.jpg",
  },
  {
    name: "Cybersecurity",
    description: "Understand ethical hacking, penetration testing, and digital forensics to protect IT systems.",
    image: "/assets/courses/cybersecurity.jpg",
  },
  {
    name: "Robotics",
    description: "Explore robotics automation, industrial robotics, and AI-powered robots.",
    image: "/assets/courses/robotics.jpg",
  },
  {
    name: "Cloud Computing",
    description: "Develop expertise in AWS, Microsoft Azure, and Google Cloud solutions.",
    image: "/assets/courses/cloud.jpg",
  },
  {
    name: "Software Engineering",
    description: "Master agile development, system design, and scalable applications.",
    image: "/assets/courses/software.jpg",
  },
  {
    name: "Blockchain",
    description: "Dive into blockchain technology, smart contracts, and cryptocurrency applications.",
    image: "/assets/courses/blockchain.jpg",
  },
  {
    name: "Internet of Things (IoT)",
    description: "Learn IoT frameworks, sensor systems, and real-world IoT solutions.",
    image: "/assets/courses/iot.jpg",
  },
  {
    name: "Quantum Computing",
    description: "Understand quantum mechanics principles applied to computing algorithms.",
    image: "/assets/courses/quantum.jpg",
  },
  {
    name: "Game Development",
    description: "Build immersive games with Unity, Unreal Engine, and AR/VR technologies.",
    image: "/assets/courses/game.jpg",
  },

  // --- Business & Management ---
  {
    name: "Digital Marketing",
    description: "Learn SEO, SEM, content marketing, and advanced analytics to reach global audiences.",
    image: "/assets/courses/digital-marketing.jpg",
  },
  {
    name: "Business Analytics",
    description: "Master decision-making with business intelligence tools and predictive analytics.",
    image: "/assets/courses/business-analytics.jpg",
  },
  {
    name: "Project Management",
    description: "Gain PMP, Agile, and Scrum expertise for managing global projects.",
    image: "/assets/courses/project-management.jpg",
  },
  {
    name: "Entrepreneurship",
    description: "Learn startup creation, venture capital, and business innovation strategies.",
    image: "/assets/courses/entrepreneurship.jpg",
  },
  {
    name: "Finance & Investment",
    description: "Study global financial markets, investment strategies, and risk management.",
    image: "/assets/courses/finance.jpg",
  },
  {
    name: "International Business",
    description: "Understand cross-border trade, multinational strategy, and global supply chains.",
    image: "/assets/courses/international-business.jpg",
  },
  {
    name: "E-Commerce",
    description: "Master online retail, dropshipping, and digital business growth strategies.",
    image: "/assets/courses/ecommerce.jpg",
  },
  {
    name: "Leadership & Management",
    description: "Develop global leadership skills, HR strategies, and organizational growth.",
    image: "/assets/courses/leadership.jpg",
  },
  {
    name: "Supply Chain Management",
    description: "Learn logistics, procurement, and demand forecasting in global industries.",
    image: "/assets/courses/supply-chain.jpg",
  },
  {
    name: "Accounting",
    description: "Master international accounting standards, auditing, and financial reporting.",
    image: "/assets/courses/accounting.jpg",
  },

  // --- Healthcare & Science ---
  {
    name: "Public Health",
    description: "Understand epidemiology, healthcare policy, and disease prevention globally.",
    image: "/assets/courses/public-health.jpg",
  },
  {
    name: "Nursing",
    description: "Gain advanced skills in patient care, clinical practice, and nursing leadership.",
    image: "/assets/courses/nursing.jpg",
  },
  {
    name: "Pharmacy",
    description: "Learn pharmaceutical sciences, drug development, and clinical pharmacy.",
    image: "/assets/courses/pharmacy.jpg",
  },
  {
    name: "Biotechnology",
    description: "Explore genetic engineering, bioinformatics, and medical biotechnology.",
    image: "/assets/courses/biotech.jpg",
  },
  {
    name: "Biomedical Engineering",
    description: "Study medical devices, prosthetics, and bio-signal processing.",
    image: "/assets/courses/biomedical.jpg",
  },
  {
    name: "Psychology",
    description: "Learn cognitive psychology, counseling, and behavioral sciences.",
    image: "/assets/courses/psychology.jpg",
  },
  {
    name: "Neuroscience",
    description: "Study the brain, neural networks, and neurobiology of behavior.",
    image: "/assets/courses/neuroscience.jpg",
  },
  {
    name: "Environmental Science",
    description: "Explore ecology, sustainability, and climate change solutions.",
    image: "/assets/courses/environment.jpg",
  },
  {
    name: "Food & Nutrition",
    description: "Learn dietetics, global nutrition standards, and wellness programs.",
    image: "/assets/courses/nutrition.jpg",
  },
  {
    name: "Medicine (MBBS)",
    description: "Comprehensive training in medical sciences, surgery, and patient care.",
    image: "/assets/courses/medicine.jpg",
  },

  // --- Arts, Design & Humanities ---
  {
    name: "Architecture",
    description: "Master modern design, sustainable buildings, and architectural theory.",
    image: "/assets/courses/architecture.jpg",
  },
  {
    name: "Graphic Design",
    description: "Learn UI/UX, branding, and creative digital design skills.",
    image: "/assets/courses/design.jpg",
  },
  {
    name: "Fashion Design",
    description: "Study textile design, fashion marketing, and luxury branding.",
    image: "/assets/courses/fashion.jpg",
  },
  {
    name: "Film & Media",
    description: "Learn cinematography, editing, and storytelling for digital platforms.",
    image: "/assets/courses/film.jpg",
  },
  {
    name: "Music Production",
    description: "Master audio engineering, composition, and digital sound design.",
    image: "/assets/courses/music.jpg",
  },
  {
    name: "Photography",
    description: "Study photography techniques, editing, and visual storytelling.",
    image: "/assets/courses/photography.jpg",
  },
  {
    name: "Interior Design",
    description: "Learn creative spatial design, 3D visualization, and home aesthetics.",
    image: "/assets/courses/interior.jpg",
  },
  {
    name: "Literature",
    description: "Explore global literature, creative writing, and cultural analysis.",
    image: "/assets/courses/literature.jpg",
  },
  {
    name: "History",
    description: "Understand global history, archaeology, and cultural heritage.",
    image: "/assets/courses/history.jpg",
  },
  {
    name: "Philosophy",
    description: "Dive into critical thinking, ethics, and philosophical theories.",
    image: "/assets/courses/philosophy.jpg",
  },

  // --- Emerging Domains & Others ---
  {
    name: "Renewable Energy",
    description: "Learn about solar, wind, and sustainable energy technologies.",
    image: "/assets/courses/renewable.jpg",
  },
  {
    name: "Astronomy & Space Science",
    description: "Study cosmology, astrophysics, and space exploration.",
    image: "/assets/courses/astronomy.jpg",
  },
  {
    name: "Sports Management",
    description: "Learn sports marketing, athlete management, and event organization.",
    image: "/assets/courses/sports.jpg",
  },
  {
    name: "Hospitality & Tourism",
    description: "Master global hospitality, hotel management, and travel business.",
    image: "/assets/courses/hospitality.jpg",
  },
  {
    name: "Culinary Arts",
    description: "Learn gourmet cooking, food innovation, and restaurant management.",
    image: "/assets/courses/culinary.jpg",
  },
  {
    name: "Education & Teaching",
    description: "Gain expertise in pedagogy, curriculum design, and e-learning.",
    image: "/assets/courses/education.jpg",
  },
  {
    name: "Law",
    description: "Understand international law, corporate law, and human rights.",
    image: "/assets/courses/law.jpg",
  },
  {
    name: "Political Science",
    description: "Study governance, diplomacy, and international relations.",
    image: "/assets/courses/political.jpg",
  },
  {
    name: "Linguistics",
    description: "Learn global languages, translation, and applied linguistics.",
    image: "/assets/courses/linguistics.jpg",
  },
  {
    name: "Artificial General Intelligence",
    description: "Advanced exploration of human-like AI systems and consciousness studies.",
    image: "/assets/courses/agi.jpg",
  },
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