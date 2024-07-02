/* eslint-disable react/no-unescaped-entities */
import { useInView } from "react-intersection-observer";
import wallpaper from "../assets/svg/green-hero-compressed.svg";
export const Hero = () => {
  const { inView, ref } = useInView({ threshold: 0.5 });

  const transitionStyle = {
    transition: "opacity 2000ms",
    opacity: inView ? 1 : 0,
  };

  return (
    <aside className="  relative ">
      <img src={wallpaper} alt="main image" loading="lazy" />
      <div
        ref={ref}
        style={transitionStyle}
        className="px-2 text-white font-bold  absolute top-0 right-0  left-0 bottom-0 flex flex-col items-center justify-center"
      >
        <h1 className="xsm:text-[32px] lg:text-[92px] ">Sophrologie</h1>
        <p className="xsm:text-[16px] lg:text-[38px] text-center">
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
