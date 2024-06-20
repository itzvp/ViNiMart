import React from "react";
import "../styles.css"; // Updated import path

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
