import React from "react";

const SocialLinks = ({ link, icon, text }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      role="link"
      href={link}
      className="flex items-center justify-center px-6 py-3 border-2 rounded-lg text-gray-700 dark:text-white hover:scale-105 transition-transform"
      style={{
        borderImageSource: "linear-gradient(to right, #3b82f6, #9333ea)",
        borderImageSlice: 1,
      }}
    >
      <span className="mr-2">{text}</span>
      {icon}
    </a>
  );
};

export default SocialLinks;
