import { MyStory } from "../components/MyStory";
import { Career } from "../components/Career";

export const AboutMe = () => {
  return (
    <div className="w-full w-max-[90rem] px-[10rem]">
      <Career />
      <MyStory />
    </div>
  );
};
