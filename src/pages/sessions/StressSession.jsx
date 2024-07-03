import img from "../../assets/images/stress_at_work-min.jpg";
import Title from "../../components/Title";

export const StressSession = () => {
  const background = {
    backgroundImage: `url(${img}`,
  };
  return (
    <section>
      <div
        className="xsm:h-[20rem] md:h-[40rem] bg-cover bg-center bg-no-repeat"
        style={background}
      ></div>
      <div className="space-y-8 max-w-[1250px] w-full mx-auto xsm:p-4 md:p-10">
        <Title title="Le stress en entreprise" align="center" />
        <div className="xsm:text-primary-body-mobile md:text-primary-body-tablet lg:text-primary-body space-y-4   ">
          <p>
            Le stress professionnel peut avoir des conséquences sur la santé.
            Selon l'OMS (l'organisation mondiale pour la santé) le travail ne
            serait plus aussi bon pour notre santé. Tous les indicateurs sont au
            rouge. Les rapports et études qui se sont consacrés à ce sujet,
            démontrent que travailler rendrait plutôt malade et mettrait notre
            vie en danger.
          </p>

          <p>
            Les effets du stress au travail peuvent être d'ordre somatique,
            psychologique et émotionnel.
          </p>

          <p>
            Les troubles psychologiques : la perte de confiance en soi,
            diminution de l'estime de soi, surmenage, épuisement, baisse de la
            résistance, insomnie,...
          </p>

          <p>
            Les troubles émotionnels : dépression, anxiété, pessimisme, colère,
            nervosité, saute d'humeur, irritabilité, susceptibilité,..
          </p>

          <p>
            Le burn-out et le suicide en sont parfois les conséquences extrêmes.
          </p>

          <p className="text-2xl text-large font-[700] ">
            Que peut faire une entreprise dans une démarche de prévention et de
            lutte contre le stress ?
          </p>

          <p>
            Elle doit avant tout se poser certaines questions : Quelle est la
            réalité du stress dans mon entreprise ? Quelles sont les principales
            sources de stress pour mes salariés ? Quels sont les individus les
            plus touchés ? Comment se manifestent les effets du stress ?
          </p>

          <p>
            Une fois l'évaluation des risques estimés, elle pourra mettre en
            place un plan d'action.
          </p>

          <p className="text-2xl text-large font-[700] ">
            Et pourquoi pas la sophrologie ?
          </p>

          <p>
            La sophrologie va permettre à chaque individu d'accéder à un
            véritable apprentissage de techniques utilisables très rapidement
            dans sa vie professionnelle.
          </p>

          <p>
            Tous les exercices de sophrologie ont une base commune : la
            respiration.
          </p>

          <p>
            La respiration est un excellent moyen de rentrer dans la détente du
            corps. De nombreuses recherches scientifiques ont montré le lien
            existant, entre la respiration et le cerveau. Ainsi stimulés,
            certains neurones viendraient inhiber l'activité d'une région
            responsable du stress et de l'anxiété. Cela provoquerait un
            apaisement, un sentiment de calme et de mieux-être.
          </p>

          <p className="font-bold">
            La sophrologie, avec des programmes et des exercices ciblés pour la
            gestion du stress, va permettre aux salariés de développer et
            d’accroître leurs capacités en :
          </p>
          <p>
            favorisant une meilleure connaissance de soi, à travers le ressenti
            de ses propres sensations et de ses perceptions.
          </p>
          <p>
            les libérant des tensions physiques et mentales accumulées pendant
            leurs journées de travail.
          </p>
          <p>
            apprenant à mieux gérer les exigences et les contraintes du travail
            souvent génératrices de mal-être et de stress.
          </p>
          <p>
            renforçant leur résistance au stress et en soulageant les symptômes
            qui y sont liés (TMC...).
          </p>
          <p>augmentant les capacités d'attention et de concentration.</p>

          <p>
            Toutes les techniques de la sophrologie sont très simples à
            reproduire en toute autonomie.
          </p>

          <p className="font-bold ">
            Avec la sophrologie, l'entreprise propose des outils simples et
            faciles qui vont aider chaque dirigeant et salarié à la prévention
            et à la gestion du stress pour permettre d'allier bien-être et
            efficacité au travail.
          </p>

          <p>
            Alors pour un bilan ou une étude dans votre entreprise, n'hésitez
            pas à me contacter.
          </p>

          <p>
            Sur demande, d'autres thèmes de travail peuvent être proposés :
            gestion de l'angoisse, de l'anxiété, de la douleur.
          </p>
        </div>
      </div>
    </section>
  );
};
