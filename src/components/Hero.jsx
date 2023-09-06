/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import profileImg from "../assets/profile2.jpeg";

export const Hero = () => {
  return (
    <div className="flex items-center  justify-evenly   h-screen  p-4 my-auto">
      <div className=" flex flex-col items-center">
        <div className=" flex flex-col items-center justify-evenly   ">
          <div className="w-[600px] h-[450px] ml-5 bg-[rgba(255,255,255,0.9)] p-4 rounded-xl mt-4 ">
            <h2 className="font-bold text-center text-2xl p-4 rounded-xl">
              Catherine Fabrici
            </h2>{" "}
            <img
              src={profileImg}
              alt="profile img"
              width={100}
              className="float-left mr-4  rounded-xl"
            />
            <p className="text-sm leading-loose hover:brightness-110 duration-300">
              Dans une "autre vie", j'ai été enseignante : un métier merveilleux
              où, au fil des ans, j'ai pu aider des centaines d'enfants à
              acquérir leur autonomie et à prendre leur envol. J'ai ainsi pu
              développer auprès de plusieurs générations d'écoliers ma faculté à
              transmettre les savoirs, ma capacité à aider l'autre à apprendre,
              connaître, ressentir et analyser. Bref, des compétences
              pédagogiques pour aider les enfants
            </p>
            <p className="text-sm leading-loose hover:brightness-110 duration-300">
              à trouver et exploiter le meilleur d'eux-même...Enseigner aux
              petits et aux plus grands m'a également appris à cultiver
              patience, bienveillance et humilité...
              <button className="text-blue-500 font-bold">
                <Link>Read More</Link>
              </button>
            </p>
            <button className="flex items-center justify-center p-3 bg-blue-400 text-white font-bold mt-10 border mx-auto hover:brightness-110 duration-300 rounded-xl">
              <Link> Qui suis-je ?</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4 ">
        <div className="flex flex-col items-center mb-10"></div>
        <ul className="flex flex-col justify-between items-center h-[380px] ">
          <li className="hover:brightness-110 duration-300 cursor-pointer border  w-[250px] text-white font-semibold bg-emerald-500 text-xl  rounded-xl h-[50px] flex items-center justify-center hover:cursor-pointer">
            <Link>Sessions</Link>
          </li>
          <li className=" hover:bg-emerald-100  bg-white w-[400px] font-semibold  rounded-xl h-[60px] flex items-center justify-center hover:brightness-110 duration-300 cursor-pointer">
            <Link> Sophrologie douleurs et cancer</Link>
          </li>
          <li className="hover:bg-emerald-100  bg-white w-[400px] font-semibold  rounded-xl h-[60px] flex items-center justify-center hover:brightness-110 duration-300 cursor-pointer">
            <Link> L'enfant et l'adolescent </Link>
          </li>
          <li className="hover:bg-emerald-100   bg-white w-[400px] font-semibold  rounded-xl h-[60px] flex items-center justify-center hover:brightness-110 duration-300 cursor-pointer">
            <Link> Le stress au travail </Link>
          </li>
          <li className="hover:bg-emerald-100  bg-white w-[400px] font-semibold  rounded-xl h-[60px] flex items-center justify-center hover:brightness-110 duration-300 cursor-pointer">
            {" "}
            <Link> Hypnose Humaniste</Link>
          </li>
        </ul>
        {/* <p className=" text-black font-semibold  p-4 rounded-xl"></p> */}
      </div>
    </div>
  );
};
