import React from "react";
import GithubIcon from "../components/icons/GithubIcon";
import LinkIcon from "../components/icons/LinkIcon";
import CodeIcon from "../components/icons/CodeIcon";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.project", { returnObjects: true });

  return (
    <section
      className="bg-white dark:bg-[#000] text-gray-800 dark:text-white py-12 transition-colors duration-500"
      id="projects"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="flex items-center mb-12 text-3xl font-semibold gap-x-3 text-gray-800 dark:text-white">
          <CodeIcon /> {t("projects.title")}
        </h2>
        <div className=" grid grid-cols-2  max-sm:grid gap-8 max-sm:grid-cols-1">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 dark:bg-gray-900 p-6 grid gap-2 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2 text-center">
                {project.description}
              </p>
              <p className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-4 text-center">
                {project.tech}
              </p>
              <div className="flex justify-center gap-7 items-center">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 border-2 rounded-lg text-gray-800 dark:text-white hover:scale-105 transition-transform"
                  style={{
                    borderImageSource:
                      "linear-gradient(to right, #3b82f6, #9333ea)",
                    borderImageSlice: 1,
                  }}
                >
                  <LinkIcon className="mr-2" /> Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 border-2 rounded-lg text-gray-800 dark:text-white hover:scale-105 transition-transform"
                  style={{
                    borderImageSource:
                      "linear-gradient(to right, #9333ea, #3b82f6)",
                    borderImageSlice: 1,
                  }}
                >
                  <GithubIcon className="mr-2" /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
