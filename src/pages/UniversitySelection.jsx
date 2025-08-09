// src/pages/UniversitySelection.jsx
import React from "react";
import CountryBlock from "../components/CountryBlock";

const countries = [
  {
    name: "UK",
    image: "/assets/uk.jpg",
    brochure: "/assets/brochures/uk.pdf",
    features: [
      "🎓 Top Universities: Oxford, Cambridge, UCL",
      "💰 Avg Tuition: £10,000 – £25,000/year",
      "🏠 Accommodation: £500–£1,200/month",
      "🧑‍🏫 World-class faculty & research",
      "💼 2-year post-study work visa",
      "🌍 Diverse culture & English-speaking",
    ],
  },
  {
    name: "Canada",
    image: "/assets/canada.jpg",
    brochure: "/assets/brochures/canada.pdf",
    features: [
      "🎓 Top Universities: UBC, Toronto, McGill",
      "💰 Avg Tuition: CAD 15,000 – 30,000/year",
      "🏠 Accommodation: CAD 600–1,200/month",
      "🧑‍🏫 Globally recognized education system",
      "💼 PR opportunities after graduation",
      "🌍 Safe, multicultural environment",
    ],
  },
  {
    name: "Singapore",
    image: "/assets/singapore.jpg",
    brochure: "/assets/brochures/singapore.pdf",
    features: [
      "🎓 Top Universities: NUS, NTU, SMU",
      "💰 Avg Tuition: SGD 20,000 – 40,000/year",
      "🏠 Accommodation: SGD 500–1,000/month",
      "🧑‍🏫 High global rankings",
      "💼 Strategic business & tech hub",
      "🌍 Multicultural, English-speaking",
    ],
  },
  {
    name: "Ireland",
    image: "/assets/ireland.jpg",
    brochure: "/assets/brochures/ireland.pdf",
    features: [
      "🎓 Top Universities: Trinity, UCD, NUIG",
      "💰 Avg Tuition: €9,000 – €20,000/year",
      "🏠 Accommodation: €400–€1,000/month",
      "🧑‍🏫 Research-driven education",
      "💼 2-year stay back for graduates",
      "🌍 Friendly and English-speaking country",
    ],
  },
  {
    name: "France",
    image: "/assets/france.jpg",
    brochure: "/assets/brochures/france.pdf",
    features: [
      "🎓 Top Universities: Sorbonne, HEC Paris",
      "💰 Avg Tuition: €200 – €4,000/year",
      "🏠 Accommodation: €300–€800/month",
      "🧑‍🏫 Renowned business and art schools",
      "💼 Work part-time on student visa",
      "🌍 Cultural capital with global appeal",
    ],
  },
  {
    name: "Germany",
    image: "/assets/germany.jpg",
    brochure: "/assets/brochures/germany.pdf",
    features: [
      "🎓 Top Universities: TU Munich, Heidelberg",
      "💰 Avg Tuition: FREE in public universities",
      "🏠 Accommodation: €250–€700/month",
      "🧑‍🏫 Excellent technical education",
      "💼 Blue Card & job seeker visa",
      "🌍 German + English-taught programs",
    ],
  },
  {
    name: "Switzerland",
    image: "/assets/switzerland.jpg",
    brochure: "/assets/brochures/switzerland.pdf",
    features: [
      "🎓 Top Universities: ETH Zurich, EPFL",
      "💰 Avg Tuition: CHF 500 – 3,000/year",
      "🏠 Accommodation: CHF 600–1,200/month",
      "🧑‍🏫 Global leaders in hospitality & science",
      "💼 Work rights during studies",
      "🌍 Safe, multilingual environment",
    ],
  },
  {
    name: "Dubai",
    image: "/assets/dubai.jpg",
    brochure: "/assets/brochures/dubai.pdf",
    features: [
      "🎓 Top Universities: Heriot-Watt, Amity, AUD",
      "💰 Avg Tuition: AED 35,000 – 70,000/year",
      "🏠 Accommodation: AED 1,500–3,500/month",
      "🧑‍🏫 Modern infrastructure & campuses",
      "💼 Emerging tech & business hub",
      "🌍 Cosmopolitan Middle Eastern city",
    ],
  },
  {
    name: "Spain",
    image: "/assets/spain.jpg",
    brochure: "/assets/brochures/spain.pdf",
    features: [
      "🎓 Top Universities: UAB, University of Barcelona",
      "💰 Avg Tuition: €1,000 – €3,500/year",
      "🏠 Accommodation: €300–€700/month",
      "🧑‍🏫 Strong in arts, humanities, tourism",
      "💼 Work up to 20 hours/week",
      "🌍 Affordable lifestyle & great climate",
    ],
  },
  {
    name: "Malaysia",
    image: "/assets/malaysia.jpg",
    brochure: "/assets/brochures/malaysia.pdf",
    features: [
      "🎓 Top Universities: UM, UPM, Taylor’s",
      "💰 Avg Tuition: MYR 10,000 – 30,000/year",
      "🏠 Accommodation: MYR 500–1,000/month",
      "🧑‍🏫 Cost-effective international education",
      "💼 Post-study visa options",
      "🌍 Multicultural, English-friendly",
    ],
  },
  {
    name: "Mauritius",
    image: "/assets/mauritius.jpg",
    brochure: "/assets/brochures/mauritius.pdf",
    features: [
      "🎓 Top Universities: University of Mauritius",
      "💰 Avg Tuition: MUR 50,000 – 120,000/year",
      "🏠 Accommodation: MUR 3,000–7,000/month",
      "🧑‍🏫 Affordable & English-speaking",
      "💼 Tropical study destination",
      "🌍 Safe island life",
    ],
  },
  {
    name: "India",
    image: "/assets/india.jpg",
    brochure: "/assets/brochures/india.pdf",
    features: [
      "🎓 Top Universities: IITs, IIMs, DU",
      "💰 Avg Tuition: ₹20,000 – ₹2,00,000/year",
      "🏠 Accommodation: ₹5,000–₹15,000/month",
      "🧑‍🏫 Great for tech, medicine, business",
      "💼 Large domestic job market",
      "🌍 Rich cultural heritage",
    ],
  },
  {
    name: "Netherlands",
    image: "/assets/netherlands.jpg",
    brochure: "/assets/brochures/netherlands.pdf",
    features: [
      "🎓 Top Universities: TU Delft, UvA, Erasmus",
      "💰 Avg Tuition: €6,000 – €20,000/year",
      "🏠 Accommodation: €400–€900/month",
      "🧑‍🏫 English-taught degrees",
      "💼 Work during and after studies",
      "🌍 Progressive, student-friendly nation",
    ],
  },
  {
    name: "Italy",
    image: "/assets/italy.jpg",
    brochure: "/assets/brochures/italy.pdf",
    features: [
      "🎓 Top Universities: Sapienza, Milan, Bologna",
      "💰 Avg Tuition: €500 – €4,000/year",
      "🏠 Accommodation: €300–€800/month",
      "🧑‍🏫 Architecture, art, fashion specialties",
      "💼 Scholarships for international students",
      "🌍 EU opportunities & beautiful lifestyle",
    ],
  },
];

const UniversitySelection = () => {
  return (
    <div className="university-selection">
      <h1 className="uni-title">Explore Universities by Country</h1>
      <div className="countries-container">
        {countries.map((country) => (
          <CountryBlock
            key={country.name}
            name={country.name}
            image={country.image}
            brochure={country.brochure}
            features={country.features}
          />
        ))}
      </div>
    </div>
  );
};

export default UniversitySelection;
