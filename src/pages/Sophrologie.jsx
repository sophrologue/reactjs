import React, { useState } from "react";
import backgroundImg from "../assets/heart-large.jpeg";
import { MyStory } from "../components/MyStory";
import { Career } from "../components/Career";
import { SophologieBox } from "../components/SophologieBox";

export const Sophrologie = () => {
  const [showStoryTab, setShowStoryTab] = useState(true);
  const background = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  // const toggleDropdown = () => {
  //   setDropdownVisible(!isDropdownVisible);
  // };

  return (
    <div style={background} className="h-[100%]">
      <div className="p-10">
        <div className="flex items-center">
          <button className="bg-emerald-500 text-white w-[200px] h-[50px] hover:brightness-110 duration-300">
            Sophrologie
          </button>
          <button
            onClick={() => setShowStoryTab(true)}
            className="bg-blue-400 bg- text-white w-[200px] h-[50px] border-x hover:brightness-110 duration-300"
          >
            Sophrologie douleurs et cancer
          </button>
          <button
            onClick={() => setShowStoryTab(false)}
            className="bg-emerald-500 text-white w-[200px] h-[50px] hover:brightness-110 duration-300"
          >
            L'enfant et l'adolescent
          </button>
          <button
            onClick={() => setShowStoryTab(true)}
            className="bg-blue-500 bg- text-white w-[200px] h-[50px] border-x hover:brightness-110 duration-300"
          >
            Le stress au travail
          </button>
          <button
            onClick={() => setShowStoryTab(false)}
            className="bg-emerald-600 text-white w-[200px] h-[50px] hover:brightness-110 duration-300"
          >
            Hypnose Humaniste
          </button>
        </div>
        {showStoryTab ? <SophologieBox /> : <SophologieBox />}

        {/* <SophologieBox /> */}
      </div>
    </div>
  );
};
