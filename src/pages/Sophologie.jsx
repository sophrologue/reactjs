import img from "../assets/sophrologie.jpeg";

export const Sophologie = () => {
  return (
    <div className="flex flex-col overflow-y-hidden">
      <h1 className="text-center text-4xl p-10 font-[700]">
        Qu'est-ce que la sophrologie ?
      </h1>
      <div className="w-[60vw] px-10 mx-auto">
        <img src={img} alt="cancer support" />
      </div>

      <div className="mx-20 p-10 flex flex-col justify-evenly  relative top-0 right-0 left-0 bottom-0 ">
        <ul className="flex flex-col gap-4 text-[18px]  ">
          <li>
            C'est avant tout une technique simple, une méthode de développement
            personnel. Ce sont des exercices à base de respiration qui vont vous
            permettre dans un premier temps une reconnexion au corps et vous
            amener vers une détente musculaire et mentale.
          </li>

          <li>
            LA SOPHROLOGIE EST UNE PÉDAGOGIE, UN APPRENTISSAGE dont vous êtes le
            principal ACTEUR.
          </li>

          <li className="font-[700]">
            En pratiquant vous deviendrez autonome et vous serez capable de
            répondre à vos besoins concrètement dans votre vie quotidienne.A
            chaque séances nous travaillons différentes capacités en vous.
          </li>

          <li>
            Elle permet d'établir un équilibre, une harmonie entre le corps et
            l'esprit afin d'augmenter tous vos potentiels.
          </li>
          <li>Vous prendrez conscience de vos propres ressources.</li>
          <li>
            La pratique des exercices de SOPHROLOGIE vous permettra de trouver
            un bien-être au quotidien selon l'objectif que nous aurons défini
            ensemble.
          </li>

          <li className="text-2xl text-large font-[700] py-2">
            LES IDÉES FAUSSES SUR LA SOPHROLOGIE :
          </li>

          <li>Ce n'est pas de la psychologie.</li>

          <li>Ce n'est pas de l'hypnose.</li>

          <li>Elle n'est pas réservée uniquement aux personnes malades.</li>

          <li className="text-2xl text-large font-[700] py-2">
            CE QUI EST VRAI :
          </li>

          <li>Elle vous permettra de voir la vie de façon plus positive.</li>

          <li>
            Les séances sont adaptées à votre personnalité et à vos besoins.
          </li>
          <li>
            <li className="text-teal-500 font-[700] py-2">
              L'efficacité est prouvée scientifiquement.
            </li>{" "}
            Les exercices de respiration amènent calme et détente.
          </li>

          <li>
            La sophrologie est une pédagogie positive, elle vous permettra de
            retrouver le bonheur de vivre{" "}
            <li className="font-[500]">avec légèreté</li> tout simplement.
          </li>
          <li>
            Elle peut être un complément d'une thérapie avec un psychologue ou
            psychanalyste.
          </li>
          <li>Elle est prise en charge par certaines mutuelles.</li>
          <li className="text-2xl font-[700] py-2">
            La sophrologie, avec ses exercices appropriés, vous donnera les clés
            pour mieux gérer au quotidien :
          </li>
          <li>La gestion du stress et des émotions.</li>
          <li>Le burn-out ou le bore-out.</li>
          <li>Apprendre à lâcher prise.</li>
          <li>
            Retrouver un sommeil réparateur, la confiance en soi, la
            concentration.
          </li>
          <li>Accompagnement de la grossesse jusqu'à l'accouchement.</li>
          <li>Se donner de l'énergie pour lutter contre la fatigue.</li>
          <li>
            Pour la femme, vivre avec plus de sérénité la période de la
            ménopause.
          </li>
          <li>
            La préparation mentale aux examens, compétitions sportives,
            entretiens professionnels.
          </li>
          <li>Certaines maladies grave comme le cancer.</li>
          <li>L'angoisse et l'anxiété, la dépression.</li>
          <li>Les douleurs, les migraines, l'urticaire.</li>
          <li>Stress lié aux changements : mariage, déménagement, décès.</li>
          <li className="text-2xl font-[700] py-2">
            Les bienfaits que cela vous apportera :
          </li>
          <li>une meilleure connaissance de soi,</li>
          <li>
            un bien-être, une détente profonde, une harmonie entre le corps et
            l'esprit,
          </li>
          <li>
            un renforcement de ses capacités corporelles, de sa confiance en
            soi,
          </li>
          <li>une authenticité avec soi et les autres,</li>
          <li>une meilleure relation avec les autres,</li>
          <li>un renforcement du positif dans sa vie,</li>
          <li>une plus grande conscience de soi-même et de son existence.</li>
        </ul>
      </div>
    </div>
  );
};
