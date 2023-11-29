import { Link } from "react-router-dom";
import heroImg from "../assets/mountain-v-person-compressed.jpeg";
import img from "../assets/hypnosis-compress.jpg";
export const Hero = () => {
  return (
    <div
      className="relative     w-full xsm:h-[14rem] md:h-[24rem] rounded-xl bg-cover bg-center  bg-no-repeat "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div
        className="absolute w-full  font-[700]  bottom-2 left-6   text-green-500 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]
 "
      >
        <Link to="/sophrologie" className="md:text-[120px] xsm:text-[60px]">
          {" "}
          Sophrologie
        </Link>
        <p className="xsm:text-[12px] md:text-[18px]">
          {" "}
          " J'ai décidé d'être heureux. "C'est bon pour la santé ! " - Voltaire
        </p>
      </div>
      <div></div>
    </div>
  );
};
