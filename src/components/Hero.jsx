/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import profile from "../assets/catherine-fabrici.png";

export const Hero = () => {
  return (
    <div className="flex items-center  justify-evenly  p-5 my-auto ">
      <div className=" flex flex-col items-center">
        <div className=" flex flex-col items-center justify-evenly   mt-10">
          <div className="w-[500px] h-[400px] ml-5 bg-[rgba(255,255,255,0.9)] p-4 rounded-xl mt-4">
            <h2 className="font-bold text-center text-2xl p-4 rounded-xl">
              Catherine Fabrici
            </h2>{" "}
            <p className="text-sm  leading-loose">
              Dans une "autre vie", j'ai été enseignante : un métier merveilleux
              où, au fil des ans, j'ai pu aider des centaines d'enfants à
              acquérir leur autonomie et à prendre leur envol. J'ai ainsi pu
              développer auprès de plusieurs générations d'écoliers ma faculté à
              transmettre les savoirs, ma capacité à aider l'autre à apprendre,
              connaître, ressentir et analyser. Bref, des compétences
              pédagogiques pour aider les enfants à trouver et exploiter le
              meilleur d'eux-même...Enseigner aux petits et aux plus grands m'a
              également appris à cultiver patience, bienveillance et humilité...
              <button className="text-blue-500 font-bold">
                <Link>Read More</Link>
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4 ">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-center text-4xl font-bold p-2 rounded-xl underline mb-4">
            <Link> Qu'est-ce que la sophrologie ?</Link>
          </h2>
          <h2 className=" text-center text-4xl font-bold p-2 underline ">
            <Link> Qui suis-je ?</Link>
          </h2>
        </div>
        <ul className="flex flex-col justify-between items-center h-[300px] ">
          <li className="border  w-[200px] text-white font-semibold bg-[#267725]  rounded h-10 flex items-center justify-center hover:cursor-pointer">
            <Link>Sessions</Link>
          </li>
          <li className="bg-white w-[350px]  rounded-xl h-[50px] flex items-center justify-center">
            <Link> Sophrologie douleurs et cancer</Link>
          </li>
          <li className="bg-white w-[350px] rounded-xl h-[50px] flex items-center justify-center">
            <Link> L'enfant et l'adolescent </Link>
          </li>
          <li className="bg-white w-[350px] rounded -xl h-[50px] flex items-center justify-center">
            <Link> Le stress au travail </Link>
          </li>
          <li className="bg-white w-[350px] rounded-xl h-[50px] flex items-center justify-center">
            {" "}
            <Link> Hypnose Humaniste</Link>
          </li>
        </ul>
        {/* <p className=" text-black font-semibold  p-4 rounded-xl"></p> */}
      </div>
    </div>
  );
};
