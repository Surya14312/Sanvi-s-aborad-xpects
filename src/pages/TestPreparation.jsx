import React from "react";
import { Link } from "react-router-dom"; // ⬅️ Make sure to import Link

const tests = [
  {
    name: "IELTS (International English Language Testing System)",
    path: "/ielts",
    modules: "Academic & General Training",
    sections: "Listening, Reading, Writing, Speaking",
    score: "0–9 band",
    purpose:
      "For English proficiency in countries like the UK, Canada, Australia, New Zealand",
    mode: "Paper-based & Computer-based",
    acceptedBy: "10,000+ institutions globally",
    preparation: [
      "Full mock tests",
      "Speaking interview practice",
      "Vocabulary building",
      "Writing task evaluation",
    ],
  },
  {
    name: "TOEFL (Test of English as a Foreign Language)",
    path: "/toefl",
    sections: "Reading, Listening, Speaking, Writing",
    score: "0–120",
    purpose: "English proficiency for the US, Canada, and Europe",
    mode: "TOEFL iBT (Internet-based test)",
    acceptedBy: "11,000+ institutions in 150+ countries",
    preparation: [
      "Integrated task strategies",
      "Note-taking techniques",
      "Real test simulations",
      "Grammar & sentence construction drills",
    ],
  },
  {
    name: "Duolingo English Test",
    path: "/duolingo",
    sections: "Reading, Listening, Speaking, Writing (Integrated)",
    score: "10–160",
    purpose: "Affordable and quick English proficiency test",
    mode: "Online, at-home",
    acceptedBy: "4,000+ institutions globally",
    preparation: [
      "Adaptive test simulation",
      "Speaking prompts practice",
      "Quick response strategies",
      "Vocabulary & grammar drills",
    ],
  },
  {
    name: "SAT (Scholastic Assessment Test)",
    path: "/sat",
    sections:
      "Reading, Writing & Language, Math (with and without calculator), Essay (optional)",
    score: "400–1600",
    purpose: "Undergraduate admissions (especially in the US)",
    mode: "Digital (from 2024 onward)",
    preparation: [
      "Time management skills",
      "Problem-solving in Math",
      "Evidence-based Reading strategies",
      "Writing mechanics improvement",
    ],
  },
  {
    name: "PTE (Pearson Test of English)",
    path: "/pte",
    sections: "Speaking & Writing, Reading, Listening",
    score: "10–90",
    purpose: "English test for study, work, migration",
    mode: "Computer-based, AI evaluated",
    acceptedBy: "Universities in UK, Australia, NZ, Canada, and more",
    preparation: [
      "AI-scored mock tests",
      "Real-time feedback",
      "Pronunciation & fluency coaching",
      "Writing summaries & essays",
    ],
  },
  {
    name: "GRE /GMAT",
    path: "/gre-gmat",
    sections: "Verbal Reasoning, Quantitative Reasoning, Analytical Writing",
    score: "260–340",
    purpose: "For master’s, MBA, PhD programs in USA & other countries",
    preparation: [
      "Verbal & Quant vocabulary drills",
      "Quantitative concepts (Data analysis, Algebra)",
      "Essay writing workshops",
      "Practice tests & time management",
      "Critical reasoning",
      "Data sufficiency",
      "Integrated reasoning questions",
      "Full-length adaptive mock tests",
    ],
  },
  {
    name: "French Language Test Preparation (DELF/DALF/TEF/TCF)",
    path: "/french",
    levels: "A1 to C2 (CEFR scale)",
    purpose: "For education, immigration, or work in Francophone countries",
    preparation: [
      "Listening and speaking fluency",
      "Grammar, verbs, and sentence structure",
      "Written expression techniques",
      "Reading comprehension drills",
    ],
  },
  {
    name: "German Language Test Preparation (Goethe/Zertifikat/TELC/TestDaF)",
    path: "/german",
    levels: "A1 to C2 (CEFR scale)",
    purpose: "Study or work in Germany, Austria, Switzerland",
    preparation: [
      "Vocabulary & grammar fundamentals",
      "Listening and reading tasks",
      "Structured speaking practices",
      "Writing letters, essays, and opinions",
    ],
  },
];

const TestPreparation = () => {
  return (
    <div className="test-container">
      <h1>Test Preparation Details</h1>
      {tests.map((test, index) => (
        <div key={index} className="test-card">
          <h2>{test.name}</h2>
          {test.modules && (
            <p>
              <strong>Modules:</strong> {test.modules}
            </p>
          )}
          {test.sections && (
            <p>
              <strong>Sections:</strong> {test.sections}
            </p>
          )}
          {test.levels && (
            <p>
              <strong>Levels:</strong> {test.levels}
            </p>
          )}
          {test.score && (
            <p>
              <strong>Score Range:</strong> {test.score}
            </p>
          )}
          <p>
            <strong>Purpose:</strong> {test.purpose}
          </p>
          {test.mode && (
            <p>
              <strong>Mode:</strong> {test.mode}
            </p>
          )}
          {test.acceptedBy && (
            <p>
              <strong>Accepted by:</strong> {test.acceptedBy}
            </p>
          )}

          <div>
            <strong>Preparation Includes:</strong>
            <ul>
              {test.preparation.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Link to specific test route */}
          <Link to={test.path}>
            <button className="learn-more">Learn More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TestPreparation;
