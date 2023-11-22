import profileImg from "../assets/catherine-fabrici.png";

export const Career = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] p-10 flex flex-col justify-evenly  relative top-0 right-0 left-0 bottom-0 ">
      <h1 className="text-center text-4xl mb-8 h-[80px] border-black border flex items-center justify-center font-bold">
        Catherine FABRICI - SOPHROLOGUE
      </h1>
      <div className="flex items-center justify-evenly">
        <ul className="h-full  ">
          <li>Enfant / Adolescent / Adulte / Entreprise</li>
          <br />
          <li>
            Diplômée de Centre Evolution Formation Sophrologue Praticienne
          </li>
          <br />
          <li>Certifiée RNCP niveau III.</li>
          <br />
          <li>
            Spécialités : Sophrologie ludique pour les enfants - Sophrologie et
            Entreprise
          </li>
          <br />
          <li>Sophrologie et adolescents</li>
          <br />
          <li>
            Cancer et douleur (fibromyalgie, endométriose, douleurs chroniques)
          </li>
          <br />
          <li>Sophrologie et cancer</li>
          <br />
          <li>Sophrologie et entreprise</li>
          <li>Membre de la Société Française de Sophrologie</li>
          <br />
          <li>Praticienne en hypnose</li>
          <br />
          <li>
            Respect du code de déontologie de la profession qui vous assure
            confidentialité et intégrité.
          </li>
          <br />
          <li className="font-bold">
            Pour prendre rendez-vous : 06 63 33 98 90 ou
            catherinefabrici.sophrologue@orange.fr
          </li>
        </ul>
        <img src={profileImg} alt="profile img" className="w-[400px]" />
      </div>
    </div>
  );
};
