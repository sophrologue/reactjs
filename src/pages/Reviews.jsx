export const Reviews = () => {
  // const [reviews, setReviews] = useState([]);

  const reviews = [
    {
      id: 1,
      name: "hafou jouanneau",
      date: "05.2019",
      rating: "5/5",
      comment: "",
    },
    {
      id: 2,
      name: "Anne Marchand",
      date: "10.2020",
      rating: "5/5",
      comment:
        "Je recommande vivement très à l'écoute et très professionnelle.",
    },
    {
      id: 3,
      name: "Arnaud DIDIER",
      date: "2019",
      rating: "3/5",
      comment:
        "Merci Mme Fabrici pour votre aide des exercices adaptés pour m'aider à me concentrer et au bien-être de ma vie quotidienne.",
    },
    {
      id: 4,
      name: "Jennifer DIOT",
      date: "2019",
      rating: "5/5",
      comment:
        "Très bonne écoute. Très bon relationnel avec les enfants. Très bonne aide pour la confiance en soi. Je recommande les yeux fermés.",
    },
    {
      id: 5,
      name: "Matthieu Paris",
      date: "06.2021",
      rating: "5/5",
      comment:
        "Je recommande Mme Fabricie c'est une personne qui est passionnée par son métier, qui est très compétente et très appliquée dans ce qu'elle fait et j'en garde une très bonne expérience.",
    },
    {
      id: 6,
      name: "Sandrine FERNAND",
      date: "04.2021",
      rating: "5/5",
      comment:
        "Je recommande vivement Mme Fabrici pour la qualité de son travail. C'est une personne charmante et très compétente, notamment avec les enfants.",
    },
    {
      id: 7,
      name: "Jennifer Tillit",
      date: "02.2021",
      rating: "5/5",
      comment:
        "Très bonne expérience avec cette femme qui est passionnée par son métier et ça se ressent on se sent plus léger et détendu grâce à son travail je la conseille fortement.",
    },
    {
      id: 8,
      name: "Elisabeth Kilo",
      date: "02.2022",
      rating: "5/5",
      comment:
        "Merci de votre aide grâce à votre adaptation, vos exercices et surtout votre écoute je me sens beaucoup plus sereine. Je n'hésiterai pas à vous recommander.",
    },
    {
      id: 9,
      name: "Murielle Bertheau",
      date: "10.2019",
      rating: "5/5",
      comment:
        "La Sophrologie avec Catherine Fabrici a vraiment répondu à mes attentes, c'est une personne qui par son écoute propose une méthode adaptée a chacun. Un grand merci. Allez y en toute confiance.",
    },
    {
      id: 10,
      name: "angélique Lault",
      date: "2019",
      rating: "5/5",
      comment:
        "Mme Fabricie est une sophrologue en or, elle a redonnée à ma fille de 11 ans une confiance en elle, qu elle avait malheureusement perdu. Ma fille se sent ressourcée dès qu elle sort d une séance. Je recommande Mme Fabricie les yeux fermés pour ses qualités professionnelles et humaines.",
    },
    {
      id: 11,
      name: "Julie Da Silva",
      date: "11.2019",
      rating: "5/5",
      comment:
        "Je conseille cette sophrologue amplement. C'est une personne qui prend le temps qui n'est pas pressée et qui essaye réellement de te faire du bien. Elle travaille avec les 3 capacités essentielles : harmonie, l'optimisme, et la confiance en soi. Elle a été là à un moment de ma vie utile. J'étais une étudiante qui stressais tout le temps a chaque examen je me mettais une pression de dingue et elle a réussi à m'apprendre à relativiser. Je suis venue à elle pour cette raison mais d'autres choses en moi se sont calmées en réalisant ces séances. Jai commencé en fin janvier 2019 et cela a duré jusqu'en avril si je me souviens bien. Besoin de prendre soin de soi, de relativiser, ou d'autres je vous invite à la contacter.",
    },
    {
      id: 12,
      name: "stephanie sevaux",
      date: "2019",
      rating: "5/5",
      comment:
        "La sophrologie avec Mme FABRICI, m'a énormément aidé à canaliser certaines choses enfouies, et m'a permis d'avancer sur mes projets sereinement. Elle a contribuée aussi à la réussite de mon ados qui était très timide à l'oral. Aujourd'hui il intervient oralement sans soucis et aborde ses examens en toute sérénité. Merci beaucoup pour cette aide précieuse, cette écoute. Je recommande vivement cette expérience.",
    },
    {
      id: 13,
      name: "Bastien Bastien",
      date: "2019",
      rating: "5/5",
      comment:
        "Une grande aide personnalisée, beaucoup d'écoute, une découverte pour moi qui n'avais jamais \"goûté\" a ce type de soins. Catherine FABRICI est une professionnelle, qui fait passer l'intérêt de ses patients/client avant le siens. J'y retournerai sans doute prochainement pour approfondir mes connaissances \"sophrologique\".",
    },
    {
      id: 14,
      name: "Nadine PORRETTA",
      date: "11.2021",
      rating: "5/5",
      comment:
        "Je tiens à remercier Catherine pour les exercices de sophrologie à distance (ordinateur). J’insiste fortement à pratiquer les exercices en téléconférence surtout pour éviter le déplacement et cela fonctionne très bien. Grâce à Catherine j’ai une confiance en moi qui c’est installée. Les exercices m’aident, je pratique souvent et cela me fait voir la vie d’une autre façon beaucoup plus agréable même en cas de soucis. Aujourd’hui je fais des examens de santé en étant plus zen. Je vous invite à la contacter en cas de problème, c’est une personne formidable et qui va vous aider. Nadine",
    },
    {
      id: 15,
      name: "Estelle Bonnemaison",
      date: "02.2023",
      rating: "5/5",
      comment:
        "Merci à toi Catherine de m'avoir appris à chasser le négatif et laisser entrer le positif. J'ai une préférence pour l'hypnose. Très bien les séances en visio washapp.",
    },
    {
      id: 16,
      name: "Béchu Audrey",
      date: "11.2021",
      rating: "5/5",
      comment:
        "Étant très anxieuse et angoissée, j'ai contacté Mme FABRICI suite à des soucis de santé qui m'ont placé dans une situation de stress maladif. Très professionnelle et à l'écoute, elle m'a aidé à respirer, à me détendre et m'a donné des clés pour gérer ce stress qui avait pris trop d'ampleur. J'ai beaucoup apprécié cette méthode car la prise de médicament est exclue. Chaque semaine, je continue les exercices qu'elle m'a appris et la remercie fortement pour sa gentillesse et ses conseils. Je recommande la sophrologie avec Mme FABRICI!!",
    },
    {
      id: 17,
      name: "Vanessa C",
      date: "01.2020",
      rating: "5/5",
      comment:
        "Un grand merci pour l'aide apportée à mon fils. 7 séances ont permis qu'il se sente vraiment mieux dans sa tête et son corps. Des exercices très bien expliqués, qu'il peut reproduire à la maison très facilement. Je recommande en toute confiance Mme Fabrici Catherine. Si autre besoin familial nous la solliciterons à nouveau. MERCI.",
    },
    {
      id: 18,
      name: "Nathalie C",
      date: "04.2022",
      rating: "5/5",
      comment:
        "Tout au long des séances de sophrologie, Mme Fabrici m'a permis d'améliorer ma posture, d'acquérir des techniques de respiration, de visualisation et de pensées positives. Aujourd'hui je mets en pratique ce savoir afin de vivre pleinement mon bien-être. Une très belle rencontre, merci à vous avec Mme Fabrici.",
    },
    {
      id: 19,
      name: "Fernanda Da Fonseca",
      date: "10.2021",
      rating: "5/5",
      comment:
        "Mme Fabrici est très agréable et très à l'écoute. Je la recommande à 100% pour ses séances de sophrologie de qualité, son écoute et sa bienveillance. Au fur et à mesure des séances, j'ai appris à mieux gérer mon anxiété et mon stress. J'ai appris à me détendre physiquement et mentalement. Merci pour votre patience et votre écoute.",
    },
    {
      id: 20,
      name: "Martine Valem",
      date: "10.2022",
      rating: "5/5",
      comment:
        "Très mal physiquement et psychologiquement à mon 1e rendez-vous fin avril, j'ai vraiment accepté le passé. J'ai pu poser mon \"sac à dos\" devenu léger au fil des séances. Et je découvre, tel un papillon, ma nouvelle vie sans l'addiction qui me tuait. Maintenant, mon entourage remarque ma bonne mine et mon entrain. Je vous recommande vivement Catherine.",
    },
    {
      id: 21,
      name: "Marie Prost",
      date: "05.2023",
      rating: "5/5",
      comment:
        "J'ai consulté Mme FABRICI afin de m'aider dans la gestion de mes émotions et je ne regrette pas. Mme FABRICI prend le temps d'expliquer le déroulé de chaque séance. C'est une personne très douce et qui sait mettre en confiance.",
    },
    {
      id: 22,
      name: "Catherine BOURGEOIS",
      date: "05.2023",
      rating: "5/5",
      comment:
        "J’ai consulté Mme Fabrici afin qu’elle m’aide dans la gestion du stress et des émotions. Je suis ravie du protocole qu’elle a élaboré pour moi, en rapport avec mes besoins. C’est une sophrologue très professionnelle et toujours à l’écoute des demandes. Je suis maintenant outillée pour mettre en pratique les exercices appris et vivre de manière positive. J’ai fait toute mes séances en visio (avec skype), et cela n’a absolument pas été un handicap dans le déroulement du protocole.",
    },
    {
      id: 23,
      name: "Peggy Rgl",
      date: "02.2024",
      rating: "5/5",
      comment:
        "Consultation hypnose avec Madame Fabrici afin de me libérer de grosses angoisses ancrées depuis très longtemps en moi, ainsi que de l’agoraphobie qui me prive de croquer la vie à pleine dent! Au bout de 2 séances, mes angoisses se sont dissipées mais mon travail continu sur du positif. En une séance pour l’agoraphobie, j’ai pu profiter d’un petit shopping. Merci à votre professionnalisme, à votre écoute et votre bienveillance. Ravie de vous avoir contacter!",
    },
    {
      id: 24,
      name: "Yoann Bruneaux",
      date: "02.2024",
      rating: "5/5",
      comment:
        "Très bonne sophrologue, elle m'a aidé à gérer mon stress. L'hypnose a très bien marché sur moi et cela a été très efficace.",
    },
    {
      id: 25,
      name: "Elodie Vlamynck",
      date: "05.2024",
      rating: "5/5",
      comment:
        "Merci pour tout : l'écoute, la patience, le calme, les conseils, le parcours de sophrologie personnalisé et individualisé. En synthèse : aucune hésitation à aller voir Mme Fabrici.",
    },
  ];

  return (
    <div className=" flex flex-col my-5 gap-8 w-screen xsm:px-10   max-w-[70rem] mx-auto">
      <h1 className="text-[30px] text-center">
        Catherine Fabrici, Sophrologue
      </h1>
      <p className="text-center text-[22px]">
        Le, 6 Rue de la Martillière, Le Malesherbois, France
      </p>
      <p className="text-center text-[18px]">
        4.9 / 5 <span>({reviews.length} avis)</span>{" "}
      </p>
      <button className="w-full mx-auto ">
        <a
          href="https://www.google.com/search?sca_esv=588364199&sxsrf=AM9HkKk1Po2jNOC2QoCiIuUS-7aOCwuwjQ:1701869282346&q=Catherine+Fabrici+sophrologue+Wellness+program+in+Le+Malesherbois,+France&si=ALGXSlZxBBDAx2AHKeMOj5-1VEN5S7cHqdh2fch2yZlxm0ucj7afXmqTJ_wFZr4uQtZZVIdqWucuMF3kP0u29S_WMkJxm16wPfInmczCBzxQQwAX3IedcKgZzuuRWwjmaXsHuZUigyfLLOqfBZVtXlEBVJhkVlrhzinJYcTGt216ZjsjQZfCJV7TLifbO2uW5zyahNxv4fIVNHHJJK1UvP0h7gMUF0rGCqLcaqUVI0LcFaE9fotnng75kWNsAOg5duXLIfAL_ICy9x9pLVSf5EHqVHgb24sIIocv15DYXF1cEtlrm3lPXKw%3D&sa=X&ved=2ahUKEwjr1JyQ9fqCAxUIffUHHb_vBMwQ6RN6BAgMEAE&biw=2111&bih=928&dpr=0.9#lrd=0x47e595fc0f090e9b:0x40983a268fe4ed9d,1,,,,"
          className="p-4  w-[800px] h-[60px] rounded-xl bg-green-500 hover:bg-blue-500 border  text-white"
        >
          {" "}
          Écrire un avis sur Google
        </a>
      </button>
      <div className="w-full ">
        {reviews.reverse().map((review) => {
          return (
            <div
              key={review.id}
              className="w-full flex md:flex-row xsm:flex-col gap-4 items-center border border-gray-200 drop-shadow-lg p-4"
            >
              {/* left */}
              <div className="flex flex-col items-center w-[100px] text-[15px] text-center ">
                <p className="text-gray-400">{review.date}</p>
                <p>{review.name}</p>
              </div>
              {/* rating */}
              <div className="w-[100px] text-center font-bold text-blue-600">
                {review.rating}
              </div>
              {/* body */}
              <div className="flex-1 xsm:text-[14px] md:text-[18px]">
                {review.comment}
              </div>
            </div>
          );
        })}
      </div>

      {/* <ReviewTable reviews={reviews} /> */}
      {/* <div className="flex flex-wrap gap-4">
        {reviews.map((review) => {
          return (
            <div
              key={review.id}
              className="flex flex-col mx-auto gap-2 border p-5 rounded-xl text-center  w-[20rem] text-elep"
            >
              <h1 className="text-[20px]">{review.name}</h1>
              <p>Avis : {review.rating}</p>
              <p>Date : {review.date}</p>
              <hr className="w-[80%] border border-gray-200 mx-auto" />
              <p className="text-[15px] text-left">{review.comment}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};
