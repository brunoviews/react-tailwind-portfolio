import React from "react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
const Language = () => {
    const { t, i18n } = useTranslation();
      const [scrolled, setScrolled] = useState(false);
      const changeLanguage = (language) => {
        i18n.changeLanguage(language);
      };
    
     
    
      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 50);
        };
    
        
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
   
    
    
    return (
        <div  className={`w-fit  mx-auto px-6 py-2 rounded-b-full fixed mt-28 left-2 right-2 z-10 flex items-center justify-center   transition-colors duration-500 ${
            scrolled ? "bg-white/95 dark:bg-slate-950 shadow-lg" : "bg-transparent"
          } max-md:px-10 max-md:py-2`}>
      <p className=" text-purple-500 mr-2  ">{t("header.language")}</p>
      <button
        className="  mr-1  flex gap-2 items-center text-sm font-medium text-gray-800 dark:text-white hover:text-purple-400 transition hover:scale-105 dark:hover:text-blue-400 dark:transition"
        onClick={() => changeLanguage("en")}
      >
        EN <img src="/ukflag.png" alt="UK flag" className="h-5 w-5" />
      </button> |
      <button
        className="flex gap-2 ml-1 items-center text-sm font-medium text-gray-800 dark:text-white hover:text-purple-400 transition hover:scale-105 dark:hover:text-red-500 dark:transition"
        onClick={() => changeLanguage("es")}
      >
        ES <img src="/spainflag.png" alt="Spain flag" className="h-5 w-5" />
      </button>
      </div>
    );
}

export default Language;