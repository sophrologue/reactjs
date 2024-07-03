import wallpaper from "../../assets/images/children-min.jpg";
import Title from "../../components/Title";

export const ChildSession = () => {
  const background = {
    backgroundImage: `url(${wallpaper}`,
  };
  return (
    <section className="">
      <div
        className="xsm:h-[20rem] md:h-[40rem] bg-cover bg-center bg-no-repeat"
        style={background}
      ></div>
      <div className="space-y-8 max-w-[1250px] w-full mx-auto xsm:p-4 md:p-10">
        <Title
          title="La sophrologie ludique avec les enfants de 6 à 12 ans"
          align="center"
        />

        <div className="xsm:text-primary-body-mobile md:text-primary-body-tablet lg:text-primary-body space-y-4   ">
          <p>
            Comme les adultes, les enfants ont besoin d'un équilibre pour être
            heureux et bien grandir.
          </p>

          <p>
            La sophrologie leur fera découvrir les nombreuses ressources qu'ils
            ont en eux. L'enfance est une période cruciale de prise de
            conscience de son corps, de ses ressentis internes ou générés par
            l'extérieur (parents, éducateurs).
          </p>

          <p className="font-bold ">
            UN ENFANT HEUREUX EST UN ENFANT QUI S'ADAPTE AU MONDE QUI L'ENTOURE.
          </p>
          <p>
            Avec la SOPHROLOGIE votre enfant aura les outils pour retrouver le
            calme, l'attention, la concentration.
          </p>
          <p>
            Sa pratique permettra d'équilibrer le trop plein d'énergie, de se
            libérer des tensions, des fatigues, des colères.
          </p>
          <p>
            De gérer le stress très souvent lié à la scolarité et aux
            apprentissages, à la peur de l'échec.
          </p>
          <p>Il développera ses capacités de confiance en soi.</p>
          <p>Apprendre à ne plus avoir peur de ses peurs.</p>
          <p>
            Se préparer aux changements (problème de séparation du couple,
            déménagement,..)
          </p>
          <p>Corriger un trouble émotionnel ou physique.</p>
          <p>
            La sophrologie peut également apporter des solutions pour les
            enfants hyperactifs, dyslexiques, souffrant de troubles du
            comportement (TDH).
          </p>

          <p>
            Les séances sont hebdomadaires. Après un premier entretien, nous
            établirons ensemble un objectif selon les besoins de votre enfant.
            Pendant toutes les séances, il y aura une écoute respectueuse et
            bienveillante basée sur la confiance.
          </p>

          <p className="font-bold">La sophrologie avec les adolescents.</p>

          <p>
            L'adolescence est une période délicate de la vie qui démarre entre
            11 et 13 ans et se termine entre 17 et 21 ans. C'est le temps des
            grands changements aussi bien physiques, psychiques et émotionnels.
          </p>

          <p>
            L'adolescent doit prendre son autonomie affective pour devenir à son
            tour un adulte. Le chemin pour y parvenir n'est pas un long fleuve
            tranquille.
          </p>

          <p>
            La sophrologie peut accompagner les adolescents pour aborder la vie
            plus positivement et donner du sens à leur existence.
          </p>

          <p className="text-2xl text-large font-[700] py-2">
            Elle accompagne les ados pour :
          </p>
          <p>résoudre les difficultés de sommeil,</p>
          <p>la préparation aux examens,</p>
          <p>optimiser la concentration,</p>
          <p>développer la confiance en soi,</p>
          <p>
            prendre de la distance avec les addictions (tabac, drogue,
            alcool,...),
          </p>
          <p>gestion du stress lié aux études.</p>

          <p>
            La sophrologie aidera votre adolescent à se sentir plus épanoui et
            serein dans sa vie quotidienne.
          </p>
        </div>
      </div>
    </section>
  );
};
