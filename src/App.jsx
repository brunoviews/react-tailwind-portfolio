import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Experiencia from "./components/Experiencia";
import Certifications from "./components/Certifications/Certifications";
import { motion } from "framer-motion";

const App = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <Hero />
        <Projects />
        <Experiencia />
        <Education />
        <Certifications />
        <Footer />
      </motion.div>
    </>
  );
};

export default App;
