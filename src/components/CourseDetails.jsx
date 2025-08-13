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
      title: "Healthcare",
      duration: "2-4 years",
      fees: "USD 20,000 - USD 45,000 per year",
      eligibility: "High school diploma or Bachelor’s, IELTS/TOEFL",
      description:
        "Healthcare programs prepare students for roles in nursing, healthcare management, and public health.",
      careers: [
        "Nurse Practitioner",
        "Healthcare Manager",
        "Public Health Officer",
      ],
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
      title: "Cybersecurity",
      duration: "1-2 years",
      fees: "CAD 18,000 - CAD 32,000 per year",
      eligibility: "Bachelor’s in relevant field, IELTS 6.5+",
      description:
        "Cybersecurity programs in Canada focus on protecting digital assets and combating cyber threats.",
      careers: [
        "Cybersecurity Analyst",
        "Information Security Manager",
        "Penetration Tester",
      ],
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
      title: "Marketing",
      duration: "1-2 years",
      fees: "CAD 15,000 - CAD 28,000 per year",
      eligibility: "Bachelor’s degree, IELTS 6.5+",
      description:
        "Marketing courses in Canada cover branding, digital marketing, and consumer behavior for the global market.",
      careers: ["Marketing Manager", "Brand Strategist", "Digital Marketer"],
    },
  ],
  Europe: [
    {
      title: "Environmental Science",
      duration: "3 years",
      fees: "EUR 10,000 - EUR 25,000 per year",
      eligibility: "High school diploma, IELTS 6.0+",
      description:
        "Environmental Science in Europe focuses on sustainability, climate change, and natural resource management.",
      careers: [
        "Environmental Consultant",
        "Wildlife Manager",
        "Climate Analyst",
      ],
    },
    {
      title: "Accounting",
      duration: "3 years",
      fees: "EUR 8,000 - EUR 20,000 per year",
      eligibility: "High school diploma, IELTS 6.0+",
      description:
        "Accounting programs prepare students for roles in auditing, taxation, and financial analysis.",
      careers: ["Accountant", "Auditor", "Financial Advisor"],
    },
    {
      title: "Medicine",
      duration: "5-6 years",
      fees: "EUR 15,000 - EUR 45,000 per year",
      eligibility: "High school diploma with science subjects, IELTS 6.5+",
      description:
        "Medicine degrees in Europe combine academic study with clinical training to prepare students for medical practice.",
      careers: ["Doctor", "Surgeon", "Medical Researcher"],
    },
    {
      title: "Information Technology",
      duration: "3 years",
      fees: "EUR 8,000 - EUR 25,000 per year",
      eligibility: "High school diploma, IELTS 6.0+",
      description:
        "IT programs in Europe focus on software development, networking, and cybersecurity skills.",
      careers: ["IT Consultant", "Software Developer", "Systems Analyst"],
    },
  ],
  Japan: [
    {
      title: "Robotics Engineering",
      duration: "4 years",
      fees: "JPY 800,000 - JPY 1,500,000 per year",
      eligibility: "High school diploma, JLPT N2 or IELTS 6.0+",
      description:
        "Robotics Engineering in Japan covers automation, AI integration, and hardware design in a global tech hub.",
      careers: ["Robotics Engineer", "Automation Specialist", "AI Developer"],
    },
    {
      title: "Game Development",
      duration: "3-4 years",
      fees: "JPY 700,000 - JPY 1,200,000 per year",
      eligibility: "High school diploma, JLPT N2 or IELTS 6.0+",
      description:
        "Game Development in Japan offers expertise in design, animation, and programming for global gaming markets.",
      careers: ["Game Developer", "Game Designer", "3D Artist"],
    },
    {
      title: "Business Management",
      duration: "2 years (Master’s) / 4 years (Bachelor’s)",
      fees: "JPY 900,000 - JPY 1,500,000 per year",
      eligibility: "Bachelor’s degree, JLPT N2 or IELTS 6.0+",
      description:
        "Business Management in Japan focuses on innovation, leadership, and global market strategies.",
      careers: ["Business Analyst", "Operations Manager", "Marketing Director"],
    },
    {
      title: "Cultural Studies",
      duration: "3 years",
      fees: "JPY 600,000 - JPY 1,000,000 per year",
      eligibility: "High school diploma, JLPT N2 or IELTS 6.0+",
      description:
        "Cultural Studies in Japan explores language, arts, traditions, and history in an immersive environment.",
      careers: ["Cultural Advisor", "Interpreter", "Tourism Specialist"],
    },
  ],
  China: [
    {
      title: "Cybersecurity",
      duration: "1-2 years",
      fees: "CNY 50,000 - CNY 90,000 per year",
      eligibility: "Bachelor’s in relevant field, IELTS 6.0+",
      description:
        "Cybersecurity programs in China focus on protecting digital assets and combating cyber threats.",
      careers: [
        "Cybersecurity Analyst",
        "Penetration Tester",
        "Security Engineer",
      ],
    },
    {
      title: "Engineering",
      duration: "4 years",
      fees: "CNY 40,000 - CNY 80,000 per year",
      eligibility: "High school diploma, IELTS 6.0+",
      description:
        "Engineering programs in China offer a range of disciplines from civil to aerospace engineering.",
      careers: ["Mechanical Engineer", "Civil Engineer", "Project Manager"],
    },
    {
      title: "Artificial Intelligence",
      duration: "2 years",
      fees: "CNY 60,000 - CNY 100,000 per year",
      eligibility: "Bachelor’s in Computer Science or related, IELTS 6.0+",
      description:
        "AI programs in China focus on deep learning, data analytics, and intelligent systems.",
      careers: ["AI Engineer", "Data Scientist", "Robotics Engineer"],
    },
    {
      title: "Marketing",
      duration: "1-2 years",
      fees: "CNY 40,000 - CNY 70,000 per year",
      eligibility: "Bachelor’s degree, IELTS 6.0+",
      description:
        "Marketing courses in China prepare students for international business and digital campaigns.",
      careers: ["Marketing Manager", "Brand Strategist", "Digital Marketer"],
    },
  ],
  Dubai: [
    {
      title: "Hospitality Management",
      duration: "3-4 years",
      fees: "AED 40,000 - AED 70,000 per year",
      eligibility: "High school diploma, IELTS 6.0+",
      description:
        "Hospitality Management in Dubai offers training in luxury tourism, hotel operations, and event management.",
      careers: ["Hotel Manager", "Event Coordinator", "Tourism Director"],
    },
    {
      title: "Architecture",
      duration: "4-5 years",
      fees: "AED 50,000 - AED 80,000 per year",
      eligibility: "High school diploma, IELTS 6.0+",
      description:
        "Architecture programs in Dubai blend modern design with Islamic architectural heritage.",
      careers: ["Architect", "Urban Planner", "Interior Designer"],
    },
    {
      title: "Business Analytics",
      duration: "1-2 years",
      fees: "AED 45,000 - AED 70,000 per year",
      eligibility: "Bachelor’s degree, IELTS 6.0+",
      description:
        "Business Analytics in Dubai equips students with skills to analyze market data for strategic decisions.",
      careers: ["Business Analyst", "Data Strategist", "Operations Manager"],
    },
    {
      title: "Information Technology",
      duration: "3 years",
      fees: "AED 40,000 - AED 65,000 per year",
      eligibility: "High school diploma, IELTS 6.0+",
      description:
        "IT programs in Dubai cover software development, networking, and cybersecurity.",
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
