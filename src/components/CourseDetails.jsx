import React from "react";
import { useParams, Link } from "react-router-dom";

function CourseDetails() {
  const { country, courseTitle } = useParams();

  const coursesData = {
    UK: [
      {
        title: "MBA",
        duration: "1-2 years",
        fees: "£20,000 - £45,000 per year",
        eligibility: "Bachelor’s degree, IELTS 6.5+",
        description:
          "An MBA in the UK equips students with leadership, management, and strategic thinking skills, preparing them for global business challenges.",
        careers: [
          "Business Manager",
          "Consultant",
          "Entrepreneur",
          "Marketing Director",
        ],
      },
      {
        title: "Data Science",
        duration: "1 year",
        fees: "£18,000 - £35,000 per year",
        eligibility: "Bachelor’s in relevant field, IELTS 6.5+",
        description:
          "Data Science in the UK focuses on statistics, AI, and big data analytics to prepare students for the future of technology.",
        careers: ["Data Analyst", "Machine Learning Engineer", "AI Specialist"],
      },
      {
        title: "Artificial Intelligence",
        duration: "1 year",
        fees: "£20,000 - £40,000 per year",
        eligibility: "Bachelor’s in Computer Science or related, IELTS 6.5+",
        description:
          "UK AI programs focus on machine learning, robotics, and intelligent systems for industries of the future.",
        careers: ["AI Engineer", "Data Scientist", "Robotics Engineer"],
      },
      {
        title: "Law",
        duration: "3 years (LLB) / 1 year (LLM)",
        fees: "£15,000 - £30,000 per year",
        eligibility:
          "High school diploma (LLB) or Bachelor’s (LLM), IELTS 6.5+",
        description:
          "UK Law degrees are globally recognized and prepare students for careers in legal practice, policy-making, and corporate law.",
        careers: ["Solicitor", "Barrister", "Legal Advisor"],
      },
    ],
    Canada: [
      {
        title: "Business Analytics",
        duration: "1 year",
        fees: "CAD 20,000 - CAD 35,000 per year",
        eligibility: "Bachelor’s degree, IELTS 6.5+",
        description:
          "Business Analytics in Canada combines data science and business strategy, enabling students to make data-driven decisions.",
        careers: ["Business Analyst", "Operations Manager", "Data Strategist"],
      },
      {
        title: "Nursing",
        duration: "2-4 years",
        fees: "CAD 15,000 - CAD 30,000 per year",
        eligibility: "High school diploma or Bachelor’s, IELTS 6.5+",
        description:
          "Nursing programs in Canada prepare students for healthcare roles with practical training in hospitals and clinics.",
        careers: [
          "Registered Nurse",
          "Healthcare Administrator",
          "Medical Researcher",
        ],
      },
      {
        title: "Cyber Security",
        duration: "1-2 years",
        fees: "CAD 18,000 - CAD 32,000 per year",
        eligibility: "Bachelor’s in relevant field, IELTS 6.5+",
        description:
          "Cyber Security programs in Canada focus on protecting digital assets and combating cyber threats.",
        careers: [
          "Cybersecurity Analyst",
          "Information Security Manager",
          "Penetration Tester",
        ],
      },
      {
        title: "Marketing",
        duration: "1-2 years",
        fees: "CAD 15,000 - CAD 28,000 per year",
        eligibility: "Bachelor’s degree, IELTS 6.5+",
        description:
          "Marketing courses in Canada cover branding, digital marketing, and consumer behavior for the global market.",
        careers: ["Marketing Manager", "Brand Strategist", "Digital Marketer"],
      },
    ],
    USA: [
      {
        title: "Computer Science",
        duration: "2 years (Master’s) / 4 years (Bachelor’s)",
        fees: "USD 30,000 - USD 60,000 per year",
        eligibility: "Bachelor’s in relevant field, TOEFL 80+ or IELTS 6.5+",
        description:
          "Computer Science programs in the USA emphasize software engineering, AI, cybersecurity, and advanced computing technologies.",
        careers: ["Software Engineer", "AI Engineer", "Cybersecurity Analyst"],
      },
      {
        title: "MBA",
        duration: "2 years",
        fees: "USD 40,000 - USD 90,000 per year",
        eligibility: "Bachelor’s degree, GMAT, TOEFL/IELTS",
        description:
          "The MBA in the USA is globally recognized for its emphasis on leadership, entrepreneurship, and hands-on business projects.",
        careers: ["Business Consultant", "Finance Manager", "Entrepreneur"],
      },
      {
        title: "Engineering",
        duration: "4 years (Bachelor’s) / 2 years (Master’s)",
        fees: "USD 25,000 - USD 55,000 per year",
        eligibility: "High school diploma or Bachelor’s, IELTS/TOEFL",
        description:
          "Engineering programs in the USA cover mechanical, civil, electrical, and aerospace engineering with a focus on innovation.",
        careers: ["Mechanical Engineer", "Civil Engineer", "Project Manager"],
      },
      {
        title: "Finance",
        duration: "1-2 years",
        fees: "USD 30,000 - USD 50,000 per year",
        eligibility: "Bachelor’s in related field, IELTS/TOEFL",
        description:
          "Finance courses in the USA provide skills in investment, banking, and corporate finance for global markets.",
        careers: [
          "Financial Analyst",
          "Investment Banker",
          "Portfolio Manager",
        ],
      },
      {
        title: "Health Care",
        duration: "2-4 years",
        fees: "USD 20,000 - USD 45,000 per year",
        eligibility: "High school diploma or Bachelor’s, IELTS/TOEFL",
        description:
          "Health care programs prepare students for roles in nursing, healthcare management, and public health.",
        careers: [
          "Nurse Practitioner",
          "Healthcare Manager",
          "Public Health Officer",
        ],
      },
    ],
    Australia: [
      {
        title: "Environmental Science",
        duration: "3 years",
        fees: "AUD 25,000 - AUD 40,000 per year",
        eligibility: "High school diploma, IELTS 6.0+",
        description:
          "Environmental Science in Australia focuses on sustainability, climate change, and natural resource management.",
        careers: [
          "Environmental Consultant",
          "Wildlife Manager",
          "Climate Analyst",
        ],
      },
      {
        title: "Accountancy",
        duration: "3 years",
        fees: "AUD 20,000 - AUD 35,000 per year",
        eligibility: "High school diploma, IELTS 6.0+",
        description:
          "Accountancy programs prepare students for roles in auditing, taxation, and financial analysis.",
        careers: ["Accountant", "Auditor", "Financial Advisor"],
      },
      {
        title: "Medicine",
        duration: "5-7 years",
        fees: "AUD 50,000 - AUD 75,000 per year",
        eligibility: "High school diploma with science subjects, IELTS 7.0+",
        description:
          "Medicine degrees in Australia combine academic study with clinical training to prepare students for medical practice.",
        careers: ["Doctor", "Surgeon", "Medical Researcher"],
      },
      {
        title: "Information Technology",
        duration: "3 years",
        fees: "AUD 20,000 - AUD 38,000 per year",
        eligibility: "High school diploma, IELTS 6.0+",
        description:
          "IT programs in Australia focus on software development, networking, and cybersecurity skills.",
        careers: ["IT Consultant", "Software Developer", "Systems Analyst"],
      },
    ],
  };

  const course =
    coursesData[country]?.find(
      (c) => c.title.toLowerCase() === courseTitle.toLowerCase()
    ) || null;

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Course not found</h2>
        <Link to="/">Go back</Link>
      </div>
    );
  }

  return (
    <div className="course-details">
      <h1>{course.title}</h1>
      <h3>Country: {country}</h3>
      <p className="course-description">{course.description}</p>

      <div className="course-info">
        <p>
          <strong>Duration:</strong> {course.duration}
        </p>
        <p>
          <strong>Fees:</strong> {course.fees}
        </p>
        <p>
          <strong>Eligibility:</strong> {course.eligibility}
        </p>
      </div>

      <div className="course-careers">
        <h4>Career Opportunities:</h4>
        <ul>
          {course.careers.map((career, index) => (
            <li key={index}>{career}</li>
          ))}
        </ul>
      </div>

      <Link className="back-link" to="/">
        ← Back to Courses
      </Link>
    </div>
  );
}

export default CourseDetails;
