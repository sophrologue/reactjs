import profileImg from "../assets/catherine-fabrici.png";

export const Career = () => {
  return (
    <div className="flex flex-col justify-between mb-8  ">
      {/* <img src={profileImg} alt="profile img" className="h-[400px]   " /> */}

      <div className=" flex justify-center gap-10 p-6  ">
        <div className="flex flex-col border-4 border-white rounded-xl  gap-8 justify-center w-[300px] p-8 text-4xl bg-orange-400 text-white">
          <span className="font-[700] ">Catherine Fabrici</span>
          <span className="font=[400] text-[30px]">Sophrologue</span>
        </div>
        <img src={profileImg} alt="profile img" className="w-[300px]    " />
        {/* Catherine FABRICI - SOPHROLOGUE */}
        <ul className="flex flex-col  gap-6 p-6 text-[19px]  bg-orange-100 rounded-xl">
          {/* <li>Enfant / Adolescent / Adulte / Entreprise</li> */}
          <li>Sophrologie pour : Enfant / Adolescent / Adulte / Entreprise</li>
          <li>
            {/* Diplômée de Centre Evolution Formation Sophrologue Praticienne */}
            {/* Diplômée de Centre Evolution Formation Sophrologue Praticienne .
            Certifiée RNCP niveau III. */}
            Diplômée de Centre Evolution Formation Sophrologue Praticienne
            certifiée RNCP niveau III
          </li>
          <li>
            Sophrologie et entreprise : gestion du stress au travail et atelier
            de QVT.
          </li>
          <li>Praticienne en hypnose humaniste</li>
          {/* <li>Sophrologie pour adulte</li>
          <li>Sophrologie ludique pour les enfants</li>
          <li>Sophrologie et Entreprise</li>
          <li>Sophrologie et adolescents</li> */}
          {/* <li>Praticienne en hypnose humaniste</li>
          <li>
            L'accompagnement pour les cancers et les douleurs (fibromyalgie,
            endométriose, douleurs chroniques)
          </li>
          <li>
            Sophrologie et entreprise : gestion du stress au travail et ateleirs
            de QVT.
          </li>
          <li>Praticienne en hypnose</li>
          <li>
            Respect du code de déontologie de la profession qui vous assure
            confidentialité et intégrité.
          </li> */}

          {/* <li className="font-bold">
            Besoin d'un renseignement ou prendre rendez-vous : 06 63 33 98 90
          </li> */}
          {/* <p className="font-bold">catherinefabrici.sophrologue@orange.fr</p> */}
        </ul>
      </div>
    </div>
    // </div>
  );
};
