import yellowBg from "../assets/green-leaf-large.jpeg";
import { Hero } from "../components/Hero";

export const Home = () => {
  const background = {
    backgroundImage: `url(${yellowBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <body className="w-screen">
      <div className="">
        <div style={background} className="h-[100vh] overflow-y-hidden">
          <h1 className="text-center my-20 text-4xl mb-[-120px]  font-bold h-20">
            Catherine FABRICI - SOPHROLOGUE
          </h1>
          <Hero />
        </div>
      </div>
    </body>
  );
};
