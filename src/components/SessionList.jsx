import { Link } from "react-router-dom";

export const SessionList = () => {
  return (
    <ul className="xsm:flex-col xsm:text-[14px] xsm:gap-2  flex items-center md:flex-row md:gap-4  lg:gap-10 md:text-[18px] lg:text-[22px] text-gray-600">
      <li className="hover:underline">
        <Link to="/sophrologie/pain"> Sophrologie et douleur</Link>
      </li>
      <li className="hover:underline	">
        <Link to="/sophrologie/cancer">Sophrologie et cancer</Link>
      </li>
      <li className="hover:underline">
        <Link to="/sophrologie/child_adolescent">L'enfant et l'adolescent</Link>{" "}
      </li>
      <li className="hover:underline">
        <Link to="/sophrologie/work_stress"> Le stress au travail </Link>
      </li>
      <li className="hover:underline">
        <Link to="/sophrologie/hyponysis">Hypnose Humaniste</Link>
      </li>
    </ul>
  );
};
