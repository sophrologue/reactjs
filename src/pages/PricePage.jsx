export const PricePage = () => {
  return (
    <div className="flex flex-col my-5 w-screen xsm:px-10 h-screen max-w-[70rem] mx-auto">
      <h1 className="text-4xl my-5 font-[700] text-center">Tarifs</h1>
      <div className="flex flex-col gap-4 xsm:text-[16px] md:text-[20px]">
        <p className="bg-blue-200 rounded-lg p-4">
          Premier rendez-vous d'une heure trente pour adulte, enfant, adolescent
          au cours duquel nous poserons l'objectif de notre programme : 60
          euros.
        </p>
        <p className="bg-green-200 rounded-lg p-4">
          Enfant / Adolescent jusqu'à 12 ans : 50 euros pour une séance de 30/40
          minutes
        </p>
        <p className="bg-yellow-200 rounded-lg p-4">
          Adolescent de 13 ans à 17 ans : 55 Euros pour une séance d'une 1h.
        </p>
        <p className="bg-purple-200 rounded-lg p-4">
          Adultes : 55 euros pour une séance (1h).
        </p>
        <p className="bg-pink-200 rounded-lg p-4">
          Entreprises et groupes : 15 à 25 euros par personne selon le nombre de
          participants.
        </p>
        <p className="bg-red-200 rounded-lg p-4">
          SEANCE HYPNOSE / 70 euros 2 séances à prévoir au minimum Dans le cadre
          d'un programme combiné la séance sera à 65 euros.
        </p>
      </div>
    </div>
  );
};
