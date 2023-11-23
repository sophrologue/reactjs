import { Link } from "react-router-dom";

export const SessionList = () => {
  return (
    <ul className="flex items-center gap-10 text-[18px] text-gray-600">
      <li className="hover:underline	">
        <Link to="/sophrologie/pain_cancer">
          Sophrologie douleurs et cancer
        </Link>
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
