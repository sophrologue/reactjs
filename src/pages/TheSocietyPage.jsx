import societyImg from "../assets/thesocietyimg.jpeg";

export const TheSocietyPage = () => {
  return (
    <section className="w-screen mb-[200px] xsm:px-10 h-screen max-w-[70rem] mx-auto ">
      <h1 className="text-4xl my-5 font-[700] text-center">
        LITIGE – MEDIATION DE LA CONSOMMATION
      </h1>
      <div className="flex justify-center">
        <img src={societyImg} alt="society" />
      </div>
      <div className="flex flex-col gap-4">
        {" "}
        <p>
          En cas de litige entre le Client et l’entreprise, ceux-ci
          s’efforceront de le résoudre à l’amiable.(le Client adressera une
          réclamation écrite auprès du professionnel ou, le cas échéant, auprès
          du Service Relations Clientèle du professionnel).
        </p>
        <p>
          A défaut d’accord amiable ou en l’absence de réponse du professionnel
          dans un délai raisonnable d’un (1) mois, le Client consommateur au
          sens de l’article L.133-4 du code de la consommation a la possibilité
          de saisir gratuitement, si un désaccord subsiste, le médiateur
          compétent inscrit sur la liste des médiateurs établie par la
          Commission d’évaluation et de contrôle de la médiation de la
          consommation en application de l’article L.615-1 du code de la
          consommation, à savoir :
        </p>
        <p>La Société Médiation Professionnelle</p>
        <a
          href="http:www.mediateur-consommation-smp.fr"
          target="_blank"
          className="text-blue-800 hover:text-blue-600 hover:cursor-pointer font-semibold underline"
          rel="noreferrer"
        >
          www.mediateur-consommation-smp.fr
        </a>
        <p>24 rue Albert de Mun - 33000 Bordeaux</p>
      </div>
    </section>
    // <div className=" flex flex-col my-5 w-screen xsm:px-10 h-full max-w-[70rem] mx-auto">
    //   <h1 className="text-4xl my-5 font-[700] text-center">
    //     LITIGE – MEDIATION DE LA CONSOMMATION
    //   </h1>
    //   <div className="flex justify-center">
    //     <img src={societyImg} alt="society" />
    //   </div>
    //   <p>
    //     En cas de litige entre le Client et l’entreprise, ceux-ci s’efforceront
    //     de le résoudre à l’amiable.(le Client adressera une réclamation écrite
    //     auprès du professionnel ou, le cas échéant, auprès du Service Relations
    //     Clientèle du professionnel).
    //   </p>
    //   <p>
    //     A défaut d’accord amiable ou en l’absence de réponse du professionnel
    //     dans un délai raisonnable d’un (1) mois, le Client consommateur au sens
    //     de l’article L.133-4 du code de la consommation a la possibilité de
    //     saisir gratuitement, si un désaccord subsiste, le médiateur compétent
    //     inscrit sur la liste des médiateurs établie par la Commission
    //     d’évaluation et de contrôle de la médiation de la consommation en
    //     application de l’article L.615-1 du code de la consommation, à savoir :
    //   </p>
    //   <p>La Société Médiation Professionnelle</p>
    //   <a
    //     href="http://www.mediateur-consommation-smp.fr"
    //     target="_blank"
    //     className="text-blue-800 hover:text-blue-600 hover:cursor-pointer font-semibold underline"
    //     rel="noreferrer"
    //   >
    //     www.mediateur-consommation-smp.fr
    //   </a>
    //   <p>24 rue Albert de Mun - 33000 Bordeaux</p>
    // </div>
  );
};
