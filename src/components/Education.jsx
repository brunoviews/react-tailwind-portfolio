import React from "react";
import { motion } from "framer-motion";
import BriefCase from "./icons/BriefCase";
import ArrowIcon from "./icons/ArrowIcon";

const Education = () => {
  const items = [
    {
      title: "Desarrollador Front-End",
      tag: "Latest",
      school: "Tokio School",
      date: "Terminado en Noviembre 2024",
      description:
        "Aprendiendo a desarrollar aplicaciones web con React, desde la configuración del entorno de desarrollo hasta la publicación de aplicaciones en producción.",
      link: "https://www.tokioschool.com/formaciones/cursos-programacion/front-end/",
    },
    {
      title: "Experto Universitario en Desarrollo de Aplicaciones Web",
      school: "SEAS Estudios Abiertos",
      date: "Terminado en Octubre 2023",
      description:
        "Abarcando diseño con HTML y CSS3, programación avanzada en JavaScript y desarrollo backend con PHP y MySQL, desde la configuración hasta la publicación de aplicaciones web.",
      link: "https://www.seas.es/informatica/experto-universitario-desarrollo-aplicaciones-web",
    },
  ];

  return (
    <section
      id="education"
      className=" dark:bg-[#000] text-gray-700 dark:text-white py-12 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="flex items-center mb-12 text-3xl font-semibold gap-x-3 text-gray-800 dark:text-white">
          <BriefCase /> Formación
        </h2>
        <ol className="relative border-l-2 border-gray-300 dark:border-gray-700">
          {items.map((item, index) => (
            <motion.li
              key={index}
              className="mb-10 ml-6 flex flex-col md:flex-row items-start gap-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Punto indicador */}
              <div className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mt-1.5 -left-[7px]"></div>

              {/* Contenido alineado */}
              <div className="flex-1 ">
                {/* Fecha */}
                <time className="block text-sm font-normal leading-none text-gray-500 dark:text-gray-400 mb-1">
                  {item.date}
                </time>

                {/* Título, Etiqueta y Escuela */}
                
                <h3 className="text-xl pt-2   font-bold text-gray-800 items-center dark:text-white">
                  {item.title}
                  
                  {item.tag && (
                    <span className="ml-3 text-white  dark:text-white bg-green-600 text-xs font-medium px-2 py-1  rounded">
                      {item.tag}
                    </span>
                  )}
                  <div className="mt-2 w-fit text-sm font-medium px-2.5 py-0.5 rounded bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    {item.school}
                  </div>
                  
                </h3>
              </div>

              {/* Descripción y Enlace */}
              <div className="flex-1">
                <p className="text-base font-normal text-gray-600 dark:text-gray-400 mb-4">
                  {item.description}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg hover:scale-105 transition-transform"
                  >
                    Saber más
                    <ArrowIcon className="ml-2" />
                  </a>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;
