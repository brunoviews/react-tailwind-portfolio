import React from "react";
import { FaLinkedin } from "react-icons/fa";
import MailIcon from "./icons/MailIcon";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#0f172a] text-gray-700 dark:text-gray-400 py-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-4">
        {/* Nombre */}
        <p className="text-black dark:text-white font-semibold">
          © {year} Bruno Da Silva
        </p>
        {/* Enlaces a redes sociales */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/bruno-da-silva33/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-400 hover:text-purple-500 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:brunogustavo68@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-400 hover:text-purple-500 transition"
          >
            <MailIcon />
          </a>
        </div>
        {/* Créditos */}
        <p className="text-medium text-gray-600 dark:text-gray-400">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
