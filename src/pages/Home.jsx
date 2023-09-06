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
      <div className="bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-sky-500 to-green-500">
        <div style={background} className="h-[80vh]">
          <Hero />
        </div>
      </div>
    </body>
  );
};
