// src/App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import Destinations from "./components/Destinations";
import ApplicationForm from "./components/ApplicationForm";
import CourseDetails from "./components/CourseDetails";
import ServiceDetail from "./components/ServiceDetail";
import SmartLink from "./components/SmartLink";

// Lazy-loaded Pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Countries = lazy(() => import("./pages/Countries"));
const CountryDetails = lazy(() => import("./pages/CountryDetails"));
const GlobalCourses = lazy(() => import("./pages/GlobalCourses"));
const GlobalCourseDetail = lazy(() => import("./pages/GlobalCourseDetail"));

// Study Abroad Pages
const UKPage = lazy(() => import("./pages/UK"));
const CanadaPage = lazy(() => import("./pages/Canada"));
const SingaporePage = lazy(() => import("./pages/Singapore"));
const IrelandPage = lazy(() => import("./pages/Ireland"));
const FrancePage = lazy(() => import("./pages/France"));
const GermanyPage = lazy(() => import("./pages/Germany"));
const SwitzerlandPage = lazy(() => import("./pages/Switzerland"));
const DubaiPage = lazy(() => import("./pages/Dubai"));
const SpainPage = lazy(() => import("./pages/Spain"));
const MalaysiaPage = lazy(() => import("./pages/Malaysia"));
const MauritiusPage = lazy(() => import("./pages/Mauritius"));
const IndiaPage = lazy(() => import("./pages/India"));
const NetherlandsPage = lazy(() => import("./pages/Netherlands"));
const ItalyPage = lazy(() => import("./pages/Italy"));

// Blogs & Insights
const TrendingBlogs = lazy(() => import("./components/TrendingBlogs"));
const BlogDetail = lazy(() => import("./pages/blog/BlogDetail")); // dynamic blog detail

// Blog Static Pages
const AffordableCountries = lazy(() => import("./pages/blog/AffordableCountries"));
const BestCountriesStudies = lazy(() => import("./pages/blog/BestCountriesStudies"));
const MBBSAbroad = lazy(() => import("./pages/blog/MBBSAbroad"));
const MythsFacts = lazy(() => import("./pages/blog/MythsFacts"));
const StudentVisaInterview = lazy(() => import("./pages/blog/StudentVisaInterview"));
const StudyDubai = lazy(() => import("./pages/blog/StudyDubai"));
const StudyEurope = lazy(() => import("./pages/blog/StudyEurope"));
const UniversityApplicationGuide = lazy(() => import("./pages/blog/UniversityApplicationGuide"));
const CommonApplicationMistakes = lazy(() => import("./pages/blog/CommonApplicationMistakes"));
const CompareEducation = lazy(() => import("./pages/blog/CompareEducation"));
const EnglishTaught = lazy(() => import("./pages/blog/EnglishTaught"));
const ManagingFinances = lazy(() => import("./pages/blog/ManagingFinances"));
const Budgeting = lazy(() => import("./pages/blog/Budgeting"));
const PopularCourses2025 = lazy(() => import("./pages/blog/PopularCourses2025"));
const ChooseCountry = lazy(() => import("./pages/blog/ChooseCountry"));

// Special Programs
const SpecialPathwayPrograms = lazy(() => import("./pages/SpecialPathwayPrograms"));
const ProgramDetails = lazy(() => import("./pages/ProgramDetails"));

// Blog & Services Pages
const AdmissionGuidance = lazy(() => import("./pages/blogs/AdmissionGuidance"));
const CareerCounseling = lazy(() => import("./pages/blogs/CareerCounseling"));
const CourseSelection = lazy(() => import("./pages/blogs/CourseSelection"));
const DocumentationService = lazy(() => import("./pages/blogs/DocumentationServices"));
const ApplicationProcedure = lazy(() => import("./pages/blogs/ApplicationProcedure"));
const FinancialAssistance = lazy(() => import("./pages/blogs/FinancialAssistance"));
const TravelAssistance = lazy(() => import("./pages/blogs/TravelAssistance"));
const PostArrivalSupport = lazy(() => import("./pages/blogs/PostArrivalSupport"));
const CountrySelection = lazy(() => import("./pages/blogs/CountrySelection"));
const PreDepartureOrientation = lazy(() => import("./pages/blogs/PreDepartureOrientation"));
const ContinuousCommunication = lazy(() => import("./pages/blogs/ContinuousCommunication"));
const UniversitySelection = lazy(() => import("./pages/UniversitySelection"));
const ScholarshipAssistanceForm = lazy(() => import("./pages/ScholarshipAssistanceForm"));
const VisaAssistance = lazy(() => import("./pages/VisaAssistance"));
const TestPreparation = lazy(() => import("./pages/TestPreparation"));
const IELTS = lazy(() => import("./pages/IELTS"));
const TOEFL = lazy(() => import("./pages/TOEFL"));
const PTE = lazy(() => import("./pages/PTE"));
const GRE = lazy(() => import("./pages/GRE"));
const SAT = lazy(() => import("./pages/SAT"));
const Duolingo = lazy(() => import("./pages/Duolingo"));
const French = lazy(() => import("./pages/French"));
const German = lazy(() => import("./pages/German"));
const WhatWeDo = lazy(() => import("./pages/WhatWeDo"));
const WorkWithUs = lazy(() => import("./pages/WorkWithUs"));
const Events = lazy(() => import("./pages/Events"));
const Resources = lazy(() => import("./pages/Resources"));

