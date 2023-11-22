import { Career } from "../components/Career";
import { Hero } from "../components/Hero";
import { MyStory } from "../components/MyStory";

export const Home = () => {
  return (
    <div className="flex flex-col w-screen ">
      <Hero />

      {/* <div className="w-full w-max-[90rem] px-[10rem]"> */}
      <div className="w-screen">
        <Career />
        <MyStory />
      </div>
    </div>
  );
};
