import { Card } from "../components/Card";
import { Career } from "../components/Career";
import { Hero } from "../components/Hero";
import { MyStory } from "../components/MyStory";

export const Home = () => {
  return (
    <div className=" flex flex-col w-screen max-w-[70rem]  mx-auto  ">
      {/* <h1>Sophrologie</h1> */}

      <Hero />

      {/* <hr className="mb-4 w-full border-t border-gray-300" /> */}
      <Career />
      <hr className="mb-4 w-full border-t border-gray-300" />
      <Card />
      <hr className="mb-4 w-full border-t border-gray-300" />
      <MyStory />
    </div>
  );
};
