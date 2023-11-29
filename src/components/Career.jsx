import profileImg from "../assets/catherine-fabrici.png";

export const Career = () => {
  return (
    <div className="flex flex-col justify-between my-10 p-6 bg-orange-100  rounded-xl">
      {/* <img src={profileImg} alt="profile img" className="h-[400px]   " /> */}

      <div className=" flex lg:flex-row xsm:flex-col   justify-center gap-10 p-6  ">
        <div className="flex flex-col border-1 border-white rounded-xl  text-4xl   gap-8 justify-center lg:w-[300px] p-8  bg-orange-400 text-white">
          <span className="font-[700] ">Catherine Fabrici</span>
          <span className="font=[400] text-[30px]">Sophrologue</span>
        </div>
        <img src={profileImg} alt="profile img" className="w-[300px]    " />
        {/* Catherine FABRICI - SOPHROLOGUE */}
        <ul className="flex flex-col  gap-6 p-6 text-[19px]  rounded-xl">
          {/* <li>Enfant / Adolescent / Adulte / Entreprise</li> */}
          <li>Sophrologie pour : Enfant / Adolescent / Adulte / Entreprise</li>
          <li>
            Diplômée de Centre Evolution Formation Sophrologue Praticienne
            certifiée RNCP niveau III
          </li>
          <li>
            Sophrologie et entreprise : gestion du stress au travail et atelier
            de QVT.
          </li>
          <li>Praticienne en hypnose humaniste</li>
        </ul>
      </div>
    </div>
    // </div>
  );
};
