import { Career } from "../components/Career";
import { Hero } from "../components/Hero";
import { MyStory } from "../components/MyStory";
import { QuoteBox } from "../components/QuoteBox";

export const Home = () => {
  return (
    <div className=" flex flex-col w-screen max-w-[70rem]  mx-auto  ">
      <Hero />
      <QuoteBox />
      <hr className="mb-4 w-full border-t border-gray-300" />
      <Career />
      <hr className="mb-4 w-full border-t border-gray-300" />
      <MyStory />
    </div>
  );
};
