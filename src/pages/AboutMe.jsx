import profile_image from "../assets/images/catherine-fabrici.png";

export const AboutMe = () => {
  return (
    <section className="  flex flex-col gap-6 items-center p-6">
      <div className="flex xsm:flex-col-reverse md:flex-row justify-center gap-6">
        <img src={profile_image} alt="profile pciture" className="h-[40rem] " />

        <div className="space-y-2">
          <h1 className="xsm:text-[32px] md:text-[48px]">Catherine Fabrici</h1>
          <h2 className="xsm:text-[32px] md:text-[48px]">Sophrologue</h2>
          <ul className="text-xl space-y-4">
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
      {/* <Career /> */}
      <hr className="h-[20px] bg-gray-100 w-full" />
      <div className=" lg:p-4 lg:px-[13rem] xsm:text-sm lg:text-2xl xsm:space-y-6 lg:space-y-10">
        <h3 className="xsm:text-[32px] lg:text-[48px]">Qui je suis?</h3>
        <p>
          j'ai été enseignante : un métier merveilleux où, au fil des ans, j'ai
          pu aider des centaines d'enfants à acquérir leur autonomie et à
          prendre leur envol. J'ai ainsi pu développer auprès de plusieurs
          générations d'écoliers ma faculté à transmettre les savoirs, ma
          capacité à aider l'autre à apprendre, connaître, ressentir et
          analyser. Bref, des compétences pédagogiques pour aider les enfants à
          trouver et exploiter le meilleur d'eux-même...Enseigner aux petits et
          aux plus grands m'a également appris à cultiver patience,
          bienveillance et humilité.
        </p>

        <p>
          Puis, une épreuve personnelle m'a amenée à me questionner sur les
          nouveaux chapitres que je voulais ajouter à mon existence. C'est à ce
          moment-là, que j'ai découvert la sophrologie, une{" "}
          <strong>
            discipline qui m'a aidée à me reconnecter avec moi-même, à prendre
            conscience de l'urgence de prendre soin de moi.
          </strong>
        </p>

        <p>
          <strong>
            Le message était clair ; "Prends soin de toi et apprends aux autres
            à prendre soin d'eux. "
          </strong>
        </p>

        <p>
          J'avais besoin à mon tour de faire découvrir et transmettre au plus
          grand nombre tous les bienfaits quotidiens de cette pédagogie, de cet
          apprentissage dynamique du bien-être.
        </p>

        <p>
          C'est dans cette suite logique, que j'ai quitté sans nostalgie mais
          avec fierté les cours de récré, les cartables, pour devenir à mon tour
          sophrologue.
        </p>

        <p>
          Je suis diplômée du Centre Evolution{" "}
          <strong> Formation (Montereau)</strong> .
        </p>
        <p>
          Membre de la Société Française de Sophrologie, je respecte le code de
          déontologie de la profession qui vous assure confidentialité et
          intégrité.
        </p>
        <p>
          Vous ressentez le besoin d'améliorer votre quotidien de manière
          positive, de prendre du recul, de gagner en qualité de vie personnelle
          et professionnelle ?
        </p>
        <p>
          Je vous propose un accompagnement personnalisé en sophrologie afin de
          créer un nouvel état de bien-être mental et corporel.
        </p>
        <p>Contactez-moi pour prendre rendez-vous.</p>
      </div>
    </section>
  );
};
