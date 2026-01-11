import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const contacts = [
    {
      icon: <FaEnvelope />,
      label: "samueljamesofficial01@gmail.com",
      link: "mailto:samueljamesofficial01@gmail.com",
    },
    { icon: <FaPhone />, label: "+2349039885804", link: "tel:+2349039885804" },
    {
      icon: <FaWhatsapp />,
      label: "+2349039885804",
      link: "https://wa.me/2349039885804",
    },
    {
      icon: <FaTelegram />,
      label: "TolNex AcadTech",
      link: "https://t.me/TolNex_AcadTech",
    },
    {
      icon: <FaLinkedin />,
      label: "TolNex-AcadTech",
      link: "https://www.linkedin.com/in/TolNex-AcadTech-805605242",
    },
    {
      icon: <FaFacebook />,
      label: "Samuel James",
      link: "https://www.facebook.com/SamuelJames",
    },
    {
      icon: <FaInstagram />,
      label: "TolNex AcadTech",
      link: "https://www.instagram.com/TolNexAcadTech",
    },
    {
      icon: <FaGithub />,
      label: "TolNex-AcadTech",
      link: "https://github.com/TolNex-AcadTech",
    },
  ];

  const handleSendMessage = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill all fields");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Message failed");
      }

      setSuccess("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-left">
          {contacts.slice(0, 4).map((c, i) => (
            <a
              key={i}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="contact-btn-wrapper"
            >
              <button className="contact-btn">{c.icon}</button>
              <span className="contact-label">{c.label}</span>
            </a>
          ))}
        </div>

        <div className="contact-right">
          {contacts.slice(4).map((c, i) => (
            <a
              key={i}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="contact-btn-wrapper"
            >
              <button className="contact-btn">{c.icon}</button>
              <span className="contact-label">{c.label}</span>
            </a>
          ))}
        </div>

        {/* Message Box */}
        <div className="message-box">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <button onClick={handleSendMessage} className="send-btn">
            Send Message
          </button>
        </div>
      </div>

      {/* Floating Tech Icons */}
      <div className="floating-icons">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="floating-icon"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 95}%`,
              fontSize: `${Math.random() * 1.6 + 0.7}rem`,
            }}
          >
            ⚡
          </span>
        ))}
      </div>
    </section>
  );
};

export default ContactUs;
