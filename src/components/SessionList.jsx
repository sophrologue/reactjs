import { Link } from "react-router-dom";

export const SessionList = () => {
  return (
    <ul className=" flex items-start  justify-evenly h-10 w-[850px] mx-auto font-semibold">
      <li>
        <Link>Sophrologie douleurs et cancer</Link>
      </li>
      <li>
        <Link>L'enfant et l'adolescent</Link>{" "}
      </li>
      <li>
        <Link>Le stress au travail</Link>
      </li>
      <li>
        <Link>Hypnose Humaniste</Link>
      </li>
    </ul>
  );
};
