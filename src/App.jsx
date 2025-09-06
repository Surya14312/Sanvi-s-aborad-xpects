// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import NewZealandPage from "./pages/NewZealand";
import NetherlandsPage from "./pages/Netherlands";
import ItalyPage from "./pages/Italy";

// New Study Abroad Pages
import PolandPage from "./pages/Poland";
import PortugalPage from "./pages/Portugal";
import USAPage from "./pages/USA";
import MaltaPage from "./pages/Malta";
import LithuaniaPage from "./pages/Lithuania";

// MBBS Pages
import ChinaMBBS from "./pages/ChinaMBBS";
import GeorgiaMBBS from "./pages/GeorgiaMBBS";
import PhilippinesMBBS from "./pages/PhilippinesMBBS";
import VietnamMBBS from "./pages/VietnamMBBS";
import BelarusMBBS from "./pages/BelarusMBBS";

// Blogs & Insights
import TrendingBlogs from "./components/TrendingBlogs";
import BlogDetail from "./pages/blog/BlogDetail"; // Make sure this file exists

// Blog Static Pages
import AffordableCountries from "./pages/blog/AffordableCountries";
import BestCountriesStudies from "./pages/blog/BestCountriesStudies";
import MBBSAbroad from "./pages/blog/MBBSAbroad";
import MythsFacts from "./pages/blog/MythsFacts";
import StudentVisaInterview from "./pages/blog/StudentVisaInterview";
import StudyDubai from "./pages/blog/StudyDubai";
import StudyEurope from "./pages/blog/StudyEurope";
import UniversityApplicationGuide from "./pages/blog/UniversityApplicationGuide";
import CommonApplicationMistakes from "./pages/blog/CommonApplicationMistakes";
import CompareEducation from "./pages/blog/CompareEducation";
import EnglishTaught from "./pages/blog/EnglishTaught";
import ManagingFinances from "./pages/blog/ManagingFinances";
import CountrySelectionGuide from "./pages/blog/CountrySelectionGuide.jsx";
import BudgetingTip from "./pages/blog/BudgetingTips.jsx";
import PopularCourses2025 from "./pages/blog/PopularCourses2025";

// Services & Blogs Pages
import AdmissionGuidance from "./pages/blogs/AdmissionGuidance";
import CareerCounseling from "./pages/blogs/CareerCounseling";
import CourseSelection from "./pages/blogs/CourseSelection";
import DocumentationService from "./pages/blogs/DocumentationServices";
import ApplicationProcedure from "./pages/blogs/ApplicationProcedure";
import FinancialAssistance from "./pages/blogs/FinancialAssistance";
import TravelAssistance from "./pages/blogs/TravelAssistance";
import PostArrivalSupport from "./pages/blogs/PostArrivalSupport";
import CountrySelection from "./pages/blogs/CountrySelection";
import UniversitySelection from "./pages/UniversitySelection";
import ScholarshipAssistanceForm from "./pages/ScholarshipAssistanceForm";
import VisaAssistance from "./pages/VisaAssistance";
import PreDepartureOrientation from "./pages/blogs/PreDepartureOrientation";
import ContinuousCommunication from "./pages/blogs/ContinuousCommunication";

// Test Preparation
import TestPreparation from "./pages/TestPreparation";
import IELTS from "./pages/IELTS";
import TOEFL from "./pages/TOEFL";
import PTE from "./pages/PTE";
import GRE from "./pages/GRE";
import SAT from "./pages/SAT";
import Duolingo from "./pages/Duolingo";



// Language Courses
import French from "./pages/French";
import German from "./pages/German";

// Special Programs
import SpecialPathwayPrograms from "./pages/SpecialPathwayPrograms";
import ProgramDetails from "./pages/ProgramDetails";

