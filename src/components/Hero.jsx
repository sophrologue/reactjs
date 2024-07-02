/* eslint-disable react/no-unescaped-entities */
// import society_logo from "../assets/thesocietyimg.jpeg";
import { useInView } from "react-intersection-observer";
import wallpaper from "../assets/svg/green-hero-compressed.svg";
import LazyLoad from "react-lazyload";
import { useEffect, useState } from "react";
export const Hero = () => {
  const { inView, ref } = useInView({ threshold: 0.5 });
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);

  const transitionStyle = {
    transition: "opacity 2000ms",
    opacity: inView ? 1 : 0,
  };
  const backgroundStyle = isBackgroundLoaded
    ? { backgroundImage: `url(${wallpaper})` }
    : {};

  useEffect(() => {
    if (inView) {
      setIsBackgroundLoaded(true);
    }
  }, [inView]);
  return (
    <aside ref={ref} style={transitionStyle} className="  relative ">
      <LazyLoad once>
        <div
          className="brightness-75 h-[40rem] bg-cover bg-center bg-no-repeat"
          style={backgroundStyle}
        ></div>
      </LazyLoad>
      <div className="px-2 text-white  absolute top-0 right-0  left-0 bottom-0 flex flex-col items-center justify-center">
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
