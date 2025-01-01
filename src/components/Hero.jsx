import React from "react";
import SocialLinks from "./SocialLinks";
import LinkedInIcon from "./icons/LinkedInIcon";
import GithubIcon from "./icons/GithubIcon";
import MailIcon from "./icons/MailIcon";
import Card from "./Card";
import { motion } from "framer-motion";
import Badge from "./Badge";

const Hero = () => {
  return (
    <>
      <motion.section
        id="hero"
        className="flex flex-col justify-center items-center text-center h-screen bg-white dark:bg-black/95 text-black dark:text-white pt-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <Card />
        </div>
        <Badge text="Open to Work" />
        <p className="text-xl text-text-black dark:text-gray-400 m-2">
          Hola, Soy
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Bruno Da Silva
        </h1>
        <p className="mt-4 text-black dark:text-gray-300 max-w-xl text-lg sm:text-xl text-balance">
          Soy <span className="text-pink-600  dark:text-white">Desarrollador Front-End</span> con experiencia en React,
          Tailwind y Astro.
        </p>
        <p className="mt-2 text-black dark:text-gray-300 max-w-xl text-lg sm:text-xl text-balance">
          Actualmente, estoy ampliando mis conocimientos en Angular, TypeScript
          e Inteligencia Artificial.{" "}
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
          <SocialLinks
            link="https://www.linkedin.com/in/bruno-da-silva33/"
            text="LinkedIn"
            icon={<LinkedInIcon />}
          />
          <SocialLinks
            link="https://github.com/brunoviews"
            text="Github"
            icon={<GithubIcon />}
          />
          <SocialLinks
            text="brunogustavo68@gmail.com"
            link="mailto:brunogustavo68@gmail.com"
            icon={<MailIcon />}
          />
        </div>
        <p className="mt-8 text-gray-600 dark:text-gray-300 max-w-xl text-lg sm:text-xl text-balance">
          Puedes probar mi{" "}
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Chatbot
          </span>{" "}
          abajo a la derecha de tu navegador.{" "}
        </p>
      </motion.section>
    </>
  );
};

export default Hero;
