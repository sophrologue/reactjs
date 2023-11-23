/* eslint-disable react/no-unescaped-entities */
import heroImg from "../assets/mountain-v-person.jpeg";
export const Hero = () => {
  return (
    <div
      className="relative  h-[36rem] bg-cover bg-center  bg-no-repeat "
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* <img src={heroImg} alt="hero img" className="w-full" /> */}
      <div className="absolute top-2 left-0 right-0 text-center  text-yellow-300 ">
        <p className="text-[120px] font-[700]"> Sophrologie</p>
        <p className="text-[40px] text-black ">
          " J'ai décidé d'être heureux. C'est bon pour la santé ! "
        </p>
        <p className="text-black font-[700] text-[20px]">- Voltaire</p>
      </div>
      {/* <h2 className="text-2xl text-center">Qui suis-je ?</h2>
      <img src={profileImg} alt="profile img" className="w-[120px]" />
      <p className="">
        Catherine Fabrici Sophrologue au MalesherboisDans une "autre vie", j'ai
        été enseignante : un métier merveilleux où, au fil des ans, j'ai pu
        aider des centaines d'enfants à acquérir leur autonomie et à prendre
        leur envol. J'ai ainsi pu développer auprès de plusieurs générations
        d'écoliers ma faculté à transmettre les savoirs, ma capacité à aider
        l'autre à apprendre, connaître, ressentir et analyser. Bref, des
        compétences pédagogiques pour aider les enfants à trouver et exploiter
        le meilleur d'eux-même...Enseigner aux petits et aux plus grands m'a
        également appris à cultiver patience, bienveillance et humilité.
      </p> */}

      {/* <div className="flex flex-col mt-4">
        <div className="flex flex-col items-center mb-10"></div>
        <ul className="flex flex-col justify-between items-center h-[380px]">
          <Link to="/sophrologie">
            <li className="hover:brightness-110 duration-300 cursor-pointer border w-[250px] text-white font-semibold bg-emerald-500 text-xl rounded-xl h-[50px] flex items-center justify-center hover:cursor-pointer">
              Sessions
          </li>
          </Link>
          <Link to="/sophrologie/pain_cancer">
            <li className="hover:bg-emerald-100 bg-white w-[400px] font-semibold rounded-xl h-[60px] flex items-center justify-center hover:brightness-110 duration-300 cursor-pointer">
              Sophrologie douleurs et cancer
            </li>
          </Link>
          <Link to="/sophrologie/child_adolescent">
            <li className="hover:bg-emerald-100 bg-white w-[400px] font-semibold rounded-xl h-[60px] flex items-center justify-center hover:brightness-110 duration-300 cursor-pointer">
              L'enfant et l'adolescen
            </li>
          </Link>
          <Link to="/sophrologie/work_stress">
            <li className="hover:bg-emerald-100 bg-white w-[400px] font-semibold rounded-xl h-[60px] flex items-center justify-center hover:brightness-110 duration-300 cursor-pointer">
              Le stress au travail
            </li>
          </Link>
          <Link to="/sophrologie/hyponysis">
            <li className="hover:bg-emerald-100 bg-white w-[400px] font-semibold rounded-xl h-[60px] flex items-center justify-center hover:brightness-110 duration-300 cursor-pointer">
              Hypnose Humaniste
            </li>
          </Link>
        </ul>
      </div> */}
    </div>
  );
};

// <h2 className="font-bold text-center text-2xl p-4 rounded-xl">
// Catherine Fabrici
// </h2>
// <img
// src={profileImg}
// alt="profile img"
// width={100}
// className="float-left mr-4 rounded-xl"
// />
// <p className="text-sm leading-loose hover:brightness-110 duration-300">
// Dans une "autre vie", j'ai été enseignante : un métier merveilleux
// où, au fil des ans, j'ai pu aider des centaines d'enfants à
// acquérir leur autonomie et à prendre leur envol. J'ai ainsi pu
// développer auprès de plusieurs générations d'écoliers ma faculté à
// transmettre les savoirs, ma capacité à aider l'autre à apprendre,
// connaître, ressentir et analyser. Bref, des compétences
// pédagogiques pour aider les enfants à trouver et exploiter le
// meilleur d'eux-même...Enseigner aux petits et aux plus grands m'a
// également appris à cultiver patience, bienveillance et humilité...
// <button className="text-blue-500 font-bold">
//   <Link to="/about">Read More</Link>
// </button>
// </p>
// <button className="flex items-center justify-center p-3 bg-blue-400 text-white font-bold mt-10 border mx-auto hover:brightness-110 duration-300 rounded-xl">
// <Link to="/about">Qui suis-je?</Link>
// </button>
