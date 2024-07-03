/* eslint-disable react/no-unescaped-entities */
import { useInView } from "react-intersection-observer";
import wallpaper_compressed from "../assets/images/green-hero-min.jpeg";
export const Hero = () => {
  const { inView, ref } = useInView({ threshold: 0.5 });

  const transitionStyle = {
    transition: "opacity 2000ms",
    opacity: inView ? 1 : 0,
  };

  const background = {
    backgroundImage: `url(${wallpaper_compressed}`,
  };

  return (
    <aside className="  relative ">
      <div
        className="brightness-75 h-[40rem] bg-cover bg-center bg-no-repeat"
        style={background}
      ></div>
      <div
        ref={ref}
        style={transitionStyle}
        className="px-2 text-white font-bold  absolute top-0 right-0  left-0 bottom-0 flex flex-col items-center justify-center"
      >
        <h1 className="xsm:text-[42px] lg:text-[62px] ">Sophrologie</h1>
        <p className="xsm:text-[16px] lg:text-[20px] text-center">
          {" "}
          " J'ai décidé d'être heureux. "C'est bon pour la santé ! " - Voltaire
        </p>
      </div>

      <div className="px-4 text-white font-semibold xsm:text-sm md:text-2xl absolute bottom-4 left-0 right-0 flex items-center xsm:justify-center md:justify-end ">
        <p>✉️ catherinefabrici.sophrologue@orange.fr</p>
      </div>
    </aside>
  );
};
