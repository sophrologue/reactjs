import groupIcon from "../assets/grommet-icons_group.svg";

export const PricePage = () => {
  return (
    <div className="flex flex-col my-5 w-screen xsm:px-10 h-full max-w-[70rem] mx-auto">
      <h1 className="text-4xl my-5 font-[700] text-center">Tarifs</h1>
      <div className="flex flex-col gap-4 xsm:text-[16px] md:text-[20px]">
        <div className="bg-blue-200 flex md:flex-row xsm:flex-col items-center  md:h-40 xsm:h-80 p-4 gap-6 rounded-lg">
          {" "}
          <img src={groupIcon} alt="" className="w-30" />
          <p className="rounded-lg w-full">
            Premier rendez-vous d'une heure trente pour adulte, enfant,
            adolescent au cours duquel nous poserons l'objectif de notre
            programme.
          </p>
          <p className="xsm:hidden md:block">|</p>
          <p className="font-bold text-[22px] xsm:w-full md:w-40">60 euros</p>
        </div>
        <div className="bg-green-200 flex md:flex-row xsm:flex-col items-center  md:h-40 xsm:h-80 p-4 gap-6 rounded-lg">
          {" "}
          <img src={groupIcon} alt="" className="w-30" />
          <p className="rounded-lg w-full">
            Enfant / Adolescent jusqu'à 12 ans : 50 euros pour une séance de
            30/40 minutes
          </p>
          <p className="xsm:hidden md:block">|</p>
          <p className="font-bold text-[22px] xsm:w-full md:w-40">50 euros</p>
        </div>
        <div className="bg-yellow-200 flex md:flex-row xsm:flex-col items-center  md:h-40 xsm:h-80 p-4 gap-6 rounded-lg">
          {" "}
          <img src={groupIcon} alt="" className="w-30" />
          <p className="rounded-lg w-full">
            Adolescent de 13 ans à 17 ans : 55 Euros pour une séance d'une 1h.
          </p>
          <p className="xsm:hidden md:block">|</p>
          <p className="font-bold text-[22px] xsm:w-full md:w-40">55 euros</p>
        </div>
        <div className="bg-purple-200 flex md:flex-row xsm:flex-col items-center  md:h-40 xsm:h-80 p-4 gap-6 rounded-lg">
          {" "}
          <img src={groupIcon} alt="" className="w-30" />
          <p className="rounded-lg w-full">
            Adultes : 55 euros pour une séance (1h).
          </p>
          <p className="xsm:hidden md:block">|</p>
          <p className="font-bold text-[22px] xsm:w-full md:w-40">55 euros</p>
        </div>
        <div className="bg-pink-200 flex md:flex-row xsm:flex-col items-center  md:h-40 xsm:h-80 p-4 gap-6 rounded-lg">
          {" "}
          <img src={groupIcon} alt="" className="w-30" />
          <p className="rounded-lg w-full">
            Entreprises et groupes : 15 à 25 euros par personne selon le nombre
            de participants.
          </p>
          <p className="xsm:hidden md:block">|</p>
          <p className="font-bold text-[22px]  xsm:w-full md:w-40">
            15~25 euros
          </p>
        </div>
        <div className="bg-red-200 flex md:flex-row xsm:flex-col items-center  md:h-40 xsm:h-80 p-4 gap-6 rounded-lg">
          {" "}
          <img src={groupIcon} alt="" className="w-30" />
          <p className="rounded-lg w-full">
            SEANCE HYPNOSE / 70 euros 2 séances à prévoir au minimum Dans le
            cadre d'un programme combiné la séance sera à 60 euros.
          </p>
          <p className="xsm:hidden md:block">|</p>
          <p className="font-bold text-[22px]  xsm:w-full md:w-40">
            60~70 euros
          </p>
        </div>

        {/*  */}
        {/*  */}
        {/*  */}
      </div>
    </div>
  );
};
