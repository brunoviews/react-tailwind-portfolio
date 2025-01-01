import React from "react";

function Card({
  title,
  description,
  imageUrl = "./bdasilva.png",
  buttonText,
  onButtonClick,
}) {
  return (
    <div
      className="rounded-full overflow-hidden transition-transform duration-300 w-full max-w-xs mt-4 hover:translate-y-[-10px]"
    >
      {/* Renderizar imagen si está disponible */}
      {imageUrl && (
        <div className="relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-48 h-auto rounded-full shadow-xl"
          />
        </div>
      )}
      <div className="p-4 flex flex-col justify-center items-center">
        {description && (
          <p className="text-base text-gray-700 dark:text-gray-300 text-center mb-4">
            {description}
          </p>
        )}

        {/* Botón si está disponible */}
        {buttonText && (
          <button
            className="px-4 py-2 text-base text-white bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
