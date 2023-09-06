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
    <div style={background} className="w-screen">
      <div className="p-10">
        <div>
          <button
            onClick={() => setShowStoryTab(true)}
            className="bg-green-400 text-white w-[200px] h-[50px] border-r"
          >
            My Story
          </button>
          <button
            onClick={() => setShowStoryTab(false)}
            className="bg-green-500 text-white w-[200px] h-[50px]"
          >
            Career
          </button>
        </div>
        {showStoryTab ? <MyStory /> : <Career />}
      </div>
    </div>
  );
};
