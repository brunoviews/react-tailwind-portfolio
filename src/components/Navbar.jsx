import React, { useState, useEffect } from "react";
import MoonIcon from "./icons/MoonIcon";
import Sun from "./icons/Sun";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Cambiar el estado al hacer scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Recuperar el tema guardado
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const handleScrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`w-fit mx-auto rounded-full fixed top-2 left-2 right-2 z-10 flex items-center justify-center px-4 py-2 transition-colors duration-500 ${
        scrolled ? "bg-white/90 dark:bg-slate-950 shadow-lg" : "bg-transparent"
      } md:px-6 md:py-3`}
    >
      <button
        href="#hero"
        className="px-2 py-2 text-sm font-medium text-gray-800 dark:text-white hover:text-purple-400 transition"
        onClick={() => handleScrollToSection("#hero")}
      >
        Home
      </button>
      <button
        href="#projects"
        className="px-2 py-2 text-sm font-medium text-gray-800 dark:text-white hover:text-purple-400 transition"
        onClick={() => handleScrollToSection("#projects")}
      >
        Proyectos
      </button>
      <button
        href="#experience"
        className="px-2 py-2 text-sm font-medium text-gray-800 dark:text-white hover:text-purple-400 transition"
        onClick={() => handleScrollToSection("#experience")}
      >
        Experiencia
      </button>
      <a
        href="mailto:brunogustavo68@gmail.com"
        className="px-2 py-2 text-sm font-medium text-gray-800 dark:text-white hover:text-purple-400 transition"
      >
        Contacto
      </a>

      {/* Botón para cambiar de tema */}
      <button
        onClick={toggleTheme}
        className="ml-1 w-22 h-auto flex items-center justify-center rounded-full bg-gray-800 text-white dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition"
        aria-label="Toggle Theme"
      >
        {theme === "light" ? <Sun />  : <MoonIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
