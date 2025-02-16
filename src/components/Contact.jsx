import React, { useState } from "react";
import { addMessage } from "../firebase";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram, FaMailBulk } from "react-icons/fa";
import "../styles/contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form:", { name, email, message }); // Debugging
    await addMessage(name, email, message);
    setIsSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations or just a friendly hello!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
      {isSubmitted && <p className="success-message">Message sent successfully!</p>}

      <div className="social-links">
        <a href="https://github.com/Abjodd" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/arbeel-wani-36556425b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://www.instagram.com/arbeelwanii/">
          <FaInstagram className="icon" />
        </a>
        <a href="mailto:waniarbeel786@gmail.com">
          <FaEnvelope className="icon" />
        </a>
        <a href="tel:+1234567890">+91 9622849366</a>
        
      </div>
    </section>
  );
};

export default Contact;