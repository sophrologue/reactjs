/* eslint-disable react/no-unescaped-entities */
import backgroundImg from "../../assets/heart-large.jpeg";
import { SessionCategories } from "../SessionCategories";

export const StressSession = () => {
  const background = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="flex flex-col" style={background}>
      <SessionCategories />

      <div className="mx-20 bg-[rgba(255,255,255,0.8)] p-10 flex flex-col justify-evenly  relative top-0 right-0 left-0 bottom-0 ">
        <h1 className="text-center text-4xl mb-8 h-[80px] border-black border flex items-center justify-center font-bold ">
          Le stress en entreprise
        </h1>
        <ul className="h-full  ">
          <li>
            Le stress professionnel peut avoir des conséquences sur la santé.
            Selon l'OMS (l'organisation mondiale pour la santé) le travail ne
            serait plus aussi bon pour notre santé. Tous les indicateurs sont au
            rouge. Les rapports et études qui se sont consacrés à ce sujet,
            démontrent que travailler rendrait plutôt malade et mettrait notre
            vie en danger.
          </li>
          <br />
          <li>
            Les effets du stress au travail peuvent être d'ordre somatique,
            psychologique et émotionnel.
          </li>

          <li>
            <br />
            Les troubles somatiques : grande fatigue, palpitations, céphalées,
            migraines, ulcères, douleurs thoraciques, douleurs abdominales,
            hypertension, troubles dermatologiques,..
          </li>
          <br />
          <li>
            Les troubles psychologiques : la perte de confiance en soi,
            diminution de l'estime de soi, surmenage, épuisement, baisse de la
            résistance, insomnie,...
          </li>
          <br />

          <li>
            Le burn-out et le suicide en sont parfois les conséquences extrêmes.
          </li>
          <br />
          <li className="text-green-600 font-bold text-2xl">
            Que peut faire une entreprise dans une démarche de prévention et de
            lutte contre le stress ?
          </li>
          <br />
          <li>
            Elle doit avant tout se poser certaines questions : Quelle est la
            réalité du stress dans mon entreprise ? Quelles sont les principales
            sources de stress pour mes salariés ? Quels sont les individus les
            plus touchés ? Comment se manifestent les effets du stress ?
          </li>
          <br />
          <li>Le stress au travail - Catherine FABRICI - SOPHROLOGUE</li>

          <br />
          <li className="text-green-600 font-bold text-2xl">
            Et pourquoi pas la sophrologie ?
          </li>
          <br />
          <li>
            La sophrologie va permettre à chaque individu d'accéder à un
            véritable apprentissage de techniques utilisables très rapidement
            dans sa vie professionnelle.
          </li>
          <br />
          <li>
            Tous les exercices de sophrologie ont une base commune : la
            respiration.
          </li>
          <br />
          <li>
            La respiration est un excellent moyen de rentrer dans la détente du
            corps. De nombreuses recherches scientifiques ont montré le lien
            existant, entre la respiration et le cerveau. Ainsi stimulés,
            certains neurones viendraient inhiber l'activité d'une région
            responsable du stress et de l'anxiété. Cela provoquerait un
            apaisement, un sentiment de calme et de mieux-être.
          </li>
          <br />
          <li className="mb-2">
            La sophrologie, avec des programmes et des exercices ciblés pour la
            gestion du stress, va permettre aux salariés de développer et
            d’accroître leurs capacités en :
          </li>
          <ul className="text-gray-800 font-normal ml-4">
            <li>
              - favorisant une meilleure connaissance de soi, à travers le
              ressenti de ses propres sensations et de ses perceptions.
            </li>
            <li>
              - les libérant des tensions physiques et mentales accumulées
              pendant leurs journées de travail.
            </li>
            <li>
              - apprenant à mieux gérer les exigences et les contraintes du
              travail souvent génératrices de mal-être et de stress.
            </li>
            <li>
              - renforçant leur résistance au stress et en soulageant les
              symptômes qui y sont liés (TMC...).
            </li>
            <li>- augmentant les capacités d'attention et de concentration.</li>
          </ul>
          <br />
          <li className="text-green-600 font-bold text-2xl">
            Toutes les techniques de la sophrologie sont très simples à
            reproduire en toute autonomie.
          </li>
          <br />
          <li>
            Avec la sophrologie, l'entreprise propose des outils simples et
            faciles qui vont aider chaque dirigeant et salarié à la prévention
            et à la gestion du stress pour permettre d'allier bien-être et
            efficacité au travail.{" "}
          </li>
          <br />
          <li>
            Alors pour un bilan ou une étude dans votre entreprise, n'hésitez
            pas à me contacter.
          </li>
          <br />
          <li>
            Sur demande, d'autres thèmes de travail peuvent être proposés :
            gestion de l'angoisse, de l'anxiété, de la douleur.
          </li>
          <br />
          <li className="text-green-600 font-bold text-3xl text-center mb-2">
            Quelques thèmes
          </li>
          <ul className="text-gray-800 font-normal ml-4 text-center">
            <li> Gestion des émotions et du stress.</li>
            <li> Gestion du sommeil</li>
            <li> Gérer vos angoisses et votre anxiété.</li>
            <li> Comment pallier aux difficultés de concentration.</li>
            <li> Développer la conscience.</li>
            <li> Gestion de la douleur et de la souffrance au travail.</li>
            <li> Développer la communication avec les autres.</li>
          </ul>
        </ul>
      </div>
    </div>
  );
};
