import { FaCheck } from "react-icons/fa6";

export const SophologieBox = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] p-10 flex flex-col justify-evenly  relative top-0 right-0 left-0 bottom-0 ">
      <h1 className="text-center text-4xl mb-8 h-[80px] border-black border flex items-center justify-center font-bold">
        Qu'est-ce que la sophrologie ?
      </h1>
      <ul className="h-full  ">
        <li>
          C'est avant tout une technique simple, une méthode de développement
          personnel. Ce sont des exercices à base de respiration qui vont vous
          permettre dans un premier temps une reconnexion au corps et vous
          amener vers une détente musculaire et mentale.
        </li>
        <br />
        <li>
          LA SOPHROLOGIE EST UNE PÉDAGOGIE, UN APPRENTISSAGE dont vous êtes le
          principal ACTEUR.
        </li>
        <br />
        <li>
          En pratiquant vous deviendrez autonome et vous serez capable de
          répondre à vos besoins.
        </li>

        <ul className="ml-5 my-2">
          <li className="flex items-center">
            <FaCheck /> Elle permet d'établir un équilibre, une harmonie entre
            le corps et l'esprit afin d'augmenter tous vos potentiels.
          </li>
          <li>Vous prendrez conscience de vos propres ressources.</li>
          <li>
            La pratique des exercices de SOPHROLOGIE vous permettra de trouver
            un bien-être au quotidien selon l'objectif que nous aurons défini
            ensemble.
          </li>
        </ul>
        <br />
        <li>
          C'est dans cette suite logique, que j'ai quitté sans nostalgie mais
          avec fierté les cours de récré, les cartables, pour devenir à mon tour
          sophrologue.
        </li>
        <br />
        <li>
          Je suis diplômée du{" "}
          <span className="font-underline">Centre Evolution Formation</span>{" "}
          dirigé par Patricia Penot, une ancienne élève du Professeur Caycedo,
          le créateur de la sophrologie.
        </li>
        <br />
        <li>
          Cet institut a obtenu le label <span>Veryselect</span>, une
          certification de qualité prestigieuse pour les organismes de
          formation.
        </li>
        <br />
        <li>
          Aujourd'hui, je suis Sophrologue Praticienne, certifiée RCNP niveau
          III. le RNCP niveau III garantie une formation certifiée par la
          Société Française de sophrologie (2 ans d'études ).
        </li>
        <br />
        <li>
          L'enregistrement au RNCP du titre de{" "}
          <span>Sophrologue Praticien</span> niveau III code NSF 330P.
        </li>
        <li>
          L'inscription au RNCP constitue un titre et une compétence reconnue
          pour l'exercice de la profession en France.
        </li>
        <br />
        <li>
          Membre de la <span>Société Française de Sophrologie</span>, je
          respecte <span>le code de déontologie</span> de la profession qui vous
          assure confidentialité et intégrité.
        </li>
      </ul>
    </div>
  );
};
