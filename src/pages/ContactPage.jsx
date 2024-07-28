import homeIcon from "../assets/home_icon.svg";
import phoneIcon from "../assets/phone_icon.svg";
import emailIcon from "../assets/email_icon.svg";
import webcamIcon from "../assets/bi_webcam.svg";
import disabledIcon from "../assets/tabler_disabled.svg";
import groupIcon from "../assets/grommet-icons_group.svg";
import timeIcon from "../assets/mdi_clock-outline.svg";

import "react-lazy-load-image-component/src/effects/blur.css";

export const ContactPage = () => {
  return (
    <section className="flex flex-col gap-10 ">
      <div className="xsm:p-4 md:p-10  max-w-[1250px] w-full mx-auto  flex h-full flex-wrap justify-center xsm:flex-col md:flex-row  xsm:gap-10 md:gap-10 xsm:text-primary-body-mobile md:text-primary-body-tablet lg:text-primary-body  ">
        <div className="relative  xsm:w-full md:w-80 xsm:h-40 md:h-52  bg-blue-300  rounded-lg p-4 flex flex-col gap-4 items-center justify-center">
          <div className=" absolute -top-8  bg-blue-400 md:w-16 xsm:w-14 md:h-16 xsm:h-14 rounded-full flex items-center justify-center">
            <img src={timeIcon} alt="" className="xsm:w-10 md:w-10" />
          </div>
          <p className="text-center text-white">
            Je reçois à mon cabinet du lundi au vendredi de 10h00 à 20h00 sauf
            le jeudi sur rendez-vous uniquement.
          </p>
        </div>
        <div className="relative  xsm:w-full md:w-80 xsm:h-40 md:h-52   bg-orange-300 rounded-lg p-4 flex flex-col gap-4 items-center justify-center">
          <div className=" absolute -top-8  bg-orange-400 md:w-16 xsm:w-14 md:h-16 xsm:h-14 rounded-full flex items-center justify-center">
            <img src={groupIcon} alt="" className="xsm:w-10 md:w-10" />
          </div>
          <p className="text-center text-white">
            Je peux proposer des ateliers pour 5 à 6 personnes sur un thème
            choisi.
          </p>
        </div>
        <div className="relative  xsm:w-full md:w-80 xsm:h-40 md:h-52    bg-green-300  rounded-lg p-4 flex flex-col gap-4 items-center justify-center">
          <div className=" absolute -top-8  bg-green-400 md:w-16 xsm:w-14 md:h-16 xsm:h-14 rounded-full flex items-center justify-center">
            <img src={disabledIcon} alt="" className="xsm:w-10 md:w-10" />
          </div>
          <p className="text-center text-white">
            Je peux également me déplacer à votre domicile pour les personnes
            âgées, handicapées, invalides.
          </p>
        </div>
        <div className="relative  xsm:w-full md:w-80 xsm:h-40 md:h-52    bg-red-300 rounded-lg p-4 flex flex-col gap-4 items-center justify-center">
          <div className=" absolute -top-8  bg-red-400 md:w-16 xsm:w-14 md:h-16 xsm:h-14 rounded-full flex items-center justify-center">
            <img src={emailIcon} alt="" className="xsm:w-10 md:w-10" />
          </div>
          <p className="text-center text-white">
            Par E-mail catherinefabrici.sophrologue {""}@orange.fr
          </p>
        </div>
        <div className="relative  xsm:w-full md:w-80 xsm:h-40 md:h-52    bg-yellow-300 rounded-lg p-4 flex flex-col gap-4 items-center justify-center">
          <div className=" absolute -top-8  bg-yellow-400 md:w-16 xsm:w-14 md:h-16 xsm:h-14 rounded-full flex items-center justify-center">
            <img src={phoneIcon} alt="" className="xsm:w-10 md:w-10" />
          </div>
          <p className="text-center text-white">Au téléphone 0663339890</p>
        </div>
        <div className="relative  xsm:w-full md:w-80 xsm:h-40 md:h-52    bg-sky-300 rounded-lg p-4 flex flex-col gap-4 items-center justify-center">
          <div className=" absolute -top-8  bg-sky-400 md:w-16 xsm:w-14 md:h-16 xsm:h-14 rounded-full flex items-center justify-center">
            <img src={homeIcon} alt="" className="xsm:w-10 md:w-10" />
          </div>
          <p className="text-center text-white">
            Mon adresse : 6 rue de la Martillière 45330, Malesherbes, France
          </p>
        </div>
        <div className="relative xsm:w-full md:w-[840px] xsm:h-40 md:h-52    bg-orange-600 rounded-lg p-4 flex flex-col gap-4 items-center justify-center">
          <div className=" absolute -top-8  bg-orange-500 md:w-16 xsm:w-14 md:h-16 xsm:h-14 rounded-full flex items-center justify-center">
            <img src={webcamIcon} alt="" className="xsm:w-10 md:w-10" />
          </div>
          <p className="text-center text-white">
            Possibilité de téléconsultations et de séances en visio avec Skype,
            Zoom, Discord. <br /> N'hésitez pas à m'appeler pour plus
            d'informations.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};
