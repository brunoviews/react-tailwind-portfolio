function Badge({ text }) {
  return (
    <div className="flex items-center pb-8">
      <span className="relative inline-flex overflow-hidden rounded-full p-[2px]">
        {/* Animación de borde con gradiente */}
        <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10B981_0%,#065F46_50%,#10B981_100%)]"></span>
        <div className="inline-flex items-center justify-center w-full px-4 py-1 text-sm  bg-fuchsia rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
          <a
            href="https://www.linkedin.com/in/brunoviews/"
            target="_blank"
            rel="noreferrer"
            className="text-white dark:text-white transition-colors duration-300"
          >
            {text}
          </a>
        </div>
      </span>
    </div>
  );
}

export default Badge;
