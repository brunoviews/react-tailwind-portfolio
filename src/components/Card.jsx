function Card({ title, description, imageUrl, buttonText, onButtonClick }) {
  return (
    <div className="rounded-full shadow-black shadow-lg dark:shadow-gray-800 dark:shadow-lg w-48 h-48  overflow-hidden transition-transform duration-300  mt-4 max-w-xs ">
      {/* Renderizar imagen si está disponible
       */}
      {imageUrl && (
        <div className="flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="w-48 h-48 rounded-full object-cover object-[60%_50%]"
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
