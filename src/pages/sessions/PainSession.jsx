/* eslint-disable react/no-unescaped-entities */
import img from "../../assets/happiness-compress.jpg";

export const PainSession = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto">
      <h1 className="text-center text-6xl p-10">Sophrologie et douleur</h1>
      <div className=" xsm:w-[100vw] md:w-[40vw] px-10 sn mx-auto rounded-full">
        <img src={img} alt="cancer support" className="rounded-full" />
      </div>

      <div className="xsm:mx-2 md:mx-20 xsm:p-4 md:p-10 flex flex-col justify-evenly   ">
        <div className="flex flex-col gap-4 xsm:text-[18px] md:text-[24px]  ">
          <p>
            La sophrologie va aider les malades à remettre du confort de vie
            dans leur quotidien, à apprendre à repérer et à anticiper la
            douleur, à atténuer les souffrances physiques et les souffrances du
            mental.
          </p>
          <p>
            On va apprendre à remettre du calme dans le corps, de la détente, un
            sentiment positif . On va travailler sur le système nerveux.
          </p>
          <p>
            Le sophrologue va aider le malade à mieux gérer sa douleur :
            douleurs aigus, douleurs chroniques, fibromyalgie,
            endométriose...Comment se déroule une séance ?
          </p>
          <p>
            Ensemble, après un entretien d'environ 1H/1H30, nous déterminerons
            l'objectif de votre accompagnement. Les séances seront hebdomadaires
            d'une durée d'une heure environ. Chaque séance sera suivie d'un
            dialogue et d'une orientation pédagogique. L'objectif étant de
            pratiquer quotidiennement pour profiter pleinement des bénéfices de
            la SOPHROLOGIE.
          </p>
        </div>
      </div>
    </div>
  );
};
