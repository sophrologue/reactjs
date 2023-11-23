/* eslint-disable react/no-unescaped-entities */
import img from "../../assets/happiness.jpg";

export const PainSession = () => {
  // const background = {
  //   backgroundImage: `url(${backgroundImg})`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };
  return (
    <div>
      {/* <div className="flex flex-col" style={background}> */}
      {/* <SessionCategories /> */}
      <h1 className="text-center text-6xl p-10">Sophrologie et douleur</h1>
      <div className="w-[40vw] px-10 mx-auto">
        <img src={img} alt="cancer support" />
      </div>

      <div className="mx-20 bg-[rgba(255,255,255,0.8)] p-10 flex flex-col justify-evenly  relative top-0 right-0 left-0 bottom-0 ">
        <ul className="flex flex-col gap-4 text-[18px]  ">
          <li>
            La sophrologie va aider les malades à remettre du confort de vie
            dans leur quotidien, à apprendre à repérer et à anticiper la
            douleur, à atténuer les souffrances physiques et les souffrances du
            mental.
          </li>
          <li>
            On va apprendre à remettre du calme dans le corps, de la détente, un
            sentiment positif . On va travailler sur le système nerveux.
          </li>
          <li>
            Le sophrologue va aider le malade à mieux gérer sa douleur :
            douleurs aigus, douleurs chroniques, fibromyalgie,
            endométriose...Comment se déroule une séance ?
          </li>
          <li>
            Ensemble, après un entretien d'environ 1H/1H30, nous déterminerons
            l'objectif de votre accompagnement. Les séances seront hebdomadaires
            d'une durée d'une heure environ. Chaque séance sera suivie d'un
            dialogue et d'une orientation pédagogique. L'objectif étant de
            pratiquer quotidiennement pour profiter pleinement des bénéfices de
            la SOPHROLOGIE.
          </li>
        </ul>
      </div>
    </div>
  );
};