// What We Do & Services
import WhatWeDo from "./pages/WhatWeDo";
import WorkWithUs from "./pages/WorkWithUs";
import Events from "./pages/Events";
import Resources from "./pages/Resources";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Destinations */}
        <Route path="/destinations" element={<Destinations />} />

        {/* Study Abroad */}
        <Route path="/study-in/uk" element={<UKPage />} />
        <Route path="/study-in/canada" element={<CanadaPage />} />
        <Route path="/study-in/singapore" element={<SingaporePage />} />
        <Route path="/study-in/ireland" element={<IrelandPage />} />
        <Route path="/study-in/france" element={<FrancePage />} />
        <Route path="/study-in/germany" element={<GermanyPage />} />
        <Route path="/study-in/switzerland" element={<SwitzerlandPage />} />
        <Route path="/study-in/dubai" element={<DubaiPage />} />
        <Route path="/study-in/spain" element={<SpainPage />} />
        <Route path="/study-in/malaysia" element={<MalaysiaPage />} />
        <Route path="/study-in/mauritius" element={<MauritiusPage />} />
        <Route path="/study-in/newzealand" element={<NewZealandPage />} />
        <Route path="/study-in/netherlands" element={<NetherlandsPage />} />
        <Route path="/study-in/italy" element={<ItalyPage />} />
        <Route path="/study-in/poland" element={<PolandPage />} />
        <Route path="/study-in/portugal" element={<PortugalPage />} />
        <Route path="/study-in/usa" element={<USAPage />} />
        <Route path="/study-in/malta" element={<MaltaPage />} />
        <Route path="/study-in/lithuania" element={<LithuaniaPage />} />

        {/* MBBS Pages */}
        <Route path="/mbbs/china" element={<ChinaMBBS />} />
        <Route path="/mbbs/georgia" element={<GeorgiaMBBS />} />
        <Route path="/mbbs/philippines" element={<PhilippinesMBBS />} />
        <Route path="/mbbs/vietnam" element={<VietnamMBBS />} />
        <Route path="/mbbs/belarus" element={<BelarusMBBS />} />

        {/* Blogs */}
        <Route path="/trending-blogs" element={<TrendingBlogs />} />
        <Route path="/country-selection" element={<CountrySelectionGuide />} />
        <Route path="/blog/affordable-countries" element={<AffordableCountries />} />
        <Route path="/blog/best-countries" element={<BestCountriesStudies />} />
        <Route path="/blog/mbbs-abroad" element={<MBBSAbroad />} />
        <Route path="/blog/myths-vs-facts" element={<MythsFacts />} />
        <Route path="/blog/visa-interview" element={<StudentVisaInterview />} />
        <Route path="/blog/why-dubai" element={<StudyDubai />} />
        <Route path="/blog/why-europe" element={<StudyEurope />} />
        <Route path="/blog/application-guide" element={<UniversityApplicationGuide />} />
        <Route path="/blog/common-mistakes" element={<CommonApplicationMistakes />} />
        <Route path="/blog/compare-systems" element={<CompareEducation />} />
        <Route path="/blog/english-programs" element={<EnglishTaught />} />
        <Route path="/blog/managing-finances" element={<ManagingFinances />} />
        <Route path="/country-selection-guide" element={<CountrySelectionGuide />} />
        <Route path="/budgeting-tip" element={<BudgetingTip />} />
        <Route path="/blog/popular-courses-2025" element={<PopularCourses2025 />} />

        {/* Services & Forms */}
        <Route path="/blog/admission-guidance" element={<AdmissionGuidance />} />
        <Route path="/career-counseling" element={<CareerCounseling />} />
        <Route path="/course-selection" element={<CourseSelection />} />
        <Route path="/documentation-services" element={<DocumentationService />} />
        <Route path="/application-procedure" element={<ApplicationProcedure />} />
        <Route path="/financial-assistance" element={<FinancialAssistance />} />
        <Route path="/travel-assistance" element={<TravelAssistance />} />
        <Route path="/post-arrival-support" element={<PostArrivalSupport />} />
        <Route path="/country-selection" element={<CountrySelection />} />
        <Route path="/university-selection" element={<UniversitySelection />} />
        <Route path="/pre-departure-orientation" element={<PreDepartureOrientation />} />
        <Route path="/continuous-communication" element={<ContinuousCommunication />} />

        {/* Forms */}
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/scholarship-assistance" element={<ScholarshipAssistanceForm />} />
        <Route path="/visa-assistance" element={<VisaAssistance />} />

        {/* Test Preparation */}
        <Route path="/test-preparation" element={<TestPreparation />} />
        <Route path="/ielts" element={<IELTS />} />
        <Route path="/toefl" element={<TOEFL />} />
        <Route path="/pte" element={<PTE />} />
        <Route path="/gre" element={<GRE />} />
        <Route path="/sat" element={<SAT />} />
        <Route path="/duolingo" element={<Duolingo />} />

        {/* Language Courses */}
        <Route path="/french" element={<French />} />
        <Route path="/german" element={<German />} />

        {/* Special Programs */}
        <Route path="/special-pathway-programs" element={<SpecialPathwayPrograms />} />
        <Route path="/special-pathway/:programTitle" element={<ProgramDetails />} />

        {/* What We Do & Services */}
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/service/:id" element={<ErrorBoundary><ServiceDetail /></ErrorBoundary>} />

        {/* Global Courses */}
        <Route path="/courses" element={<GlobalCourses />} />
        <Route path="/courses/:courseName" element={<GlobalCourseDetail />} />
        <Route path="/courses/:country/:courseTitle" element={<CourseDetails />} />

        {/* Countries */}
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:slug" element={<CountryDetails />} />

        {/* Other Pages */}
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* SmartLink */}
        <Route path="/smart-link" element={<SmartLink />} />
        <Route path="/smart/:id" element={<SmartLink />} />

        {/* 404 */}
        <Route path="*" element={<h1 style={{ textAlign: "center", marginTop: "50px" }}>404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
