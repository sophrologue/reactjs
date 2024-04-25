import img from "../../assets/cancer-compress.jpg";
export const CancerSession = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto">
      <h1 className="text-center text-6xl p-10">Sophrologie et cancer</h1>
      <div className=" xsm:w-[100vw] md:w-[40vw] px-10 sn mx-auto">
        <img src={img} alt="cancer support" />
      </div>
      `
      <div className="xsm:mx-2 md:mx-20 xsm:p-4 md:p-10 flex flex-col justify-evenly   ">
        <div className="flex flex-col gap-4 xsm:text-[18px] md:text-[24px]  ">
          <p>
            Parce que 350.000 personnes apprennent chaque année qu'elles
            souffrent d'un cancer la sophrologie peut aider et offre un
            accompagnement dans le parcours des soins de support pour les
            malades.
          </p>

          <p className="text-2xl text-large font-[700] py-2">
            En aucun cas la sophrologie ne guérit le cancer, elle ne se
            substitue pas au protocole de soin, ni aux traitements médicaux.
          </p>

          <p>
            Mais elle est reconnue, par le dernier Plan Cancer du ministère de
            la Santé, comme un soin oncologique de support.
          </p>

          <p>
            « Face au cancer, on fait confiance à son oncologue et on peut aussi
            être actif pendant son traitement. »
          </p>

          <p>
            De nombreux hôpitaux ont introduit la sophrologie dans leur
            établissement (Nantes, Paris etc ...)
          </p>

          <p className="text-2xl text-large font-[700] ">
            Atténuer les angoisses des traitements
          </p>

          <p>
            Les personnes souffrant de cancer appréhendent les traitements
            (chimiothérapie, radiothérapie), les effets secondaires très
            perturbants et envahissants ont des répercussions sur leur vie
            quotidienne.
          </p>

          <p>
            La sophrologie, par des exercices à base de respiration, de
            mouvements et d’images mentales va permettre de remettre du mieux
            être dans son quotidien, d’évacuer les angoisses, le stress, de
            diminuer les douleurs que génèrent les traitements.
          </p>

          <p>
            Diminuer la fatigue : On fait le plein d’énergie , on optimise et on
            valorise les traitements qui deviennent des alliés contre la
            maladie.
          </p>

          <p className="text-2xl text-large font-[700] ">
            Renforcer sa combativité
          </p>

          <p>
            Les traitements du cancer sont longs. Si, au début, les malades sont
            motivés, au fil des mois, des années, l’observance des traitements
            diminue. La sophrologie aide aussi à retrouver une détermination
            pour lutter contre la maladie.
          </p>

          <p>
            Un travail sur la restauration de l’image de soi, peut aussi être
            fait en sophrologie .Il s’agit d’un accompagnement en fonction des
            besoins de la personne et adaptée à sa maladie .
          </p>

          <p className="text-2xl text-large font-[700]">
            J’ADAPTE LES SÉANCES AUX BESOINS DE MES CLIENTS.
          </p>
        </div>
      </div>
    </div>
  );
};
