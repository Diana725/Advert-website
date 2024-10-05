import React, { useState } from "react";
import ContactHero from "./ContactHero";

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
        // Clear the form after successful submission
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
        <h2>Get Started Advertising With TaxiAd Today!</h2>
        <p style={{ fontSize: 30 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
          porttitor risus, quis bibendum orci. Maecenas orci turpis, cursus non
          elit vitae, rutrum accumsan risus. Nam commodo tortor urna, sit amet
          congue ex pulvinar et. Suspendisse bibendum nulla nunc, nec efficitur
          risus vehicula non.
        </p>
      </div>
      <div style={styles.contentWrapper}>
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
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    zIndex: 2, // Ensure it appears above the hero image
    position: "relative",
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
};

export default ContactForm;
