import { Link } from "react-router-dom";
import img from "../assets/hypnosis-compress.jpg";
export const Hero = () => {
  return (
    <div
      className="relative     xsm:h-[350px] md:h-[600px]  bg-cover bg-center  bg-no-repeat  "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div
        className="absolute w-full h-full   flex flex-col items-center justify-center text-white font-bold
 "
      >
        <Link to="/sophrologie" className="md:text-[100px] xsm:text-[40px]    ">
          Sophrologie
        </Link>
        <p className="xsm:text-[12px] md:text-[24px]">
          " J'ai décidé d'être heureux. "C'est bon pour la santé ! " - Voltaire
        </p>
      </div>
    </div>
  );
};
