import React from "react";
import { motion } from "framer-motion";
import BriefCase from "./icons/BriefCase";
import ArrowIcon from "./icons/ArrowIcon";
import { useTranslation } from "react-i18next";

const Education = () => {
const {t} = useTranslation();
const educations = (t("education.schools", { returnObjects: true }));

  return (
    <section
      id="education"
      className=" dark:bg-[#000] text-gray-700 dark:text-white py-12 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="flex items-center mb-12 text-3xl font-semibold gap-x-3 text-gray-800 dark:text-white">
          <BriefCase /> {t("education.title")}
        </h2>
        <ol className="relative border-l-2 border-gray-300 dark:border-gray-700">
          {educations.map((education, index) => (
            <div
              key={education.id}
              className="mb-10 ml-6 flex flex-col md:flex-row items-start gap-4"
              
            >
              {/* Punto indicador */}
              <div className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mt-1.5 -left-[7px]"></div>

              {/* Contenido alineado */}
              <div className="flex-1 ">
                {/* Fecha */}
                <time className="block text-sm font-normal leading-none text-gray-500 dark:text-gray-400 mb-1">
                  {education.date}
                </time>

                {/* Título, Etiqueta y Escuela */}
                
                <h3 className="text-xl pt-2   font-bold text-gray-800 items-center dark:text-white">
                  {education.position}
                  
                  {education.tag && (
                    <span className="ml-3 text-white  dark:text-white bg-green-600 text-xs font-medium px-2 py-1  rounded">
                      {education.tag}
                    </span>
                  )}
                  <div className="mt-2 w-fit text-sm font-medium px-2.5 py-0.5 rounded bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    {education.school}
                  </div>
                  
                </h3>
              </div>

              {/* Descripción y Enlace */}
              <div className="flex-1">
                <p className="text-base font-normal text-gray-600 dark:text-gray-400 mb-4">
                  {education.description}
                </p>
                {education.link && (
                  <a
                    href={education.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg hover:scale-105 transition-transform"
                  >
                    {t("education.ctabutton")}
                    <ArrowIcon className="ml-2" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;
