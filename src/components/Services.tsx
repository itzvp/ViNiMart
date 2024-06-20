import React from "react";
import "../styles.css";

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-content">
        <h1>Our Services</h1>
        <p>
          Akeshya will serve as your consultant and development partner to help
          you turn your idea into a reality.
        </p>
        <div className="services-cards">
          <div className="service-card">
            <h2>Design</h2>
            <p>
              Our web design services can assist you in reclaiming your
              company&apos;s online image. Your business will flourish on the
              Internet thanks to the combination of style and technology we
              provide, as well as our experience.
            </p>
          </div>
          <div className="service-card">
            <h2>Development</h2>
            <p>
              Our development team can construct platforms to help your business
              thrive by creating powerful customised solutions tailored to your
              particular requirements. Akeshya makes use of established and
              effective web development tools.
            </p>
          </div>
          <div className="service-card">
            <h2>Marketing</h2>
            <p>
              A beautiful website is the foundation of effective marketing. Our
              customers achieve success where it counts—in the real world—by
              combining our proven approach with our passion for improving
              conversions and increasing ROI.
            </p>
          </div>
          <div className="service-card">
            <h2>Support</h2>
            <p>
              Since the beginning, we at Akeshya have specialised in website
              maintenance. We recognise the significance of having your business
              online 24 hours a day, seven days a week, and we&apos;ve created a
              system to ensure that we&apos;re always available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
