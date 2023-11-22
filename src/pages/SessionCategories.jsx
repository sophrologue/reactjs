// import React, { useState } from "react";
// import backgroundImg from "../assets/heart-large.jpeg";

import { Link } from "react-router-dom";

export const SessionCategories = () => {
  // const background = {
  //   backgroundImage: `url(${backgroundImg})`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };

  return (
    <div className="flex items-center mt-10 mx-20">
      <Link to="/sophrologie">
        <button className="bg-emerald-500 text-white w-[200px] h-[50px] hover:brightness-110 duration-300">
          Sophrologie
        </button>
      </Link>
      <Link to="/sophrologie/pain_cancer">
        <button className="bg-blue-400 bg- text-white w-[200px] h-[50px] border-x hover:brightness-110 duration-300">
          Sophrologie douleurs et cancer
        </button>
      </Link>
      <Link to="/sophrologie/child_adolescent">
        <button className="bg-emerald-500 text-white w-[200px] h-[50px] hover:brightness-110 duration-300">
          L'enfant et l'adolescent
        </button>
      </Link>
      <Link to="/sophrologie/work_stress">
        <button className="bg-blue-500 bg- text-white w-[200px] h-[50px] border-x hover:brightness-110 duration-300">
          Le stress au travail
        </button>
      </Link>
      <Link to="/sophrologie/hyponysis">
        <button className="bg-emerald-600 text-white w-[200px] h-[50px] hover:brightness-110 duration-300">
          Hypnose Humaniste
        </button>
      </Link>
    </div>
  );
};
