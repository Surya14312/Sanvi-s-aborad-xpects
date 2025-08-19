// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Components
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import Destinations from "./components/Destinations";
import ApplicationForm from "./components/ApplicationForm";
import CourseDetails from "./components/CourseDetails";
import ServiceDetail from "./components/ServiceDetail";
import SmartLink from "./components/SmartLink";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Countries from "./pages/Countries";
import CountryDetails from "./pages/CountryDetails";
import GlobalCourses from "./pages/GlobalCourses";
import GlobalCourseDetail from "./pages/GlobalCourseDetail";

// Study Abroad Pages
import UKPage from "./pages/UK";
import CanadaPage from "./pages/Canada";
import SingaporePage from "./pages/Singapore";
import IrelandPage from "./pages/Ireland";
import FrancePage from "./pages/France";
import GermanyPage from "./pages/Germany";
import SwitzerlandPage from "./pages/Switzerland";
import DubaiPage from "./pages/Dubai";
import SpainPage from "./pages/Spain";
import MalaysiaPage from "./pages/Malaysia";
import MauritiusPage from "./pages/Mauritius";
import IndiaPage from "./pages/India";
import NetherlandsPage from "./pages/Netherlands";
import ItalyPage from "./pages/Italy";

// Blogs & Trending Insights
import TrendingBlogs from "./components/TrendingBlogs";
import BlogDetail from "./pages/BlogDetail";

// Special Programs
import SpecialPathwayPrograms from "./pages/SpecialPathwayPrograms";
import ProgramDetails from "./pages/ProgramDetails";

// Blog & Services Pages
import AdmissionGuidance from "./pages/blogs/AdmissionGuidance";
import CareerCounseling from "./pages/blogs/CareerCounseling";
import CourseSelection from "./pages/blogs/CourseSelection";
import DocumentationService from "./pages/blogs/DocumentationServices";
import ApplicationProcedure from "./pages/blogs/ApplicationProcedure";
import FinancialAssistance from "./pages/blogs/FinancialAssistance";
import TravelAssistance from "./pages/blogs/TravelAssistance";
import PostArrivalSupport from "./pages/blogs/PostArrivalSupport";
import CountrySelection from "./pages/blogs/CountrySelection";
import PreDepartureOrientation from "./pages/blogs/PreDepartureOrientation";
import ContinuousCommunication from "./pages/blogs/ContinuousCommunication";
import UniversitySelection from "./pages/UniversitySelection";
import ScholarshipAssistanceForm from "./pages/ScholarshipAssistanceForm";
import VisaAssistance from "./pages/VisaAssistance";
import TestPreparation from "./pages/TestPreparation";
import IELTS from "./pages/IELTS";
import TOEFL from "./pages/TOEFL";
import PTE from "./pages/PTE";
import GRE from "./pages/GRE";
import SAT from "./pages/SAT";
import Duolingo from "./pages/Duolingo";
import French from "./pages/French";
import German from "./pages/German";
import WhatWeDo from "./pages/WhatWeDo";
import WorkWithUs from "./pages/WorkWithUs";
import Events from "./pages/Events";
import Resources from "./pages/Resources";

// Page transition wrapper

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -40, scale: 0.98 }}
    transition={{
      type: "spring",
      stiffness: 220, // faster spring
      damping: 25,    // smooth damping
      mass: 0.8,
    }}
    style={{
      perspective: 1200,   // adds subtle depth
      overflow: "hidden",
      borderRadius: "6px", // soft edges for modern look
      boxShadow: "0 8px 25px rgba(0,0,0,0.05)", // subtle glow/shadow
    }}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
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

        {/* Blogs & Services */}
        <Route path="/blogs" element={<PageWrapper><TrendingBlogs /></PageWrapper>} />
        <Route path="/blog/:slug" element={<PageWrapper><BlogDetail /></PageWrapper>} />
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
        <Route path="*" element={<PageWrapper><h1 style={{ textAlign: "center", marginTop: "50px" }}>404 - Page Not Found</h1></PageWrapper>} />
      </Routes>
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
