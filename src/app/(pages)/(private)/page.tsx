"use client";
import { Box } from "@mui/material";
import TopNav from "./top-nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const HomeHero = () => {
  return (
    <div>
      <TopNav />

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <About />
                <Services />
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
export default HomeHero;
