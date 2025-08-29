import { useState, useEffect } from "react";
import MoonIcon from "./icons/MoonIcon";
import Sun from "./icons/Sun";
import { useTranslation } from "react-i18next";
import Language from "./Language";

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

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
    <>
      <nav
        className={`w-fit   mx-auto rounded-full fixed top-2 left-2 right-2 z-20 flex items-center justify-center px-4 py-2 transition-colors duration-500 ${
          scrolled
            ? "bg-white/90 dark:bg-slate-950 shadow-lg"
            : "bg-transparent"
        } md:px-6 md:py-3`}
      >
        <button
          href="#hero"
          className="px-2 py-2 text-sm font-bold text-gray-800 dark:text-white dark:hover:text-purple-400 dark:transition hover:text-purple-400 transition"
          onClick={() => handleScrollToSection("#hero")}
        >
          {t("header.home")}
        </button>
        <button
          href="#projects"
          className="px-2 py-2 text-sm font-bold text-gray-800 dark:text-white dark:hover:text-purple-400 dark:transition hover:text-purple-400 transition"
          onClick={() => handleScrollToSection("#projects")}
        >
          {t("header.projects")}
        </button>
        <button
          href="#experience"
          className="px-2 py-2 text-sm font-bold text-gray-800 dark:text-white dark:hover:text-purple-400 dark:transition hover:text-purple-400 transition"
          onClick={() => handleScrollToSection("#experience")}
        >
          {t("header.experience")}
        </button>

        <button>
          <a
            href="mailto:brunogustavo68@gmail.com"
            className="px-2 py-2 text-sm font-bold text-gray-800 dark:text-white dark:hover:text-purple-400 dark:transition hover:text-purple-400 transition border-r-2 border-slate-600"
          >
            {t("header.contact")}
          </a>
        </button>

        <Language />

        <button
          onClick={toggleTheme}
          className="ml-1 w-22 h-auto flex items-center justify-center rounded-full bg-gray-800 text-white dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-500 transition"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <Sun /> : <MoonIcon />}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
