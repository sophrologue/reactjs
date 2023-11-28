import { useState, useEffect } from "react";

export const QuoteBox = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`flex items-center justify-center rounded-xl  relative my-6 w-full h-[5rem] bg-cover bg-center bg-no-repeat overflow-hidden ${
        isVisible
          ? "opacity-100 transform translate-x-0"
          : "opacity-0 transform translate-x-full"
      } transition-opacity transition-transform duration-700`}
    >
      <p className="text-[36px] text-center italic  font-[700]">
        " J'ai décidé d'être heureux. "C'est bon pour la santé ! " - Voltaire
      </p>
    </div>
  );
};
