import { Hero } from "../components/Hero";
import { AboutMe } from "./AboutMe";

export const Home = () => {
  // const background = {
  //   backgroundImage: `url(${yellowBg})`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };

  return (
    <div className="flex flex-col gap-6 w-screen ">
      {/* <div style={background} className="h-[100vh] overflow-y-hidden"> */}

      {/* <h1 className="text-center my-20 text-4xl mb-[-120px]  font-bold h-20"> */}

      <Hero />
      <AboutMe />
    </div>
  );
};
