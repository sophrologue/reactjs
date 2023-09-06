import React, { useState } from "react";
import backgroundImg from "../assets/flower-large.jpeg";
import { MyStory } from "../components/MyStory";
import { Career } from "../components/Career";

export const AboutMe = () => {
  const background = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const [showStoryTab, setShowStoryTab] = useState(true);

  // const toggleDropdown = () => {
  //   setDropdownVisible(!isDropdownVisible);
  // };

  return (
    <div style={background} className="h-[100%]">
      <div className="p-10">
        <div>
          <button
            onClick={() => setShowStoryTab(true)}
            className="bg-yellow-600 bg- text-white w-[200px] h-[50px] border-r hover:brightness-110 duration-300"
          >
            My Story
          </button>
          <button
            onClick={() => setShowStoryTab(false)}
            className="bg-yellow-700 text-white w-[200px] h-[50px] hover:brightness-110 duration-300"
          >
            Career
          </button>
        </div>
        {showStoryTab ? <MyStory /> : <Career />}
      </div>
    </div>
  );
};
