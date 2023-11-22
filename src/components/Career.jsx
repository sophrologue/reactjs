import profileImg from "../assets/catherine-fabrici.png";

export const Career = () => {
  return (
    // <div className="bg-[rgba(255,255,255,0.9)] p-10 flex flex-col justify-evenly  relative top-0 right-0 left-0 bottom-0 "><

    <div className="flex h-[40rem] max-w-[95rem] px-[10rem] p-10 mx-auto">
      <img src={profileImg} alt="profile img" />
      <div className=" flex flex-col bg-yellow-50 p-6">
        <h1 className="h-16 text-center  text-2xl font-[700]">
          Catherine FABRICI - SOPHROLOGUE
        </h1>
        <ul className="flex flex-col text-[16px] gap-2 ">
          <li>Enfant / Adolescent / Adulte / Entreprise</li>
          <li>
            {/* Diplômée de Centre Evolution Formation Sophrologue Praticienne */}
            Diplômée de Centre Evolution Formation Sophrologue Praticienne .
            Certifiée RNCP niveau III.
          </li>
          <li>Certifiée RNCP niveau III.</li>
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
          </li>
          <li className="font-bold">
            Pour prendre rendez-vous : 06 63 33 98 90 ou
            catherinefabrici.sophrologue@orange.fr
          </li>
        </ul>
      </div>
    </div>
    // </div>
  );
};
