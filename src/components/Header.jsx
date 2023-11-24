import { Link } from "react-router-dom";
import { SessionList } from "./SessionList";

export const Header = () => {
  return (
    <nav className=" flex flex-col items-center justify-evenly h-[7rem]     drop-shadow-2xl  text-[22px]">
      <ul className="flex items-center gap-10 ">
        {/* Welcome */}
        <li className="hover:underline">
          <Link to="/">Accueil</Link>
        </li>
        {/* About me */}
        {/* <li>
          <Link to="/about">Qui suis-je ?</Link>
        </li> */}
        {/* Sophrologie */}
        <li className="hover:underline">
          <Link to="/sophrologie">Sophrologie</Link>
        </li>
        <li className="hover:underline">
          {/* Prices */}
          <Link to="/price">Tarifs</Link>
        </li>
        <li className="hover:underline">
          {/* Contact me */}
          <Link to="/contact">Me contacter</Link>
        </li>
        {/* <li className="hover:underline"> */}
        {/* Legal Notice */}
        {/* <Link>Mentions légales</Link> */}
        {/* </li> */}
      </ul>
      <hr className="block w-full" />
      <SessionList />
    </nav>
  );
};
