/* eslint-disable react/no-unescaped-entities */
import img from "../../assets/images/happiness-min.jpg";
import Title from "../../components/Title";

export const PainSession = () => {
  const background = {
    backgroundImage: `url(${img}`,
  };
  return (
    <section>
      {" "}
      <div
        className="xsm:h-[20rem] md:h-[40rem] bg-cover bg-center bg-no-repeat"
        style={background}
      ></div>
      <div className="space-y-8 max-w-[1250px] w-full mx-auto xsm:p-4 md:p-10">
        <Title title="Sophrologie et douleur" align="center" />

        <div className="xsm:text-primary-body-mobile md:text-primary-body-tablet lg:text-primary-body space-y-4   ">
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
    </section>
  );
};
