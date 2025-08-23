// src/pages/CourseDetails.jsx
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
      eligibility: "Bachelor’s degree (any discipline), IELTS 6.5+",
      description:
        "An MBA in the UK equips students with leadership, management, and strategic thinking skills, preparing them for global business challenges.",
      specializations: ["Finance", "Marketing", "HR", "International Business"],
      topUniversities: ["Oxford", "Cambridge", "London Business School"],
      benefits: [
        "1-year accelerated MBA available",
        "Strong alumni networks",
        "High employability in global firms",
      ],
      careers: ["Business Manager", "Consultant", "Entrepreneur", "Marketing Director"],
      averageSalary: "£45,000 - £90,000",
    },
    {
      title: "Data Science",
      duration: "1 year",
      fees: "£18,000 - £35,000 per year",
      eligibility: "Bachelor’s in Computer Science, Statistics, or related field, IELTS 6.5+",
      description:
        "Data Science in the UK focuses on statistics, AI, and big data analytics to prepare students for the future of technology.",
      specializations: ["Big Data", "Machine Learning", "AI"],
      topUniversities: ["Imperial College London", "UCL", "University of Edinburgh"],
      benefits: [
        "Hands-on training with real-world data",
        "Access to Europe’s tech hub (London, Manchester)",
        "Strong demand across industries",
      ],
      careers: ["Data Analyst", "Machine Learning Engineer", "AI Specialist"],
      averageSalary: "£40,000 - £70,000",
    },
    {
      title: "Artificial Intelligence",
      duration: "1 year",
      fees: "£20,000 - £40,000 per year",
      eligibility: "Bachelor’s in Computer Science, Engineering, or related, IELTS 6.5+",
      description:
        "UK AI programs focus on machine learning, robotics, and intelligent systems for industries of the future.",
      universities: ["University of Cambridge", "University of Oxford", "Imperial College London"],
      careers: ["AI Engineer", "Data Scientist", "Robotics Engineer"],
      benefits: [
        "UK is a leader in robotics and AI ethics",
        "Opportunities in healthcare AI, fintech, and defense",
      ],
      averageSalary: "£45,000 - £80,000",
    },
    {
      title: "Law",
      duration: "3 years (LLB) / 1 year (LLM)",
      fees: "£15,000 - £30,000 per year",
      eligibility: "High school diploma (LLB) or Bachelor’s degree (LLM), IELTS 6.5+",
      description:
        "UK Law degrees are globally recognized and prepare students for careers in legal practice, policy-making, and corporate law.",
      topUniversities: ["King’s College London", "University of Edinburgh", "Durham University"],
      careers: ["Solicitor", "Barrister", "Legal Advisor"],
      benefits: [
        "Law graduates eligible for SQE (Solicitor exams)",
        "International recognition of UK law degrees",
      ],
      averageSalary: "£35,000 - £70,000",
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
      specializations: ["Artificial Intelligence", "Cybersecurity", "Cloud Computing"],
      topUniversities: ["MIT", "Stanford", "Carnegie Mellon"],
      benefits: [
        "Access to Silicon Valley and top tech firms",
        "STEM-designated programs (3-year OPT work visa)",
      ],
      internships: ["Google", "Microsoft", "Amazon", "Meta"],
      careers: ["Software Engineer", "AI Engineer", "Cybersecurity Analyst"],
      averageSalary: "USD 80,000 - 120,000",
    },
    {
      title: "Engineering",
      duration: "4 years (Bachelor’s) / 2 years (Master’s)",
      fees: "USD 25,000 - USD 55,000 per year",
      eligibility: "High school diploma or Bachelor’s, IELTS/TOEFL",
      description:
        "Engineering programs in the USA cover mechanical, civil, electrical, and aerospace engineering with a focus on innovation.",
      specializations: ["Mechanical", "Civil", "Electrical", "Aerospace"],
      topUniversities: ["MIT", "Georgia Tech", "UC Berkeley"],
      benefits: ["World’s best research facilities", "Strong job demand in US infrastructure projects"],
      careers: ["Mechanical Engineer", "Civil Engineer", "Project Manager"],
      averageSalary: "USD 70,000 - 110,000",
    },
    {
      title: "Finance",
      duration: "1-2 years (Master’s) / 3-4 years (Bachelor’s)",
      fees: "USD 30,000 - USD 50,000 per year",
      eligibility: "Bachelor’s in related field (Economics, Business, Accounting, Commerce), IELTS 6.5+ or TOEFL 80+",
      description:
        "Finance courses in the USA provide skills in investment, banking, and corporate finance for global markets.",
      specializations: ["Corporate Finance", "Investment Banking", "Risk Management", "Fintech"],
      topUniversities: ["Harvard", "Wharton (UPenn)", "Stanford", "NYU Stern"],
      benefits: ["Wall Street exposure", "High ROI with global career opportunities"],
      internships: ["Goldman Sachs", "JP Morgan", "Deloitte"],
      careers: ["Financial Analyst", "Investment Banker", "Portfolio Manager"],
      averageSalary: "USD 70,000 - 120,000",
    },
    {
      title: "Healthcare",
      duration: "2-4 years",
      fees: "USD 20,000 - USD 45,000 per year",
      eligibility: "High school diploma or Bachelor’s, IELTS/TOEFL",
      description:
        "Healthcare programs prepare students for roles in nursing, healthcare management, and public health.",
      specializations: ["Nursing", "Public Health", "Healthcare Administration"],
      topUniversities: ["Johns Hopkins", "Harvard", "UCSF"],
      benefits: ["High demand in US healthcare industry", "Strong immigration support for nurses"],
      careers: ["Nurse Practitioner", "Healthcare Manager", "Public Health Officer"],
      averageSalary: "USD 60,000 - 90,000",
    },
  ],

  Europe: [
    {
      title: "Environmental Science",
      duration: "2 years",
      fees: "€10,000 - €20,000 per year",
      eligibility: "Bachelor’s in Science, IELTS 6.0+",
      description:
        "Programs in Europe emphasize sustainability, climate change, and conservation practices.",
      careers: ["Environmental Consultant", "Climate Analyst", "Researcher"],
    },
    {
      title: "Accounting",
      duration: "3-4 years",
      fees: "€8,000 - €18,000 per year",
      eligibility: "High school diploma or Bachelor’s, IELTS 6.0+",
      description: "Accounting in Europe offers globally accepted qualifications like ACCA and IFRS.",
      careers: ["Chartered Accountant", "Financial Auditor", "Tax Consultant"],
    },
    {
      title: "Medicine",
      duration: "5-6 years",
      fees: "€15,000 - €30,000 per year",
      eligibility: "High school diploma (Biology, Chemistry), IELTS 6.5+",
      description: "European medical schools are globally recognized for high-quality education.",
      careers: ["Doctor", "Surgeon", "Medical Researcher"],
    },
    {
      title: "Information Technology",
      duration: "3 years (Bachelor’s) / 2 years (Master’s)",
      fees: "€9,000 - €20,000 per year",
      eligibility: "Bachelor’s in relevant field, IELTS 6.0+",
      description:
        "IT programs cover cybersecurity, cloud computing, and software development in Europe’s tech hubs.",
      careers: ["Software Engineer", "IT Consultant", "Cybersecurity Specialist"],
    },
    
  
    {
      title: "Business Analytics",
      duration: "1-2 years",
      fees: "€12,000 - €22,000 per year",
      eligibility: "Bachelor’s in Business, IT, or related field",
      description: "Focuses on data-driven business solutions and decision-making.",
      careers: ["Business Analyst", "Data Consultant", "Strategy Analyst"],
    },
  ],

  Dubai: [
    // {
    //   title: "Environmental Science",
    //   duration: "2-3 years",
    //   fees: "AED 40,000 - AED 70,000 per year",
    //   eligibility: "Bachelor’s in Science, IELTS 6.0+",
    //   description:
    //     "Dubai’s Environmental Science programs emphasize sustainability in desert and urban ecosystems.",
    //   careers: ["Sustainability Consultant", "Research Scientist"],
    // },
      {
      title: "Architecture",
      duration: "3-5 years",
      fees: "€10,000 - €20,000 per year",
      eligibility: "High school diploma with Math/Art background, IELTS 6.0+",
      description:
        "Architecture programs in Europe emphasize design, sustainability, and cultural heritage.",
      careers: ["Architect", "Urban Planner", "Interior Designer"],
    },
   {
      title: "Hospitality Management",
      duration: "3-4 years",
      fees: "€12,000 - €25,000 per year",
      eligibility: "High school diploma, IELTS 6.0+",
      description:
        "Europe is home to some of the best hospitality schools, offering global career opportunities.",
      careers: ["Hotel Manager", "Event Manager", "Tourism Consultant"],
    },
    {
      title: "Information Technology",
      duration: "3-4 years",
      fees: "AED 40,000 - AED 75,000 per year",
      eligibility: "High school diploma or Bachelor’s",
      description:
        "Dubai IT programs cover AI, cloud, and cybersecurity with ties to tech companies in the UAE.",
      careers: ["Software Developer", "Cybersecurity Specialist", "IT Consultant"],
    },
     {
      title: "Business Analytics",
      duration: "1-2 years",
      fees: "SGD 20,000 - SGD 40,000 per year",
      eligibility: "Bachelor’s in Business, IT, or related field",
      description: "Programs in Singapore provide practical exposure to analytics and data science.",
      careers: ["Business Analyst", "Data Consultant"],
    },
  ],

  Singapore: [
    {
      title: "Business Analytics",
      duration: "1-2 years",
      fees: "SGD 20,000 - SGD 40,000 per year",
      eligibility: "Bachelor’s in Business, IT, or related field",
      description: "Programs in Singapore provide practical exposure to analytics and data science.",
      careers: ["Business Analyst", "Data Consultant"],
    },
    {
      title: "Cybersecurity",
      duration: "1-2 years",
      fees: "SGD 18,000 - SGD 35,000 per year",
      eligibility: "Bachelor’s in IT/CS or related, IELTS 6.0+",
      description:
        "Singapore cybersecurity programs emphasize digital safety in finance and tech industries.",
      careers: ["Cybersecurity Analyst", "Security Engineer", "Network Specialist"],
    },
    {
      title: "Marketing",
      duration: "1-2 years",
      fees: "SGD 15,000 - SGD 30,000 per year",
      eligibility: "Bachelor’s in Business/Marketing",
      description:
        "Marketing programs focus on digital marketing, branding, and Asia-Pacific markets.",
      careers: ["Marketing Manager", "Digital Strategist", "Brand Consultant"],
    },
    {
      title: "Finance",
      duration: "2 years",
      fees: "SGD 20,000 - SGD 45,000 per year",
      eligibility: "Bachelor’s in Business/Commerce",
      description:
        "Finance programs in Singapore provide exposure to Asia’s financial hub.",
      careers: ["Financial Analyst", "Banking Specialist", "Wealth Manager"],
    },
  ],

  "Special Pathway Programs": [
    {
      title: "2+2 (China + Japan)",
      duration: "4 years total (2+2 split)",
      fees: "Affordable compared to Western countries",
      eligibility: "High school diploma or equivalent",
      description: "Study 2 years in China + 2 years in Japan and gain international exposure.",
      benefits: [
        "Dual country exposure in Asia’s top tech hubs",
        "Strong focus on AI, Robotics, and Engineering",
        "Affordable tuition compared to Western countries",
      ],
      universities: ["Tsinghua University (China)", "Tokyo University (Japan)"],
      careers: ["Robotics Engineer", "AI Developer", "Automation Specialist"],
      futureScope: "Graduates can pursue global roles in robotics, electronics, and AI-driven industries.",
    },
    {
      title: "India + UK",
      duration: "1-2 years in India + 2 years in UK",
      fees: "Lower tuition for initial years in India",
      eligibility: "Bachelor’s degree (transfer options available)",
      description: "Start your program in India and transfer to a top UK university.",
      benefits: [
        "Lower tuition for initial years",
        "Opportunity to earn a UK degree",
        "Save on living costs while studying in India",
      ],
      universities: ["Delhi University (India)", "University of Manchester (UK)"],
      careers: ["Business Analyst", "Consultant", "Marketing Director"],
      futureScope: "Ideal for students seeking cost-effective UK education with international exposure.",
    },
    {
      title: "India + USA",
      duration: "2 years in India + 2 years in USA",
      fees: "Save on first two years in India",
      eligibility: "Bachelor’s degree (transfer eligibility required)",
      description: "Begin your studies in India and complete your program in the USA.",
      benefits: [
        "Strong foundation in India before transfer",
        "Pathway to top US universities",
        "Opportunities for OPT and H1B visas",
      ],
      universities: ["IIT (India)", "MIT (USA)", "Stanford University (USA)"],
      careers: ["Software Engineer", "AI Engineer", "Data Scientist"],
      futureScope: "Leads to excellent career opportunities in US tech & business industries.",
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
      <h3>
        {country === "SpecialPathwayPrograms"
          ? "Special Pathway Program"
          : `Country: ${country}`}
      </h3>
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

      <Link className="back-link" to="/destinations">
        ← Back to Courses
      </Link>
    </div>
  );
}

export default CourseDetails;
