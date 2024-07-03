import img from "../assets/sophrologie-compress.jpeg";
import benefitWallpaper from "../assets/benefit_wallpaper.jpeg";
import Title from "../components/Title";
import wallpaper from "../assets/images/sophrology-wallpaper.jpeg";

export const Sophologie = () => {
  const background = {
    backgroundImage: `url(${wallpaper}`,
  };

  return (
    <section className="bg-cover bg-center bg-no-repeat   ">
      <div
        className="h-[20rem] bg-cover bg-center bg-no-repeat"
        style={background}
      ></div>
      <div className="max-w-[1250px] w-full mx-auto space-y-4  p-10">
        <Title title="Qu'est-ce que la sophrologie ?" align="center" />
        <div className="space-y-4 xsm:text-primary-body-mobile md:text-primary-body-tablet lg:text-primary-body ">
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
          <div>
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
            La pratique des exercices de SOPHROLOGIE vous permettra de trouver
            un bien-être au quotidien selon l'objectif que nous aurons défini
            ensemble.
          </p>

          <div className="space-y-4">
            <Title
              title="LES IDÉES FAUSSES SUR LA SOPHROLOGIE :"
              align="center"
            />
            <p>Ce n'est pas de la psychologie.</p>
            <p>Ce n'est pas de l'hypnose.</p>
            <p>Elle n'est pas réservée uniquement aux personnes malades.</p>
          </div>
          <div className="space-y-4">
            <Title title="CE QUI EST VRAI :" align="center" />
            <p>Elle vous permettra de voir la vie de façon plus positive.</p>
            <p>
              Les séances sont adaptées à votre personnalité et à vos besoins.
            </p>
          </div>

          <div className="space-y-4">
            <Title
              title="L'efficacité est prouvée scientifiquement."
              align="center"
            />

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
          <div className="space-y-4">
            <Title
              title="La sophrologie, avec ses exercices appropriés, vous donnera les
              clés pour mieux gérer au quotidien :"
              align="center"
            />
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
            <Title
              title=" Les bienfaits que cela vous apportera :"
              align="center"
            />

            <p className="font-bold  ">
              une meilleure connaissance de soi, un bien-être, une détente
              profonde, une harmonie entre le corps et l'esprit, un renforcement
              de ses capacités corporelles, de sa confiance en soi, une
              authenticité avec soi et les autres, une meilleure relation avec
              les autres, un renforcement du positif dans sa vie, une plus
              grande conscience de soi-même et de son existence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
