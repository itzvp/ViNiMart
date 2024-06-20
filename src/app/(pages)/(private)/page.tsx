"use client";
import { Box, Container, Grid, Rating, Stack, Typography } from "@mui/material";
import TopNav from "./top-nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const HomeHero = () => {
  return (
    <Box
      sx={
        {
          // pt: "120px",
        }
      }
    >
      <TopNav />
      {/* <Container maxWidth="lg"> */}
      {/* <Grid container spacing={3} direction="column" alignItems="center"> */}
      {/* <Grid item xs={12}> */}
      <Router>
        {/* <Header /> */}
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
      {/* </Grid> */}
      {/* </Grid> */}
      {/* </Container> */}
    </Box>
  );
};
export default HomeHero;
