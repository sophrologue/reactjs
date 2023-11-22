import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SessionList } from "./SessionList";

export const Header = () => {
  // bg-gradient-to-b from-orange-500 to-yellow-300
  return (
    <nav className=" flex flex-col items-center justify-evenly h-[7rem]  w-screen  drop-shadow-2xl  text-[22px]">
      <ul className="flex items-center gap-10">
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
        <li>
          {/* Prices */}
          <Link>Tarifs</Link>
        </li>
        <li>
          {/* Contact me */}
          <Link>Me contacter</Link>
        </li>
        <li>
          {/* Legal Notice */}
          <Link>Mentions légales</Link>
        </li>
      </ul>
      <SessionList />
      {/* Sessions */}
      {/* <li
          className="flex  items-center cursor-pointer "
          // onClick={handleShowSession}
          onMouseEnter={handleShowSession}
        >
          <span> Sessions</span> <FaAngleDown className="ml-1 " width={20} /> */}
      {/* </li> */}
      {/* {displayList && <SessionList handleCloseSession={handleCloseSession} />} */}
    </nav>
  );
};
