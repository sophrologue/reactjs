import img from "../../assets/stress_at_work.jpg";

export const StressSession = () => {
  return (
    // <div className="flex flex-col" style={background}>

    <div>
      {/* <SessionCategories /> */}
      <h1 className="text-center text-6xl p-10"> Le stress en entreprise</h1>
      <div className="w-[40vw] px-10 mx-auto">
        <img src={img} alt="stress support" />
      </div>
      `
      <div className="mx-20 bg-[rgba(255,255,255,0.8)] p-10 flex flex-col justify-evenly  relative top-0 right-0 left-0 bottom-0 ">
        <ul className="flex flex-col gap-4 text-[18px]  ">
          <li>
            Le stress professionnel peut avoir des conséquences sur la santé.
            Selon l'OMS (l'organisation mondiale pour la santé) le travail ne
            serait plus aussi bon pour notre santé. Tous les indicateurs sont au
            rouge. Les rapports et études qui se sont consacrés à ce sujet,
            démontrent que travailler rendrait plutôt malade et mettrait notre
            vie en danger.
          </li>

          <li>
            Les effets du stress au travail peuvent être d'ordre somatique,
            psychologique et émotionnel.
          </li>

          <li>
            Les troubles psychologiques : la perte de confiance en soi,
            diminution de l'estime de soi, surmenage, épuisement, baisse de la
            résistance, insomnie,...
          </li>

          <li>
            Les troubles émotionnels : dépression, anxiété, pessimisme, colère,
            nervosité, saute d'humeur, irritabilité, susceptibilité,..
          </li>

          <li>
            Le burn-out et le suicide en sont parfois les conséquences extrêmes.
          </li>

          <li className="text-2xl text-large font-[700] py-2">
            Que peut faire une entreprise dans une démarche de prévention et de
            lutte contre le stress ?
          </li>

          <li>
            Elle doit avant tout se poser certaines questions : Quelle est la
            réalité du stress dans mon entreprise ? Quelles sont les principales
            sources de stress pour mes salariés ? Quels sont les individus les
            plus touchés ? Comment se manifestent les effets du stress ?
          </li>

          <li>
            Une fois l'évaluation des risques estimés, elle pourra mettre en
            place un plan d'action.
          </li>

          <li className="text-2xl text-large font-[700] py-2">
            Et pourquoi pas la sophrologie ?
          </li>

          <li>
            La sophrologie va permettre à chaque individu d'accéder à un
            véritable apprentissage de techniques utilisables très rapidement
            dans sa vie professionnelle.
          </li>

          <li>
            Tous les exercices de sophrologie ont une base commune : la
            respiration.
          </li>

          <li>
            La respiration est un excellent moyen de rentrer dans la détente du
            corps. De nombreuses recherches scientifiques ont montré le lien
            existant, entre la respiration et le cerveau. Ainsi stimulés,
            certains neurones viendraient inhiber l'activité d'une région
            responsable du stress et de l'anxiété. Cela provoquerait un
            apaisement, un sentiment de calme et de mieux-être.
          </li>

          <li className="text-2xl text-large font-[700] py-2">
            La sophrologie, avec des programmes et des exercices ciblés pour la
            gestion du stress, va permettre aux salariés de développer et
            d’accroître leurs capacités en :
          </li>
          <li>
            favorisant une meilleure connaissance de soi, à travers le ressenti
            de ses propres sensations et de ses perceptions.
          </li>
          <li>
            les libérant des tensions physiques et mentales accumulées pendant
            leurs journées de travail.
          </li>
          <li>
            apprenant à mieux gérer les exigences et les contraintes du travail
            souvent génératrices de mal-être et de stress.
          </li>
          <li>
            renforçant leur résistance au stress et en soulageant les symptômes
            qui y sont liés (TMC...).
          </li>
          <li>augmentant les capacités d'attention et de concentration.</li>

          <li>
            Toutes les techniques de la sophrologie sont très simples à
            reproduire en toute autonomie.
          </li>

          <li className="text-2xl text-large font-[700] py-2">
            Avec la sophrologie, l'entreprise propose des outils simples et
            faciles qui vont aider chaque dirigeant et salarié à la prévention
            et à la gestion du stress pour permettre d'allier bien-être et
            efficacité au travail.
          </li>

          <li>
            Alors pour un bilan ou une étude dans votre entreprise, n'hésitez
            pas à me contacter.
          </li>

          <li>
            Sur demande, d'autres thèmes de travail peuvent être proposés :
            gestion de l'angoisse, de l'anxiété, de la douleur.
          </li>
        </ul>
      </div>
    </div>
  );
};
