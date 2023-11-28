import { Link } from "react-router-dom";
import { SessionList } from "./SessionList";

export const Header = () => {
  return (
    <nav className=" flex flex-col items-center justify-evenly h-[7rem]     drop-shadow-2xl  text-[22px]">
      <ul className="flex items-center lg:gap-10 sm:gap-6 ">
        <li className="hover:underline">
          <Link to="/">Accueil</Link>
        </li>

        <li className="hover:underline">
          <Link to="/sophrologie">Sophrologie</Link>
        </li>
        <li className="hover:underline">
          <Link to="/price">Tarifs</Link>
        </li>
        <li className="hover:underline">
          <Link to="/contact">Me contacter</Link>
        </li>
      </ul>
      <hr className="block w-full" />
      <SessionList />
      <hr className="block w-full" />
    </nav>
  );
};
