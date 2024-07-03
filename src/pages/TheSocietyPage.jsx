import societyImg from "../assets/thesocietyimg.jpeg";
import Title from "../components/Title";

export const TheSocietyPage = () => {
  return (
    <section className="p-10 ">
      <Title title="LITIGE – MEDIATION DE LA CONSOMMATION" align="center" />
      <div className="flex justify-center">
        <img src={societyImg} alt="society" />
      </div>
      <div className="space-y-4  max-w-[1250px] w-full mx-auto xsm:text-primary-body-mobile md:text-primary-body-tablet lg:text-primary-body">
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
  );
};
