import { Link, useLocation } from "react-router-dom";

const sessionData = [
  { path: "/sophrologie/pain", title: "Sophrologie et douleur" },
  { path: "/sophrologie/cancer", title: "Sophrologie et cancer" },
  { path: "/sophrologie/child_adolescent", title: "L'enfant et l'adolescent" },
  { path: "/sophrologie/work_stress", title: "Le stress au travail " },
  { path: "/sophrologie/hyponysis", title: "Hypnose Humaniste" },
];

export const SessionList = () => {
  return (
    <div className="space-x-4">
      {sessionData.map((data) => {
        return (
          <Link
            key={data.path}
            to={data.path}
            className="transition ease-in-out md:text-[14px] lg:text-[20px]  hover:text-black hover:underline"
          >
            {data.title}
          </Link>
        );
      })}
    </div>
  );
};
// <ul className="xsm:flex-col xsm:text-[18px] xsm:gap-2  flex items-center md:flex-row md:gap-4  lg:gap-10 md:text-[18px] lg:text-[22px] text-gray-600">
//   <li className="hover:underline">
//     <Link to="/sophrologie/pain"> Sophrologie et douleur</Link>
//   </li>
//   <li className="hover:underline	">
//     <Link to="/sophrologie/cancer">Sophrologie et cancer</Link>
//   </li>
//   <li className="hover:underline">
//     <Link to="/sophrologie/child_adolescent">L'enfant et l'adolescent</Link>{" "}
//   </li>
//   <li className="hover:underline">
//     <Link to="/sophrologie/work_stress"> Le stress au travail </Link>
//   </li>
//   <li className="hover:underline">
//     <Link to="/sophrologie/hyponysis">Hypnose Humaniste</Link>
//   </li>
// </ul>
