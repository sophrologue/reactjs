import profileImg from "../assets/catherine-fabrici.png";
import phone from "../assets/phone_icon.svg";
import home from "../assets/home_icon.svg";
import email from "../assets/email_icon.svg";
import { useState } from "react";

export const Career = () => {
  const [displayPhone, setDisplayPhone] = useState(false);
  const [displayEmail, setDisplayEmail] = useState(false);
  const [displyAddress, setDisplayAddress] = useState(false);
  return (
    <div className="flex flex-col justify-between  rounded-xl  max-w-[1200px] w-full mx-auto   -">
      {/* <img src={profileImg} alt="profile img" className="h-[400px]   " /> */}

      <div className=" flex lg:flex-row xsm:flex-col  justify-evenly    ">
        <div className="flex xsm:flex-col md:flex-row  mr-2 w-full  ">
          <div className="relative md:w-full xsm:w-full md:p-8 xsm:px-2 flex flex-col border-1 xsm:rounded-none md:rounded-lg text-4xl   xsm:gap-2 md:gap-8 justify-center   bg-sky-400 text-white">
            <h1 className="font-bold md:text-[42px]  xsm:text-[24px]">
              Catherine Fabrici
            </h1>
            <h2 className="font-bold md:text-[36px] xsm:text-[24px]">
              Sophrologue
            </h2>

            <div className="flex flex-col  md:gap-6 xsm:gap-0 md:text-[19px] xsm:text-[16px] ">
              <p>
                Sophrologie pour : Enfant / Adolescent / Adulte / Entreprise
              </p>
              <p>
                Diplômée de Centre Evolution Formation Sophrologue Praticienne
                certifiée RNCP niveau III
              </p>
              <p>
                Sophrologie et entreprise : gestion du stress au travail et
                ateper de QVT.
              </p>
              <p>Praticienne en hypnose humaniste</p>
            </div>

            <div className="absolute bottom-4 right-4 flex items-center gap-2 ">
              <div
                className="relative xsm:hidden md:block "
                onMouseOver={() => setDisplayPhone(true)}
                onClick={() => setDisplayPhone(true)}
                onMouseLeave={() => setDisplayPhone(false)}
              >
                {!displayPhone && (
                  <img
                    src={phone}
                    alt=""
                    className=" xsm:w-9 md:w-14 bg-blue-400 rounded-full xsm:p-2 md:p-4 hover:cursor-pointer hover:bg-green-400"
                  />
                )}
                {displayPhone && (
                  <div className=" w-full h-14 bg-blue-400 rounded-full xsm:p-2 md:p-4 hover:cursor-pointer hover:bg-green-400 text-[16px] flex items-center justify-center gap-2">
                    <p> Au téléphone</p> <p>0663339890</p>
                  </div>
                )}
              </div>
              <div
                className="relative xsm:hidden md:block "
                onMouseOver={() => setDisplayEmail(true)}
                onClick={() => setDisplayEmail(true)}
                onMouseLeave={() => setDisplayEmail(false)}
              >
                {!displayEmail && (
                  <img
                    src={email}
                    alt=""
                    className=" xsm:w-9 md:w-14 bg-blue-400 rounded-full xsm:p-2 md:p-4 hover:cursor-pointer hover:bg-green-400"
                  />
                )}
                {displayEmail && (
                  <div className="w-full h-14 bg-blue-400 rounded-full xsm:p-2 md:p-4 hover:cursor-pointer hover:bg-green-400 text-[16px] flex items-center justify-center gap-2">
                    <p>Par E-mail </p>{" "}
                    <p>catherinefabrici.sophrologue@orange.fr</p>
                  </div>
                )}
              </div>
              <div
                className="relative xsm:hidden md:block "
                onMouseOver={() => setDisplayAddress(true)}
                onClick={() => setDisplayAddress(true)}
                onMouseLeave={() => setDisplayAddress(false)}
              >
                {!displyAddress && (
                  <img
                    src={home}
                    alt=""
                    className=" xsm:w-9 md:w-14 bg-blue-400 rounded-full xsm:p-2 md:p-4 hover:cursor-pointer hover:bg-green-400"
                  />
                )}
                {displyAddress && (
                  <div className=" w-full h-14 bg-blue-400 rounded-full xsm:p-2 md:p-4 hover:cursor-pointer hover:bg-green-400 text-[16px] flex items-center justify-center gap-2">
                    <p> Mon adresse</p>{" "}
                    <p> 6 rue de la Martillière 45330, Malesherbes, France</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="xsm:hidden md:block  h-full">
          <img src={profileImg} alt="profile img" />
        </div>
      </div>
    </div>
    // </div>
  );
};