// Page transition wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -40, scale: 0.98 }}
    transition={{ type: "spring", stiffness: 220, damping: 25, mass: 0.8 }}
    style={{
      perspective: 1200,
      overflow: "hidden",
      borderRadius: "6px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
      backgroundColor: "#fff",
      minHeight: "100vh",
    }}
  >
    {children}
  </motion.div>
);

// Simple loading spinner
const LoadingSpinner = () => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    fontSize: "1.25rem",
    color: "#555"
  }}>
    <div className="loader" />
    Loading...
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes location={location} key={location.pathname}>

          {/* Home */}
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />

          {/* Destinations */}
          <Route path="/destinations" element={<PageWrapper><Destinations /></PageWrapper>} />

          {/* Study Abroad Pages */}
          <Route path="/study-in/uk" element={<PageWrapper><UKPage /></PageWrapper>} />
          <Route path="/study-in/canada" element={<PageWrapper><CanadaPage /></PageWrapper>} />
          <Route path="/study-in/singapore" element={<PageWrapper><SingaporePage /></PageWrapper>} />
          <Route path="/study-in/ireland" element={<PageWrapper><IrelandPage /></PageWrapper>} />
          <Route path="/study-in/france" element={<PageWrapper><FrancePage /></PageWrapper>} />
          <Route path="/study-in/germany" element={<PageWrapper><GermanyPage /></PageWrapper>} />
          <Route path="/study-in/switzerland" element={<PageWrapper><SwitzerlandPage /></PageWrapper>} />
          <Route path="/study-in/dubai" element={<PageWrapper><DubaiPage /></PageWrapper>} />
          <Route path="/study-in/spain" element={<PageWrapper><SpainPage /></PageWrapper>} />
          <Route path="/study-in/malaysia" element={<PageWrapper><MalaysiaPage /></PageWrapper>} />
          <Route path="/study-in/mauritius" element={<PageWrapper><MauritiusPage /></PageWrapper>} />
          <Route path="/study-in/india" element={<PageWrapper><IndiaPage /></PageWrapper>} />
          <Route path="/study-in/netherlands" element={<PageWrapper><NetherlandsPage /></PageWrapper>} />
          <Route path="/study-in/italy" element={<PageWrapper><ItalyPage /></PageWrapper>} />

          {/* Trending Blogs */}
          <Route path="/trending-blogs" element={<PageWrapper><TrendingBlogs /></PageWrapper>} />

          {/* Dynamic Blog Detail */}
          <Route path="/blog/:slug" element={<PageWrapper><BlogDetail /></PageWrapper>} />

          {/* Static Blog Pages */}
          <Route path="/blog/affordable-countries" element={<PageWrapper><AffordableCountries /></PageWrapper>} />
          <Route path="/blog/best-countries" element={<PageWrapper><BestCountriesStudies /></PageWrapper>} />
          <Route path="/blog/mbbs-abroad" element={<PageWrapper><MBBSAbroad /></PageWrapper>} />
          <Route path="/blog/myths-vs-facts" element={<PageWrapper><MythsFacts /></PageWrapper>} />
          <Route path="/blog/visa-interview" element={<PageWrapper><StudentVisaInterview /></PageWrapper>} />
          <Route path="/blog/why-dubai" element={<PageWrapper><StudyDubai /></PageWrapper>} />
          <Route path="/blog/why-europe" element={<PageWrapper><StudyEurope /></PageWrapper>} />
          <Route path="/blog/application-guide" element={<PageWrapper><UniversityApplicationGuide /></PageWrapper>} />
          <Route path="/blog/common-mistakes" element={<PageWrapper><CommonApplicationMistakes /></PageWrapper>} />
          <Route path="/blog/compare-systems" element={<PageWrapper><CompareEducation /></PageWrapper>} />
          <Route path="/blog/english-programs" element={<PageWrapper><EnglishTaught /></PageWrapper>} />
          <Route path="/blog/managing-finances" element={<PageWrapper><ManagingFinances /></PageWrapper>} />
          <Route path="/blog/budgeting" element={<PageWrapper><Budgeting /></PageWrapper>} />
          <Route path="/blog/popular-courses-2025" element={<PageWrapper><PopularCourses2025 /></PageWrapper>} />
          <Route path="/blog/choose-country" element={<PageWrapper><ChooseCountry /></PageWrapper>} />

          {/* Services & Other Blogs */}
          <Route path="/blog/admission-guidance" element={<PageWrapper><AdmissionGuidance /></PageWrapper>} />
          <Route path="/career-counseling" element={<PageWrapper><CareerCounseling /></PageWrapper>} />
          <Route path="/course-selection" element={<PageWrapper><CourseSelection /></PageWrapper>} />
          <Route path="/documentation-services" element={<PageWrapper><DocumentationService /></PageWrapper>} />
          <Route path="/application-procedure" element={<PageWrapper><ApplicationProcedure /></PageWrapper>} />
          <Route path="/financial-assistance" element={<PageWrapper><FinancialAssistance /></PageWrapper>} />
          <Route path="/travel-assistance" element={<PageWrapper><TravelAssistance /></PageWrapper>} />
          <Route path="/post-arrival-support" element={<PageWrapper><PostArrivalSupport /></PageWrapper>} />
          <Route path="/country-selection" element={<PageWrapper><CountrySelection /></PageWrapper>} />
          <Route path="/university-selection" element={<PageWrapper><UniversitySelection /></PageWrapper>} />
          <Route path="/pre-departure-orientation" element={<PageWrapper><PreDepartureOrientation /></PageWrapper>} />
          <Route path="/continuous-communication" element={<PageWrapper><ContinuousCommunication /></PageWrapper>} />

          {/* Forms & Assistance */}
          <Route path="/apply" element={<PageWrapper><ApplicationForm /></PageWrapper>} />
          <Route path="/scholarship-assistance" element={<PageWrapper><ScholarshipAssistanceForm /></PageWrapper>} />
          <Route path="/visa-assistance" element={<PageWrapper><VisaAssistance /></PageWrapper>} />

          {/* Test Preparation */}
          <Route path="/test-preparation" element={<PageWrapper><TestPreparation /></PageWrapper>} />
          <Route path="/ielts" element={<PageWrapper><IELTS /></PageWrapper>} />
          <Route path="/toefl" element={<PageWrapper><TOEFL /></PageWrapper>} />
          <Route path="/pte" element={<PageWrapper><PTE /></PageWrapper>} />
          <Route path="/gre" element={<PageWrapper><GRE /></PageWrapper>} />
          <Route path="/sat" element={<PageWrapper><SAT /></PageWrapper>} />
          <Route path="/duolingo" element={<PageWrapper><Duolingo /></PageWrapper>} />

          {/* Language Courses */}
          <Route path="/french" element={<PageWrapper><French /></PageWrapper>} />
          <Route path="/german" element={<PageWrapper><German /></PageWrapper>} />

          {/* Special Programs */}
          <Route path="/special-pathway-programs" element={<PageWrapper><SpecialPathwayPrograms /></PageWrapper>} />
          <Route path="/special-pathway/:programTitle" element={<PageWrapper><ProgramDetails /></PageWrapper>} />

          {/* What We Do & Services */}
          <Route path="/what-we-do" element={<PageWrapper><WhatWeDo /></PageWrapper>} />
          <Route path="/service/:id" element={<PageWrapper><ErrorBoundary><ServiceDetail /></ErrorBoundary></PageWrapper>} />

          {/* Global Courses */}
          <Route path="/courses" element={<PageWrapper><GlobalCourses /></PageWrapper>} />
          <Route path="/courses/:courseName" element={<PageWrapper><GlobalCourseDetail /></PageWrapper>} />
          <Route path="/courses/:country/:courseTitle" element={<PageWrapper><CourseDetails /></PageWrapper>} />

          {/* Countries */}
          <Route path="/countries" element={<PageWrapper><Countries /></PageWrapper>} />
          <Route path="/countries/:slug" element={<PageWrapper><CountryDetails /></PageWrapper>} />

          {/* Other Pages */}
          <Route path="/work-with-us" element={<PageWrapper><WorkWithUs /></PageWrapper>} />
          <Route path="/events" element={<PageWrapper><Events /></PageWrapper>} />
          <Route path="/resources" element={<PageWrapper><Resources /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />

          {/* SmartLink */}
          <Route path="/smart-link" element={<PageWrapper><SmartLink /></PageWrapper>} />
          <Route path="/smart/:id" element={<PageWrapper><SmartLink /></PageWrapper>} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <PageWrapper>
                <h1 style={{ textAlign: "center", marginTop: "50px" }}>
                  404 - Page Not Found
                </h1>
              </PageWrapper>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
