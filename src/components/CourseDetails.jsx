import React from "react";
import { useParams, Link } from "react-router-dom";

import { mbaData } from "../data/mbaData";
import { dataScienceData } from "../data/dataScienceData";
import { aiData } from "../data/aiData";
import { lawData } from "../data/lawData";
import { environmentalScienceData } from "../data/environmentalScienceData";
import { accountingData } from "../data/accountingData";
import { medicineData } from "../data/medicineData";
import { itData } from "../data/itData";
import { hospitalityData } from "../data/hospitalityData";
import { architectureData } from "../data/architectureData";
import { businessAnalyticsData } from "../data/businessAnalyticsData";
import { cybersecurityData } from "../data/cybersecurityData";
import { marketingData } from "../data/marketingData";
import { financeData } from "../data/financeData";
import { internationalRelationsData } from "../data/internationalRelationsData";
import { businessManagementData } from "../data/businessManagementData";
import { mbbsData } from "../data/mbbsData";
import { computerScienceData } from "../data/computerScienceData";
import { tourismManagementData } from "../data/tourismManagementData";
import { logisticsSupplyChainData } from "../data/logisticsSupplyChainData";
import { mediaData } from "../data/mediaData";
import { fashionData } from "../data/fashionData";
import { politicalScienceData } from "../data/politicalScienceData";

const normalizeTitle = (title) =>
  title.toLowerCase().replace(/\s+/g, " ").trim();

function CourseDetails() {
  const { country, courseTitle } = useParams();
  const normalizedTitle = normalizeTitle(courseTitle);

  // Static courses by country
  const coursesData = {
    UK: [
      { title: "MBA", description: "MBA in UK...", careers: ["Manager", "Consultant"] },
      { title: "Data Science", description: "Data Science in UK...", careers: ["Data Analyst", "ML Engineer"] },
      { title: "Artificial Intelligence", description: "AI in UK...", careers: ["AI Engineer", "ML Engineer"] },
      { title: "Law", description: "Law in UK...", careers: ["Corporate Lawyer", "Legal Advisor"] },
      { title: "Marketing", description: "Marketing in UK...", careers: ["Marketing Manager", "Brand Manager"] },
    ],
    Europe: [
      { title: "Environmental Science", description: "Environmental Science in Europe...", careers: ["Environmental Consultant", "Climate Analyst"] },
      { title: "Accounting", description: "Accounting in Europe...", careers: ["Accountant", "Auditor"] },
      { title: "Medicine & Healthcare", description: "Medicine & Healthcare in Europe...", careers: ["Doctor", "Nurse", "Pharmacist"] },
      { title: "Information Technology", description: "IT in Europe...", careers: ["Software Developer", "System Analyst"] },
      { title: "Marketing", description: "Marketing in Europe...", careers: ["Marketing Manager", "Digital Marketing Specialist"] },
    ],
    Dubai: [
      { title: "Hospitality Management", description: "Hospitality Management in Dubai...", careers: ["Hotel Manager", "Event Coordinator"] },
      { title: "Architecture", description: "Architecture in Dubai...", careers: ["Architect", "Urban Planner"] },
      { title: "Business Analytics", description: "Business Analytics in Dubai...", careers: ["Business Analyst", "Data Consultant"] },
      { title: "Information Technology", description: "IT in Dubai...", careers: ["Network Engineer", "IT Consultant"] },
      { title: "Marketing", description: "Marketing in Dubai...", careers: ["Marketing Manager", "Brand Manager"] },
    ],
    Singapore: [
      { title: "Business Analytics", description: "Business Analytics in Singapore...", careers: ["Business Analyst", "Data Consultant"] },
      { title: "Cybersecurity", description: "Cybersecurity in Singapore...", careers: ["Network Security Engineer"] },
      { title: "Marketing", description: "Marketing in Singapore...", careers: ["Marketing Manager", "Digital Marketing Specialist"] },
    ],
  };

  // Dynamic data mapping for detailed sections
  const dynamicCourses = {
    "mba": mbaData,
    "data science": dataScienceData,
    "artificial intelligence": aiData,
    "ai": aiData,
    "law": lawData,
    "environmental science": environmentalScienceData,
    "accounting": accountingData,
    "medicine & healthcare": medicineData,
    "medicine": medicineData,
    "healthcare": medicineData,
    "information technology": itData,
    "it": itData,
    "hospitality management": hospitalityData,
    "hospitality": hospitalityData,
    "architecture": architectureData,
    "business analytics": businessAnalyticsData,
    "cybersecurity": cybersecurityData,
    "marketing": marketingData,
    "finance": financeData,
    "international relations": internationalRelationsData,
    "ir": internationalRelationsData,
    "business & management": businessManagementData,
    "mbbs": mbbsData,
    "computer science": computerScienceData,
    "tourism management": tourismManagementData,
    "logistics & supply chain": logisticsSupplyChainData,
    "media & communication": mediaData,
    "fashion & luxury brand management": fashionData,
    "political science": politicalScienceData,
  };

  const course = coursesData[country]?.find(
    (c) => normalizeTitle(c.title) === normalizedTitle
  );

  const dynamicData = dynamicCourses[normalizedTitle] || null;

  if (!course && !dynamicData) {
    return (
      <div className="course-not-found">
        <h2>Course not found</h2>
        <Link to="/destinations">Go back</Link>
      </div>
    );
  }

  return (
    <div className="course-details">
      <h1>{dynamicData ? dynamicData.title : course.title}</h1>

      {dynamicData ? (
        dynamicData.sections.map((section, idx) => (
          <section key={idx}>
            <h2>{section.heading}</h2>
            {section.content && <p>{section.content}</p>}
            {section.list && (
              <ul>
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.faqs &&
              section.faqs.map((faq, i) => (
                <div className="faq-item" key={i}>
                  <strong>{faq.question}</strong>
                  <p>{faq.answer}</p>
                </div>
              ))}
          </section>
        ))
      ) : (
        <>
          <p>{course.description}</p>
          <div className="course-careers">
            <h4>Career Opportunities:</h4>
            <ul>
              {course.careers.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </div>
        </>
      )}

      <Link className="back-link" to="/destinations">
        ← Back to Courses
      </Link>
    </div>
  );
}

export default CourseDetails;
