import { Link, useLocation } from "react-router-dom";
import mobile_list_icon from "../assets/svg/list-icon.svg";
import { useEffect, useState } from "react";

const navData = [
  { path: "/", title: "Accueil" },
  { path: "/about", title: "Qui je suis" },
  { path: "/sophrologie", title: "Sophrologie" },
  { path: "/price", title: "Tarifs" },
  { path: "/reviews", title: "Avis" },
  { path: "/society", title: "La Société" },
  { path: "/contact", title: "Me contacter" },
];

const sessionData = [
  { path: "/sophrologie/pain", title: "Sophrologie et douleur" },
  { path: "/sophrologie/cancer", title: "Sophrologie et cancer" },
  { path: "/sophrologie/child_adolescent", title: "L'enfant et l'adolescent" },
  { path: "/sophrologie/work_stress", title: "Le stress au travail " },
  { path: "/sophrologie/hyponysis", title: "Hypnose Humaniste" },
];

export const Header = () => {
  const { pathname } = useLocation();
  const [viewTabs, setViewTabs] = useState(false);
  const handleDisplayTab = () => {
    setViewTabs(true);
  };

  const handleCloseTab = () => {
    setViewTabs(false);
  };

  console.log(pathname);

  useEffect(() => {}, []);
  return (
    <>
      {/* web only */}
      <nav className="  xsm:hidden md:block h-[120px]  py-2 px-4 flex items-center">
        <div className="h-full max-w-[1250px] mx-auto flex items-center justify-between  text-black ">
          <div className="flex flex-col justify-center  h-full  gap-2">
            <div className="flex items-center gap-4">
              {navData.map((nav) => {
                return (
                  <Link
                    style={{
                      color: pathname === nav.path ? "#085f00" : "#000",
                    }}
                    className="transition ease-in-out font-bold hover:cursor-pointe  md:text-primary-nav-tablet  lg:text-primary-nav-title"
                    key={nav.path}
                    to={nav.path}
                  >
                    {nav.title}
                  </Link>
                );
              })}
            </div>
            <div className="space-x-4">
              {sessionData.map((data) => {
                return (
                  <Link
                    key={data.path}
                    to={data.path}
                    className="md:text-[14px] lg:text-[20px] text-gray-500 hover:text-black hover:underline"
                  >
                    {data.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* mobile only */}

      <nav className="xsm:block md:hidden h-[60px] bg-white px-2">
        <button onClick={handleDisplayTab} className="h-full flex items-center">
          <img
            src={mobile_list_icon}
            alt="mobile list icon"
            className="h-[40px] "
          />
        </button>
      </nav>

      {viewTabs && (
        <section className=" transition ease-in-out  space-y-4 p-6 z-[999999] fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-white">
          <button
            className="text-3xl w-full text-right font-bold"
            type="button"
            onClick={handleCloseTab}
          >
            x
          </button>
          <hr />
          <div className="font-bold space-x-4 flex flex-col items-center gap-4">
            {navData.map((nav) => {
              return (
                <Link
                  onClick={handleCloseTab}
                  className="text-xl text-gray-600 hover:text-black hover:underline"
                  key={nav.path}
                  to={nav.path}
                >
                  {nav.title}
                </Link>
              );
            })}
          </div>
          <hr />
          <div className="font-bold space-x-4 flex flex-col items-center gap-4">
            {sessionData.map((data) => {
              return (
                <Link
                  onClick={handleCloseTab}
                  key={data.path}
                  to={data.path}
                  className="text-xl text-gray-600 hover:text-black hover:underline"
                >
                  {data.title}
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};
