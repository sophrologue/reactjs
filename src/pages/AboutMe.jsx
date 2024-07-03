import profile_image from "../assets/images/catherine-fabrici-min.png";
import Title from "../components/Title";
import about_me_wallpaper from "../assets/images/reading-book.jpeg";
import { useInView } from "react-intersection-observer";

export const AboutMe = () => {
  const { inView: bannerView, ref: bannerRef } = useInView({ threshold: 0.5 });
  const { inView: bodyView, ref: bodyRef } = useInView({ threshold: 0.5 });

  const transitionStyle = {
    transition: "opacity 1000ms",
    opacity: bannerView ? 1 : 0,
  };
  const transitionBodyStyle = {
    transition: "opacity 1000ms",
    opacity: bodyView ? 1 : 0,
  };

  const background = {
    backgroundImage: `url(${about_me_wallpaper}`,
  };

  return (
    <section className=" ">
      <div
        className="relative  h-[40rem] bg-cover bg-center bg-no-repeat"
        style={background}
      >
        <div
          ref={bannerRef}
          style={transitionStyle}
          className="text-white px-4  absolute top-0 bottom-0 right-0 left-0 flex flex-col gap-10 items-center justify-center "
        >
          <div className="font-bold xsm:text-primary-title-mobile md:text-primary-title-tablet lg:text-primary-title text-center">
            <h1 className="">Catherine Fabrici</h1>
            <h2 className="">Sophrologue</h2>
          </div>

          <ul className="xsm:text-primary-body-mobile md:text-primary-body-tablet lg:text-primary-body space-y-4">
            <li>
              Sophrologie pour : Enfant / Adolescent / Adulte / Entreprise
            </li>
            <li>
              Diplômée de Centre Evolution Formation Sophrologue Praticienne
              certifiée RNCP niveau III
            </li>
            <li>
              Sophrologie et entreprise : gestion du stress au travail et ateper
              de QVT.
            </li>
            <li>Praticienne en hypnose humaniste</li>
          </ul>
        </div>
      </div>
      <div className="flex xsm:flex-col-reverse lg:flex-row justify-center gap-6 p-10"></div>
      {/* <Career /> */}
      <hr className="h-[10px] bg-gray-100 w-full " />
      <div className=" p-10  xsm:space-y-6 lg:space-y-10 ">
        <Title title="Qui je suis?" align="center" />
        <div
          ref={bodyRef}
          style={transitionBodyStyle}
          className="text-wrap flex xsm:flex-col lg:flex-row gap-10"
        >
          {" "}
          <img
            src={profile_image}
            alt="profile pciture"
            className="xsm:h-[25rem] md:h-[50rem]  "
          />
          <div className="xsm:text-primary-body-mobile md:text-primary-body-tablet lg:text-primary-body space-y-4 ">
            {" "}
            <p>
              j'ai été enseignante : un métier merveilleux où, au fil des ans,
              j'ai pu aider des centaines d'enfants à acquérir leur autonomie et
              à prendre leur envol. J'ai ainsi pu développer auprès de plusieurs
              générations d'écoliers ma faculté à transmettre les savoirs, ma
              capacité à aider l'autre à apprendre, connaître, ressentir et
              analyser. Bref, des compétences pédagogiques pour aider les
              enfants à trouver et exploiter le meilleur d'eux-même...Enseigner
              aux petits et aux plus grands m'a également appris à cultiver
              patience, bienveillance et humilité.
            </p>
            <p>
              Puis, une épreuve personnelle m'a amenée à me questionner sur les
              nouveaux chapitres que je voulais ajouter à mon existence. C'est à
              ce moment-là, que j'ai découvert la sophrologie, une{" "}
              <strong>
                discipline qui m'a aidée à me reconnecter avec moi-même, à
                prendre conscience de l'urgence de prendre soin de moi.
              </strong>
            </p>
            <p>
              <strong>
                Le message était clair ; "Prends soin de toi et apprends aux
                autres à prendre soin d'eux. "
              </strong>
            </p>
            <p>
              J'avais besoin à mon tour de faire découvrir et transmettre au
              plus grand nombre tous les bienfaits quotidiens de cette
              pédagogie, de cet apprentissage dynamique du bien-être.
            </p>
            <p>
              C'est dans cette suite logique, que j'ai quitté sans nostalgie
              mais avec fierté les cours de récré, les cartables, pour devenir à
              mon tour sophrologue.
            </p>
            <p>
              Je suis diplômée du Centre Evolution{" "}
              <strong> Formation (Montereau)</strong> .
            </p>
            <p>
              Membre de la Société Française de Sophrologie, je respecte le code
              de déontologie de la profession qui vous assure confidentialité et
              intégrité.
            </p>
            <p>
              Vous ressentez le besoin d'améliorer votre quotidien de manière
              positive, de prendre du recul, de gagner en qualité de vie
              personnelle et professionnelle ?
            </p>
            <p>
              Je vous propose un accompagnement personnalisé en sophrologie afin
              de créer un nouvel état de bien-être mental et corporel.
            </p>
            <p>Contactez-moi pour prendre rendez-vous.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
