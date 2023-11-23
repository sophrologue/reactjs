import { Career } from "../components/Career";
import { Hero } from "../components/Hero";
import { MyStory } from "../components/MyStory";
import { QuoteBox } from "../components/QuoteBox";
import { SophologyIntroBox } from "../components/SophologyIntroBox";

export const Home = () => {
  return (
    <div className=" flex flex-col w-screen max-w-[70rem]  mx-auto  ">
      <Hero />
      {/* <hr className="my-4 w-full border-t border-gray-300" /> */}
      <QuoteBox />
      {/* <hr className="mb-4 w-full border-t border-gray-300" /> */}
      {/* <SophologyIntroBox /> */}
      <hr className="mb-4 w-full border-t border-gray-300" />
      <Career />
      <hr className="mb-4 w-full border-t border-gray-300" />
      <MyStory />
    </div>
  );
};
