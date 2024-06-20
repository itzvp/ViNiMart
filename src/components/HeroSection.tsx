"use client";
import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "../styles.css";

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
  });

  return (
    <section className="hero-section" ref={ref}>
      <animated.div style={fadeIn} className="hero-content">
        <h1>Grow your business with Akeshya</h1>
        <p>
          We are a team of talented website designers, developers & digital
          marketers
        </p>
        <button>Get Started</button>
      </animated.div>
    </section>
  );
};

export default HeroSection;
