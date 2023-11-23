/* eslint-disable react/no-unescaped-entities */
import img from "../../assets/children.jpg";

export const ChildSession = () => {
  return (
    <div>
      <h1 className="text-center text-6xl p-10">
        {" "}
        La sophrologie ludique avec les enfants de 6 à 12 ans
      </h1>
      <div className="w-[40vw] px-10 mx-auto">
        <img src={img} alt="cancer support" />
      </div>

      <div className="mx-20 bg-[rgba(255,255,255,0.8)] p-10 flex flex-col justify-evenly  relative top-0 right-0 left-0 bottom-0 ">
        <ul className="flex flex-col gap-4 text-[18px]  ">
          <li>
            Comme les adultes, les enfants ont besoin d'un équilibre pour être
            heureux et bien grandir.
          </li>

          <li>
            La sophrologie leur fera découvrir les nombreuses ressources qu'ils
            ont en eux. L'enfance est une période cruciale de prise de
            conscience de son corps, de ses ressentis internes ou générés par
            l'extérieur (parents, éducateurs).
          </li>

          <li className="text-2xl text-large font-[700] py-2">
            UN ENFANT HEUREUX EST UN ENFANT QUI S'ADAPTE AU MONDE QUI L'ENTOURE.
          </li>
          <li>
            Avec la SOPHROLOGIE votre enfant aura les outils pour retrouver le
            calme, l'attention, la concentration.
          </li>
          <li>
            Sa pratique permettra d'équilibrer le trop plein d'énergie, de se
            libérer des tensions, des fatigues, des colères.
          </li>
          <li>
            De gérer le stress très souvent lié à la scolarité et aux
            apprentissages, à la peur de l'échec.
          </li>
          <li>Il développera ses capacités de confiance en soi.</li>
          <li>Apprendre à ne plus avoir peur de ses peurs.</li>
          <li>
            Se préparer aux changements (problème de séparation du couple,
            déménagement,..)
          </li>
          <li>Corriger un trouble émotionnel ou physique.</li>
          <li>
            La sophrologie peut également apporter des solutions pour les
            enfants hyperactifs, dyslexiques, souffrant de troubles du
            comportement (TDH).
          </li>

          <li>
            Les séances sont hebdomadaires. Après un premier entretien, nous
            établirons ensemble un objectif selon les besoins de votre enfant.
            Pendant toutes les séances, il y aura une écoute respectueuse et
            bienveillante basée sur la confiance.
          </li>

          <li className="text-2xl text-large font-[700] py-2">
            La sophrologie avec les adolescents.
          </li>

          <li>
            L'adolescence est une période délicate de la vie qui démarre entre
            11 et 13 ans et se termine entre 17 et 21 ans. C'est le temps des
            grands changements aussi bien physiques, psychiques et émotionnels.
          </li>

          <li>
            L'adolescent doit prendre son autonomie affective pour devenir à son
            tour un adulte. Le chemin pour y parvenir n'est pas un long fleuve
            tranquille.
          </li>

          <li>
            La sophrologie peut accompagner les adolescents pour aborder la vie
            plus positivement et donner du sens à leur existence.
          </li>

          <li className="text-2xl text-large font-[700] py-2">
            Elle accompagne les ados pour :
          </li>
          <li>résoudre les difficultés de sommeil,</li>
          <li>la préparation aux examens,</li>
          <li>optimiser la concentration,</li>
          <li>développer la confiance en soi,</li>
          <li>
            prendre de la distance avec les addictions (tabac, drogue,
            alcool,...),
          </li>
          <li>gestion du stress lié aux études.</li>

          <li>
            La sophrologie aidera votre adolescent à se sentir plus épanoui et
            serein dans sa vie quotidienne.
          </li>
        </ul>
      </div>
    </div>
  );
};
