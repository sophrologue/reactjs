import img from "../../assets/cancer-compress.jpg";
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
        <ul className="flex flex-col gap-4 text-[18px]  ">
          <li>
            Parce que 350.000 personnes apprennent chaque année qu'elles
            souffrent d'un cancer la sophrologie peut aider et offre un
            accompagnement dans le parcours des soins de support pour les
            malades.
          </li>

          <li className="text-2xl text-large font-[700] py-2">
            En aucun cas la sophrologie ne guérit le cancer, elle ne se
            substitue pas au protocole de soin, ni aux traitements médicaux.
          </li>

          <li>
            Mais elle est reconnue, par le dernier Plan Cancer du ministère de
            la Santé, comme un soin oncologique de support.
          </li>

          <li>
            « Face au cancer, on fait confiance à son oncologue et on peut aussi
            être actif pendant son traitement. »
          </li>

          <li>
            De nombreux hôpitaux ont introduit la sophrologie dans leur
            établissement (Nantes, Paris etc ...)
          </li>

          <li className="text-2xl text-large font-[700] py-2">
            Atténuer les angoisses des traitements
          </li>

          <li>
            Les personnes souffrant de cancer appréhendent les traitements
            (chimiothérapie, radiothérapie), les effets secondaires très
            perturbants et envahissants ont des répercussions sur leur vie
            quotidienne.
          </li>

          <li>
            La sophrologie, par des exercices à base de respiration, de
            mouvements et d’images mentales va permettre de remettre du mieux
            être dans son quotidien, d’évacuer les angoisses, le stress, de
            diminuer les douleurs que génèrent les traitements.
          </li>

          <li>
            Diminuer la fatigue : On fait le plein d’énergie , on optimise et on
            valorise les traitements qui deviennent des alliés contre la
            maladie.
          </li>

          <li className="text-2xl text-large font-[700] py-2">
            Renforcer sa combativité
          </li>

          <li>
            Les traitements du cancer sont longs. Si, au début, les malades sont
            motivés, au fil des mois, des années, l’observance des traitements
            diminue. La sophrologie aide aussi à retrouver une détermination
            pour lutter contre la maladie.
          </li>

          <li>
            Un travail sur la restauration de l’image de soi, peut aussi être
            fait en sophrologie .Il s’agit d’un accompagnement en fonction des
            besoins de la personne et adaptée à sa maladie .
          </li>

          <li className="text-2xl text-large font-[700] py-2">
            J’ADAPTE LES SÉANCES AUX BESOINS DE MES CLIENTS.
          </li>
        </ul>
      </div>
    </div>
  );
};
