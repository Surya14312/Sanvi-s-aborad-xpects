import React from "react";
import { useNavigate } from "react-router-dom";

function TrendingBlogs() {
  const navigate = useNavigate();

  const blogs = [
    {
      title: "The Sanvi's Aboard Education Fair is Back in 2025!",
      image: "/assets/blogs/education-fair.jpg",
      slug: "education-fair-2025",
      content: [
        {
          heading: "Overview",
          text: "The Sanvi's Aboard Education Fair 2025 is the largest student recruitment event of the year, featuring over 150 global universities from 20+ countries.",
        },
        {
          heading: "Event Highlights",
          text: "Meet university representatives face-to-face, attend expert-led workshops, and access one-on-one counselling sessions.",
        },
        {
          heading: "Why Attend?",
          text: "You will receive insider admission tips, fee waivers for on-spot applications, and first-hand information about scholarships.",
        },
        {
          heading: "Special Features",
          text: "Live alumni panels, on-the-spot eligibility checks, scholarship application guidance, and career roadmap consultations.",
        },
        {
          heading: "Who Should Attend?",
          text: "High school graduates, undergraduates, postgraduates, working professionals, and parents.",
        },
      ],
    },
    {
      title: "MBA in Canada for Indian Students",
      image: "/assets/blogs/mba-canada.jpg",
      slug: "mba-in-canada",
      content: [
        {
          heading: "Why Choose Canada for Your MBA?",
          text: "Canada offers globally recognized MBA programs, a diverse learning environment, and post-graduation work permits (PGWP) of up to 3 years.",
        },
        {
          heading: "Top Universities",
          text: "Rotman School of Management (University of Toronto), Ivey Business School (Western University), Desautels (McGill University), Sauder (UBC), Smith School (Queen’s University).",
        },
        {
          heading: "Eligibility Requirements",
          text: "Bachelor’s degree in any field, GMAT/GRE score, IELTS/TOEFL proficiency, and ideally 2-3 years of work experience.",
        },
        {
          heading: "Tuition & Scholarships",
          text: "Fees range CAD 30,000–60,000; scholarships include Ontario Graduate Scholarship, university-specific awards, and entrance merit grants.",
        },
        {
          heading: "Career Outcomes",
          text: "Graduates earn CAD 80,000–120,000 annually in sectors like consulting, finance, technology, and marketing.",
        },
      ],
    },
    {
      title: "Popular Courses to Study Abroad",
      image: "/assets/blogs/popular-courses.jpg",
      slug: "popular-courses",
      content: [
        {
          heading: "Data Science & AI",
          text: "High demand globally; job roles include Data Analyst, Machine Learning Engineer, and AI Specialist.",
        },
        {
          heading: "Healthcare & Nursing",
          text: "Shortage of healthcare workers in Canada, UK, and Australia makes this a strong PR pathway.",
        },
        {
          heading: "Business & Management",
          text: "Ideal for leadership roles and entrepreneurial ventures.",
        },
        {
          heading: "Creative Arts",
          text: "Fashion, animation, and design offer high global exposure.",
        },
      ],
    },
    {
      title: "Scholarships for International Students 2025",
      image: "/assets/blogs/scholarships.jpg",
      slug: "scholarships-2025",
      content: [
        {
          heading: "Why Scholarships Matter",
          text: "They can reduce tuition by 30–50% and sometimes cover living expenses.",
        },
        {
          heading: "Types of Scholarships",
          text: "Merit-based, need-based, country-specific, and subject-specific scholarships.",
        },
        {
          heading: "Application Tips",
          text: "Apply early, prepare a strong SOP, and collect recommendation letters.",
        },
      ],
    },
    {
      title: "Top Universities in the UK for 2025",
      image: "/assets/blogs/uk-universities.jpg",
      slug: "top-uk-universities",
      content: [
        {
          heading: "University of Oxford",
          text: "Known for academic excellence and strong alumni networks.",
        },
        {
          heading: "University of Cambridge",
          text: "Renowned for research in sciences and humanities.",
        },
        {
          heading: "Imperial College London",
          text: "Specializes in engineering, medicine, and technology.",
        },
        {
          heading: "London School of Economics",
          text: "Leader in economics, politics, and social sciences.",
        },
      ],
    },
    {
      title: "Cost of Studying Abroad - Complete Guide",
      image: "/assets/blogs/cost-study-abroad.jpg",
      slug: "cost-of-studying-abroad",
      content: [
        {
          heading: "Tuition Fees",
          text: "Vary by country and program: CAD 15k–60k (Canada), GBP 12k–40k (UK), AUD 20k–50k (Australia).",
        },
        {
          heading: "Living Expenses",
          text: "Housing, food, and transport can cost CAD 10k–20k annually.",
        },
        {
          heading: "Hidden Costs",
          text: "Visa fees, insurance, and textbooks.",
        },
      ],
    },
    {
      title: "Student Visa Tips for 2025",
      image: "/assets/blogs/student-visa.jpg",
      slug: "student-visa-tips",
      content: [
        {
          heading: "Start Early",
          text: "Visa processes can take weeks; start applications at least 3–4 months in advance.",
        },
        {
          heading: "Prepare Financial Proof",
          text: "Show bank statements, scholarship letters, or sponsor affidavits.",
        },
        {
          heading: "Interview Preparation",
          text: "Be confident, clear, and honest about study plans.",
        },
      ],
    },
    {
      title: "How to Choose the Right Country for Higher Education",
      image: "/assets/blogs/choose-country.jpg",
      slug: "choose-right-country",
      content: [
        {
          heading: "Budget",
          text: "Factor in tuition, living expenses, and scholarships.",
        },
        {
          heading: "Career Goals",
          text: "Choose a country that offers work permits and job opportunities in your field.",
        },
        {
          heading: "Language & Culture",
          text: "Pick a country where you can adapt quickly.",
        },
      ],
    },
  ];

  const handleReadMore = (slug) => {
    navigate(`/blog/${slug}`, { state: blogs.find((b) => b.slug === slug) });
  };

  return (
    <section className="blogs-section">
      <h2 className="blogs-title">
        Trending <span>Insights & Blogs</span>
      </h2>

      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} />
            <div className="blog-info">
              <h3>{blog.title}</h3>
              <button
                className="read-more-btn"
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
