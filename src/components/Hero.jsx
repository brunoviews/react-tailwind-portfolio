import React from "react";
import SocialLinks from "./SocialLinks";
import LinkedInIcon from "./icons/LinkedInIcon";
import GithubIcon from "./icons/GithubIcon";
import MailIcon from "./icons/MailIcon";
import ReactIcon from "./icons/ReactIcon";
import Tailwind from "./icons/Tailwind";
import Astro from "./icons/Astro";
import DownloadIcon from "./icons/DownloadIcon";
import Card from "./Card";
import { motion } from "framer-motion";
import Badge from "./Badge";

const Hero = () => {
  return (
    <>
      <motion.section
        id="hero"
        className="flex flex-col pb-3 justify-center items-center text-center min-h-screen bg-slate-100 dark:bg-black/95 text-black dark:text-white pt-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-32 sm:w-48 mb-4">
          <Card />
        </div>
        <Badge text="Open to Work" />
        <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-400 m-2">
          Hola, Soy
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Bruno
        </h1>
        <div className="mt-4 text-black dark:text-gray-300 max-w-md sm:max-w-xl text-base sm:text-lg text-balance">
          Soy{" "}
          <span className="text-pink-600 dark:text-pink-400 font-semibold">
            Desarrollador Front-End
          </span>{" "}
          con experiencia en{" "}
          <span className="font-bold dark:text-white inline-flex items-center gap-1 cursor-pointer">
            React <ReactIcon className="w-5 h-5" />
          </span>
          ,{" "}
          <span className="font-bold text-gray-800 dark:text-white inline-flex items-center gap-1 cursor-pointer">
            Tailwind CSS <Tailwind className="w-5 h-5" />
          </span>{" "}
          y{" "}
          <span className="text-black font-semibold inline-flex items-center gap-1 dark:text-white cursor-pointer">
            Astro <Astro className="w-5 h-5" />
          </span>
          .
        </div>
        <p className="mt-2 text-black dark:text-gray-300 max-w-md sm:max-w-xl text-base sm:text-lg text-balance">
          Actualmente, estoy ampliando mis conocimientos en{" "}
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-purple-600 font-semibold">
            Angular
          </span>
          ,{" "}
          <span className="text-grey-800 dark:text-white font-semibold">
            TypeScript e Inteligencia Artificial.
          </span>
        </p>
        <div className="flex flex-col  justify-center md:flex-row  gap-4 mt-8">
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
          <SocialLinks
            link="./cv.pdf"
            download="cv.pdf"
            text="Descargar CV"
            icon={<DownloadIcon />}
          />
        </div>
        <p className="mt-8 text-gray-600 dark:text-gray-300 max-w-md sm:max-w-xl text-base sm:text-lg text-balance">
          Puedes probar mi{" "}
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Chatbot
          </span>{" "}
          abajo a la derecha de tu navegador.
        </p>
      </motion.section>
    </>
  );
};

export default Hero;
