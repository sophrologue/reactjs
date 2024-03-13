import { Link } from "react-router-dom";
import { SessionList } from "./SessionList";

export const Header = () => {
  return (
    // <nav className=" flex flex-col items-center justify-evenly h-[7rem]     drop-shadow-2xl  text-[22px]">
    <nav className=" flex flex-col items-center justify-evenly sm:h-[7rem]     drop-shadow-2xl   sm:text-2xl xsm:text-md xsm:h-[12rem] ">
      <ul className="flex items-center xsm:gap-2  sm:gap-6 md:gap-10 ">
        <li className="hover:underline">
          <Link to="/">Accueil</Link>
        </li>

        <li className="hover:underline ">
          <Link to="/sophrologie">Sophrologie</Link>
        </li>
        <li className="hover:underline">
          <Link to="/price">Tarifs</Link>
        </li>
        <li className="hover:underline">
          <Link to="/reviews">Avis</Link>
        </li>
        <li className="hover:underline">
          <Link to="/contact">Me contacter</Link>
        </li>
        <li className="hover:underline">
          <Link to="/society">La Société</Link>
        </li>
      </ul>
      <hr className="block w-full" />
      <SessionList />
      <hr className="block w-full" />
    </nav>
  );
};
