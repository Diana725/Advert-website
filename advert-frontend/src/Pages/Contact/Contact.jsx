import React, { useState } from "react";
import ContactHero from "./ContactHero";

// Import your downloaded social media icons
import facebookIcon from "../../assets/images/facebook.png";
import twitterIcon from "../../assets/images/twitter.png";
import instagramIcon from "../../assets/images/instagram.png";
import linkedinIcon from "../../assets/images/linkedin.png";
import whatsappIcon from "../../assets/images/whatsapp.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setResponseMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Error occurred. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <ContactHero />
      <div>
        <h2>Get Started Advertising With AdLite Today!</h2>
      </div>
      <div style={styles.contentWrapper}>
        {/* Contact Form Section */}
        <div style={styles.formWrapper}>
          <h1 style={styles.header}>Contact Us</h1>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={styles.textarea}
              ></textarea>
            </div>
            <button type="submit" style={styles.button}>
              Send
            </button>
          </form>
          {responseMessage && <p style={styles.response}>{responseMessage}</p>}
        </div>

        {/* Social Media Section */}
        <div style={styles.socialWrapper}>
          <h3 style={styles.socialHeader}>Connect with us via social media</h3>
          <p className="fs-5">
            Connect with us and we will get back to you as soon as possible. We
            are excited to work with you.{" "}
          </p>
          <div style={styles.iconsContainer}>
            <a
              href="https://web.facebook.com/adlitemedia?_rdc=1&_rdr"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" style={styles.icon} />
            </a>
            <a
              href="https://x.com/adlitemedia"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitterIcon} alt="Twitter" style={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/adlitemedia/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" style={styles.icon} />
            </a>
            <a
              href="https://www.linkedin.com/company/adlitemedia/about/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" style={styles.icon} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=254700012012&text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20your%20taxi%20advertising%20platforms.%20"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsappIcon} alt="LinkedIn" style={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    textAlign: "center",
    color: "#333",
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  formWrapper: {
    flex: 1,
  },
  header: {
    fontSize: "2.5em",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    textAlign: "left",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1em",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "border 0.3s ease",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "1em",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
    minHeight: "150px",
    resize: "vertical",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1.2em",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  response: {
    marginTop: "15px",
    fontSize: "1.1em",
    color: "#28a745",
  },
  socialWrapper: {
    flex: 1,
    padding: "20px",
    borderLeft: "2px solid #ccc", // Vertical divider between the form and social media section
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  socialHeader: {
    fontSize: "30px",
    marginBottom: "20px",
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
  },
  icon: {
    width: "50px",
    height: "50px",
    cursor: "pointer",
    transition: "transform 0.3s",
  },
};

export default ContactForm;
