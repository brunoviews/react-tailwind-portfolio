import React from "react";
import Case from "./icons/Case";
import ArrowIcon from "./icons/ArrowIcon";
import { useTranslation } from "react-i18next";

const Experiencia = () => {
  const { t } = useTranslation();
  const jobs = t("experience.jobs", { returnObjects: true });
  

  return (
    <section
      id="experience"
      className="dark:bg-[#000] text-gray-700 dark:text-white py-12 pb-8 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="flex items-center mb-12 text-3xl font-semibold gap-x-3 text-gray-800 dark:text-white">
          <Case /> {t("experience.title")}
        </h2>
        <ol className="relative border-l-2 border-gray-300 dark:border-gray-700">
          {jobs.map((job) => (
            <li
              key={job.id}
              className="mb-10 ml-6 flex flex-col md:flex-row items-start gap-4"
            >
              {/* Punto indicador */}
              <div className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mt-1.5 -left-[7px]"></div>

              {/* Contenido alineado */}
              <div className="flex-1 gap-4">
                {/* Fecha */}
                <time className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400 mb-1">
                  {job.date}
                </time>

                {/* Título y Empresa */}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                  {job.position}
                </h3>
                <span className="mt-2 w-fit text-sm font-medium px-2.5 py-0.5 rounded bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  {job.company}
                </span>
              </div>

              {/* Descripción y Enlace */}
              <div className="flex-1">
                <p className="text-base font-normal text-gray-600 dark:text-gray-400 mb-4">
                  {job.description}
                </p>
                {job.link && (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg hover:scale-105 transition-transform"
                  >
                    {t("experience.ctabutton")}
                    <ArrowIcon className="ml-2" />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experiencia;
