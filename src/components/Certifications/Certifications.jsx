import React from "react";

const Certifications = ({ items }) => {
  items = [
    {
      name: "Programa de 10 semanas de aprendizaje en IA por IBM",
      logo: "/ia-certificado.webp",
    },
    {
      name: "Fundamentos de IA y Machine Learning",
      logo: "/iafundamentals.webp",
    },
    {
      name: "Machine Learning",
      logo: "/machine.webp",
    },

    { logo: "/b2.webp" },
  ];

  return (
    <>
      <div className="bg-whites dark:bg-black py-12 flex justify-center">
        <div className="grid grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div key={index} className="m-2 shadow-md">
              <img
                className="rounded-lg w-[500px] h-[400px] shadow-md shadow-fuchsia-300"
                src={item.logo}
                alt={item.name}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black items-center justify-center flex">
     
      </div>
    </>
  );
};

export default Certifications;
