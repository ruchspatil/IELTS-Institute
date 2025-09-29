import React from "react";
import Navbar from "/src/components/Navbar";
import Hero from "/src/components/Hero";
import Features from "/src/components/Features";
import Testimonials from "/src/components/Testimonials";
import Footer from "/src/components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
