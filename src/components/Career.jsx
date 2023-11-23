import profileImg from "../assets/catherine-fabrici.png";

export const Career = () => {
  return (
    <div className="flex p-10 ">
      <img src={profileImg} alt="profile img" className="w-[600px]" />
      <div className=" flex flex-col  justify-center p-6 w-full ">
        <h1 className="h-16 text-center  text-3xl font-[700]">
          Catherine FABRICI - SOPHROLOGUE
        </h1>
        <ul className="flex flex-col text-[16px] gap-4 ">
          <li>Enfant / Adolescent / Adulte / Entreprise</li>
          <li>
            {/* Diplômée de Centre Evolution Formation Sophrologue Praticienne */}
            Diplômée de Centre Evolution Formation Sophrologue Praticienne .
            Certifiée RNCP niveau III.
          </li>
          <li>Sophrologie pour adulte</li>
          <li>Sophrologie ludique pour les enfants</li>
          <li>Sophrologie et Entreprise</li>
          <li>Sophrologie et adolescents</li>
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
          </li>

          {/* before */}
          {/* <li>Certifiée RNCP niveau III.</li>
          <li>
            Spécialités : Sophrologie ludique pour les enfants - Sophrologie et
            Entreprise
          </li>
          <li>Sophrologie et adolescents</li>
          <li>
            Cancer et douleur (fibromyalgie, endométriose, douleurs chroniques)
          </li>
          <li>Sophrologie et cancer</li>
          <li>Sophrologie et entreprise</li>
          <li>Membre de la Société Française de Sophrologie</li>
          <li>Praticienne en hypnose</li>
          <li>
            Respect du code de déontologie de la profession qui vous assure
            confidentialité et intégrité.
          </li> */}
          <li className="font-bold">
            Besoin d'un renseignement ou prendre rendez-vous : 06 63 33 98 90
            catherinefabrici.sophrologue@orange.fr
          </li>
        </ul>
      </div>
    </div>
    // </div>
  );
};
