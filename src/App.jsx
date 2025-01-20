import React from "react";

// CSS
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import ContactUs from "./Components/ContactUs/ContactUs";
import ServicesGrid from "./Components/ServicesGrid/ServicesGrid";
import RekhtaSection from "./Components/Rekhta/Rekhta";

function App() {
  return (
    <main className="main__container">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Contact Us Section */}
      <ContactUs />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Rekhta Section */}
      <RekhtaSection />
    </main>
  );
}

export default App;
