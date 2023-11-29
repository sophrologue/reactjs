export const ContactPage = () => {
  return (
    <div className=" flex flex-col my-5 w-screen xsm:px-10 h-screen max-w-[70rem] mx-auto">
      <h1 className="text-4xl my-5 font-[700]">Me Contacter</h1>
      <ul className="flex flex-col gap-4 xsm:text-[14px] sm:text-[18px]  ">
        <li>
          Je reçois à mon cabinet du lundi au vendredi de 10h00 à 20h00 sauf le
          jeudi sur rendez-vous uniquement.
        </li>
        <li>
          Je peux proposer des ateliers pour 5 à 6 personnes sur un thème
          choisi.
        </li>
        <li>
          Je peux également me déplacer à votre domicile pour les personnes
          âgées, handicapées, invalides.
        </li>
        <li>Par E-mail : catherinefabrici.sophrologue@orange.fr</li>
        <li>Au téléphone : 0663339890</li>
        <li>
          Mon adresse : 6 rue de la Martillière 45330, Malesherbes, France
        </li>
        <li className="font-700">
          Possibilité de téléconsultations et de séances en visio avec Skype,
          Zoom, Discord. N'hésitez pas à m'appeler pour plus d'informations.
        </li>
      </ul>
    </div>
  );
};
