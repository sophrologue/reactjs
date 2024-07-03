/* eslint-disable react/no-unescaped-entities */
import { useInView } from "react-intersection-observer";
import wallpaper_compressed from "../assets/images/green-hero-min.jpeg";
import whatsapp_icon from "../assets/icons/whatsapp-icon(min).png";
import facebook_icon from "../assets/icons/facebook-icon.png";
import google_icon from "../assets/icons/google-icon.png";

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

      <div className="px-4 text-white font-semibold xsm:text-sm md:text-2xl absolute bottom-4 left-0 right-0 flex flex-col   items-center xsm:justify-center md:justify-end ">
        <div className="flex gap-6 items-center">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?text=Catherine%20Fabrici%20sophrologue%0A%2B33%206%2063%2033%2098%2090%0A%0A%20https%3A%2F%2Fwww.google.com%2Fsearch%3Fsca_esv%3D012f470da02fcbcc%26rlz%3D1C5MACD_enKR1112KR1112%26sxsrf%3DADLYWIIBPgPLocTcbR_GERe8_Xh8O-BGTw%253A1719974367143%26q%3DCatherine%2520Fabrici%2520sophrologue%26ludocid%3D4654534152184720797%26ibp%3Dgwp%253B0%252C7%26lsig%3DAB86z5U5-JG3dJvqthnn6AKB5pDp%26kgs%3D24f9fbd96ccada64%26shndl%3D-1%26shem%3Dlsde%252Clsp%26source%3Dsh%252Fx%252Floc%252Fact%252Fm1%252F1"
            rel="noreferrer"
          >
            <img
              src={whatsapp_icon}
              alt="whatsapp icon"
              className=" xsm:size-8 md:size-12"
            />
          </a>

          <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fg.co%2Fkgs%2FmjUhKQ9"
            rel="noreferrer"
          >
            <img
              src={facebook_icon}
              alt="facebook icon"
              className=" xsm:size-8 md:size-12"
            />
          </a>

          <a target="_blank" href="https://g.co/kgs/KWGHiei" rel="noreferrer">
            <img
              src={google_icon}
              alt="google icon"
              className=" xsm:size-8 md:size-12"
            />
          </a>
        </div>
      </div>
    </aside>
  );
};
