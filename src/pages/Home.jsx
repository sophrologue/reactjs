import { Card } from "../components/Card";
import { Career } from "../components/Career";
import { Hero } from "../components/Hero";
import { MyStory } from "../components/MyStory";
import societyImg from "../assets/thesocietyimg.jpeg";

export const Home = () => {
  return (
    <div className=" flex flex-col   xsm:w-full md:gap-10 xsm:gap-0    ">
      <Hero />
      <div>
        <div className="flex justify-center xsm:p-6 md:p-0">
          <img src={societyImg} alt="society" />
        </div>
      </div>

      <Card />

      <Career />
      <MyStory />
    </div>
  );
};
