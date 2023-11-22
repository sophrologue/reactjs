import img from "../../assets/cancer.jpg";
export const CancerSession = () => {
  // const background = {
  //   backgroundImage: `url(${backgroundImg})`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };
  return (
    <div>
      {/* <div className="flex flex-col" style={background}> */}
      {/* <SessionCategories /> */}`
      <h1 className="text-center text-6xl p-10">Sophrologie et cancer</h1>
      <div className="w-[40vw] px-10 mx-auto">
        <img src={img} alt="cancer support" />
      </div>
      `
      <div className="mx-20 bg-[rgba(255,255,255,0.8)] p-10 flex flex-col justify-evenly  relative top-0 right-0 left-0 bottom-0 ">
        <ul className="h-full  ">
          <li>
            Sophrologie et cancer Parce que 350.000 personnes apprennent chaque
            année qu'elles souffrent d'un cancer la sophrologie peut aider et
            offre un accompagnement dans le parcours des soins de support pour
            les malades.
          </li>
          <br />
          <li className="text-orange-600 font-bold ">
            En aucun cas la sophrologie ne guérit le cancer, elle ne se
            substitue pas au protocole de soin, ni aux traitements médicaux.
          </li>
          <br />
          <li>
            Mais elle est reconnue, par le dernier Plan Cancer du ministère de
            la Santé, comme un soin oncologique de support.
          </li>
          <br />
          <li>
            « Face au cancer, on fait confiance à son oncologue et on peut aussi
            être actif pendant son traitement. »
          </li>
          <br />
          <li>
            De nombreux hôpitaux ont introduit la sophrologie dans leur
            établissement (Nantes, Paris etc ...)
          </li>
          <br />
          <br />
          <li className="text-green-600 font-bold text-2xl">
            Atténuer les angoisses des traitements
          </li>
          <br />
          <li>
            Les personnes souffrant de cancer appréhendent les traitements
            (chimiothérapie, radiothérapie), les effets secondaires très
            perturbants et envahissants ont des répercussions sur leur vie
            quotidienne.
          </li>
          <br />
          <li>
            La sophrologie, par des exercices à base de respiration, de
            mouvements et d’images mentales va permettre de remettre du mieux
            être dans son quotidien, d’évacuer les angoisses, le stress, de
            diminuer les douleurs que génèrent les traitements.
          </li>
          <br />
          <li>
            <span className="text-green-600 font-semibold">
              Diminuer la fatigue : On fait le plein d’énergie
            </span>
            , on optimise et on valorise les traitements qui deviennent des
            alliés contre la maladie.
          </li>
          <br />
          <br />
          <li className="text-green-600 font-bold text-2xl">
            Renforcer sa combativité
          </li>
          <br />
          <li>
            Les traitements du cancer sont longs. Si, au début, les malades sont
            motivés, au fil des mois, des années, l’observance des traitements
            diminue. La sophrologie aide aussi à retrouver une détermination
            pour lutter contre la maladie
          </li>
          <br />
          <li>
            Un travail sur la restauration de l’image de soi, peut aussi être
            fait en sophrologie .Il s’agit d’un accompagnement en fonction des
            besoins de la personne et adaptée à sa maladie .
          </li>
          <br />
          <br />
          <li className="text-orange-600 font-bold text-xl">
            J’ADAPTE LES SÉANCES AUX BESOINS DE MES CLIENTS.
          </li>
          <br />
          <br />
          <li className="text-green-600 font-bold text-2xl">
            Sophrologie et douleur
          </li>
          <br />
          <li>
            La sophrologie va aider les malades à remettre du confort de vie
            dans leur quotidien, à apprendre à repérer et à anticiper la
            douleur, à atténuer les souffrances physiques et les souffrances du
            mental.
          </li>
          <br />
          <li>
            On va apprendre à remettre du calme dans le corps, de la détente, un
            sentiment positif . On va travailler sur le système nerveux.
          </li>
          <br />
          <br />
          <li className="text-orange-600 font-bold ">
            Le sophrologue va aider le malade à mieux gérer sa douleur :
            douleurs aigus, douleurs chroniques, fibromyalgie, endométriose...
          </li>
        </ul>
      </div>
    </div>
  );
};
