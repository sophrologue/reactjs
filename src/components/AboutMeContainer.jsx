import { useInView } from "react-intersection-observer";
import therapy from "../assets/svg/therapy-image-compress.svg";
import { Link } from "react-router-dom";

export default function AboutMeContainer() {
  const { inView, ref } = useInView({ threshold: 0.5 });

  const transitionStyle = {
    transition: "opacity 2000ms",
    opacity: inView ? 1 : 0,
  };
  const backgroundStyle = {
    backgroundImage: `url(${therapy})`,
  };

  return (
    <section
      style={backgroundStyle}
      className="relative h-[40rem]  bg-cover bg-center bg-no-repeat "
    >
      <div
        ref={ref}
        style={transitionStyle}
        className="absolute  xsm:text-[32px] md:text-[48px] text-white font-bold h-full left-0 right-0  top-0 flex flex-col gap-4 items-center justify-center "
      >
        <h1>Catherine Fabrici</h1>
        <h2>Sophrologue</h2>
        <Link
          type="button"
          to="/about"
          className="flex items-center justify-center xsm:text-[16px] md:text-[24px] hover:brightness-105 h-14 w-80 font-semibold bg-green-400 text-white rounded-xl"
        >
          Qui je suis?
        </Link>
      </div>
    </section>
  );
}
