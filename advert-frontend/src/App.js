import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AdvertisingFormats from "./Pages/AdvertisingFormats/AdvertisingFormats.jsx";
import AdvertisingSolutions from "./Pages/AdvertisingSolutions/AdvertisingSolutions.jsx";
import Partner from "./Pages/Patners/Partners.jsx";
import About from "./Pages/About/About.jsx";
import ContactForm from "./Pages/Contact/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-75 max-vh-75">
        {/* <Navbar /> */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/advertisers" element={<Advertisers />} /> */}
            <Route path="/contact" element={<ContactForm />} />
            <Route
              path="/advertising-formats"
              element={<AdvertisingFormats />}
            />
            <Route
              path="/advertising-solutions"
              element={<AdvertisingSolutions />}
            />
            <Route path="/partners-clients" element={<Partner />} />
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/get-started" element={<div>Get Started</div>} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
