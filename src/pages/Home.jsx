import { Career } from "../components/Career";
import { Hero } from "../components/Hero";
import { MyStory } from "../components/MyStory";

export const Home = () => {
  return (
    <div className="flex flex-col w-screen ">
      <Hero />

      {/* <div className="w-full w-max-[90rem] px-[10rem]"> */}
      <div className="w-screen">
        {/* <h1 className=" text-5xl font-[700] p-10 text-center border border-gray-200">
          Qui suis-je ?
        </h1> */}

        <Career />
        <MyStory />
      </div>
    </div>
  );
};
