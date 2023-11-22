/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const SessionList = () => {
  return (
    <ul className="flex items-center gap-10 text-[18px]">
      <li>
        <Link to="/sophrologie/pain_cancer">
          Sophrologie douleurs et cancer
        </Link>
      </li>
      <li>
        <Link to="/sophrologie/child_adolescent">L'enfant et l'adolescent</Link>{" "}
      </li>
      <li>
        <Link to="/sophrologie/work_stress"> Le stress au travail </Link>
      </li>
      <li>
        <Link to="/sophrologie/hyponysis">Hypnose Humaniste</Link>
      </li>
    </ul>
  );
};
