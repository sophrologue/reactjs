import img from "../assets/sophrologie-compress.jpeg";

export const Sophologie = () => {
  return (
    <div className="flex flex-col overflow-y-hidden">
      <h1 className="text-4xl text-center p-10 font-[700]">
        Qu'est-ce que la sophrologie ?
      </h1>
      <div className="w-[40vw] px-10 mx-auto">
        <img src={img} alt="cancer support" />
      </div>

      <div className="mx-20 p-10 flex flex-col justify-evenly  relative top-0 right-0 left-0 bottom-0 ">
        <div className="flex flex-col gap-4 text-[18px]  ">
          <p>
            C'est avant tout une technique simple, une méthode de développement
            personnel. Ce sont des exercices à base de respiration qui vont vous
            permettre dans un premier temps une reconnexion au corps et vous
            amener vers une détente musculaire et mentale.
          </p>
          <p>
            LA SOPHROLOGIE EST UNE PÉDAGOGIE, UN APPRENTISSAGE dont vous êtes le
            principal ACTEUR.
          </p>
          <p className="font-[700]">
            En pratiquant vous deviendrez autonome et vous serez capable de
            répondre à vos besoins concrètement dans votre vie quotidienne. A
            chaque séances nous travaillons différentes capacités en vous.
          </p>
          <p>
            Elle permet d'établir un équilibre, une harmonie entre le corps et
            l'esprit afin d'augmenter tous vos potentiels.
          </p>
          <p>Vous prendrez conscience de vos propres ressources.</p>
          <p>
            La pratique des exercices de SOPHROLOGIE vous permettra de trouver
            un bien-être au quotidien selon l'objectif que nous aurons défini
            ensemble.
          </p>
          <p className="font-bold text-4xl py-5  text-gray-700  rounded-xl ">
            LES IDÉES FAUSSES SUR LA SOPHROLOGIE :
          </p>
          <p>Ce n'est pas de la psychologie.</p>
          <p>Ce n'est pas de l'hypnose.</p>
          <p>Elle n'est pas réservée uniquement aux personnes malades.</p>
          <p className="font-bold text-4xl py-5  text-gray-700  rounded-xl ">
            CE QUI EST VRAI :
          </p>
          <p>Elle vous permettra de voir la vie de façon plus positive.</p>
          <p>
            Les séances sont adaptées à votre personnalité et à vos besoins.
          </p>
          <p className="font-bold text-4xl py-5  text-gray-700  rounded-xl ">
            L'efficacité est prouvée scientifiquement.
          </p>{" "}
          <p>Les exercices de respiration amènent calme et détente.</p>
          <p>
            La sophrologie est une pédagogie positive, elle vous permettra de
            retrouver le bonheur de vivre
            <span className="font-[500]">avec légèreté</span> tout simplement.
          </p>
          <p>
            Elle peut être un complément d'une thérapie avec un psychologue ou
            psychanalyste.
          </p>
          <p>Elle est prise en charge par certaines mutuelles.</p>
          <p className="font-bold text-4xl py-5  text-gray-700  rounded-xl ">
            La sophrologie, avec ses exercices appropriés, vous donnera les clés
            pour mieux gérer au quotidien :
          </p>
          <p>La gestion du stress et des émotions.</p>
          <p>Le burn-out ou le bore-out.</p>
          <p>Apprendre à lâcher prise.</p>
          <p>
            Retrouver un sommeil réparateur, la confiance en soi, la
            concentration.
          </p>
          <p>Accompagnement de la grossesse jusqu'à l'accouchement.</p>
          <p>Se donner de l'énergie pour lutter contre la fatigue.</p>
          <p>
            Pour la femme, vivre avec plus de sérénité la période de la
            ménopause.
          </p>
          <p>
            La préparation mentale aux examens, compétitions sportives,
            entretiens professionnels.
          </p>
          <p>Certaines maladies grave comme le cancer.</p>
          <p>L'angoisse et l'anxiété, la dépression.</p>
          <p>Les douleurs, les migraines, l'urticaire.</p>
          <p>Stress lié aux changements : mariage, déménagement, décès.</p>
          <p className="font-bold text-4xl py-5  text-gray-700  rounded-xl ">
            Les bienfaits que cela vous apportera :
          </p>
          <p>
            une meilleure connaissance de soi, un bien-être, une détente
            profonde, une harmonie entre le corps et l'esprit, un renforcement
            de ses capacités corporelles, de sa confiance en soi, une
            authenticité avec soi et les autres, une meilleure relation avec les
            autres, un renforcement du positif dans sa vie, une plus grande
            conscience de soi-même et de son existence.
          </p>
        </div>
      </div>
    </div>
  );
};
