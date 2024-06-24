"use client";
import { Box } from "@mui/material";
import TopNav from "./top-nav";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const HomeHero = () => {
  return (
    <div>
      <TopNav />
      <Box component="main">
        <HeroSection />
        <About />
        <Services />
        <Contact />
      </Box>
      <Footer />
    </div>
  );
};

export default HomeHero;
