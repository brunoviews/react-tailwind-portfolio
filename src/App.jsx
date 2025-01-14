import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Experiencia from "./components/Experiencia";
import Certifications from "./components/Certifications/Certifications";



const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Experiencia />
        <Education />
        <Certifications />
        <Projects />
        <Footer />
      </div>
    </>
  );
};

export default App;
