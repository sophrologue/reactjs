import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SessionList } from "./SessionList";

export const Header = () => {
  const [displayList, setDisplayList] = useState(false);
  const handleShowSession = () => {
    setDisplayList(!displayList);
  };

  // bg-gradient-to-b from-orange-500 to-yellow-300
  return (
    <nav className=" z-99   w-screen drop-shadow-2xl text-gray-700  bg-white font-semibold">
      <ul className="w-[880px] h-12  flex items-center justify-evenly mx-auto my-2">
        {/* Welcome */}
        <li>
          <Link to="/">Accueil</Link>
        </li>
        {/* About me */}
        <li>
          <Link to="/about">Qui suis-je ?</Link>
        </li>
        {/* Sophrologie */}
        <li>
          <Link to="/sophrologie">Sophrologie</Link>
        </li>
        {/* Sessions */}
        <li
          className="flex  items-center cursor-pointer "
          onClick={handleShowSession}
        >
          <span> Sessions</span> <FaAngleDown className="ml-1 " width={20} />
        </li>
        {/* Prices */}
        <li>
          <Link>Prix</Link>
        </li>
        {/* Contact me */}
        <li>
          <Link>Me contacter</Link>
        </li>
        {/* Legal Notice */}
        <li>
          <Link>Mentions légales</Link>
        </li>
      </ul>
      {displayList && <SessionList />}
    </nav>
  );
};
