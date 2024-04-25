import img from "../assets/sophrologie-compress.jpeg";
import benefitWallpaper from "../assets/benefit_wallpaper.jpeg";

export const Sophologie = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto flex flex-col gap-10 md:p-6 xsm:py-20 xsm:px-6  ">
      <div className=" mx-auto">
        <img src={img} alt="cancer support" className="rounded-full" />
      </div>
      <h1 className="xsm:text-[24px] md:text-[48px] text-center font-bold">
        Qu'est-ce que la sophrologie ?
      </h1>
      <div className="flex flex-col gap-4 xsm:text-[18px] md:text-[24px]  ">
        <p>
          C'est avant tout une technique simple, une méthode de développement
          personnel. Ce sont des exercices à base de respiration qui vont vous
          permettre dans un premier temps une reconnexion au corps et vous
          amener vers une détente musculaire et mentale.
        </p>
        <p>
          LA SOPHROLOGIE EST UNE PÉDAGOGIE, UN APPRENTISSAGE dont vous êtes le
          principal{" "}
          <span className="underline font-bold text-yellow-400">ACTEUR</span>.
        </p>
        <div className="p-4 bg-blue-400 text-white rounded-lg">
          <p className="font-[700]">
            En pratiquant vous deviendrez autonome et vous serez capable de
            répondre à vos besoins concrètement dans votre vie quotidienne. A
            chaque séances nous travaillons différentes capacités en vous.
          </p>
        </div>
        <p>
          Elle permet d'établir un équilibre, une harmonie entre le corps et
          l'esprit afin d'augmenter tous vos potentiels.
        </p>
        <p>Vous prendrez conscience de vos propres ressources.</p>
        <p>
          La pratique des exercices de SOPHROLOGIE vous permettra de trouver un
          bien-être au quotidien selon l'objectif que nous aurons défini
          ensemble.
        </p>
        <div className="flex xsm:flex-col md:flex-row gap-4">
          <div className="bg-red-200 p-4 space-y-4">
            <h2 className="font-bold xsm:text-[28px] md:text-[38px]  text-gray-700 rounded-lg ">
              LES IDÉES FAUSSES SUR LA SOPHROLOGIE :
            </h2>
            <p>Ce n'est pas de la psychologie.</p>
            <p>Ce n'est pas de l'hypnose.</p>
            <p>Elle n'est pas réservée uniquement aux personnes malades.</p>
          </div>
          <div className="bg-green-200 p-4 space-y-4">
            <h2 className="font-bold xsm:text-[28px] md:text-[38px]  text-gray-700 rounded-lg ">
              CE QUI EST VRAI :
            </h2>
            <p>Elle vous permettra de voir la vie de façon plus positive.</p>
            <p>
              Les séances sont adaptées à votre personnalité et à vos besoins.
            </p>
          </div>
        </div>
        <div className="p-4 bg-teal-300 rounded-lg">
          <h2 className="font-bold xsm:text-[28px] md:text-[38px]  text-gray-700  ">
            L'efficacité est prouvée scientifiquement.
          </h2>{" "}
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
        </div>
        <div className="p-4 bg-yellow-200 rounded-lg">
          <h2 className="font-bold xsm:text-[28px] md:text-[38px]  text-gray-700  ">
            La sophrologie, avec ses exercices appropriés, vous donnera les clés
            pour mieux gérer au quotidien :
          </h2>
          <p>- La gestion du stress et des émotions.</p>
          <p>- Le burn-out ou le bore-out.</p>
          <p>- Apprendre à lâcher prise.</p>
          <p>
            - Retrouver un sommeil réparateur, la confiance en soi, la
            concentration.
          </p>
          <p>- Accompagnement de la grossesse jusqu'à l'accouchement.</p>
          <p>- Se donner de l'énergie pour lutter contre la fatigue.</p>
          <p>
            - Pour la femme, vivre avec plus de sérénité la période de la
            ménopause.
          </p>
          <p>
            - La préparation mentale aux examens, compétitions sportives,
            entretiens professionnels.
          </p>
          <p>- Certaines maladies grave comme le cancer.</p>
          <p>- L'angoisse et l'anxiété, la dépression.</p>
          <p>- Les douleurs, les migraines, l'urticaire.</p>
          <p>- Stress lié aux changements : mariage, déménagement, décès.</p>
        </div>
        <div className="space-y-4">
          {" "}
          <h2 className="font-bold xsm:text-[28px] md:text-[38px]  text-gray-700  text-center">
            Les bienfaits que cela vous apportera :
          </h2>{" "}
          <img
            src={benefitWallpaper}
            alt="benefits wallpaper"
            className="rounded-full w-[550px] ] mx-auto"
          />
          <p className="font-bold  ">
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
