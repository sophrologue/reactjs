export const PricePage = () => {
  return (
    <div className=" flex flex-col my-5 w-screen xsm:px-10 h-screen  max-w-[70rem] mx-auto">
      <h1 className="text-4xl my-5 font-[700]">Tarifs</h1>
      <ul className="flex flex-col gap-4 xsm:text-[14px] sm:text-[18px]  ">
        <li>
          Premier rendez-vous d'une heure trente pour adulte, enfant, adolescent
          au cours duquel nous poserons l'objectif de notre programme : 60
          euros.
        </li>
        <li>
          Enfant / Adolescent jusqu'à 12 ans : 50 euros pour une séance de 30/40
          minutes
        </li>
        <li>
          Adolescent de 13 ans à 17 ans : 55 Euros pour une séance d'une 1h.
        </li>
        <li>Adultes : 55 euros pour une séance (1h).</li>
        <li>
          Entreprises et groupes : 15 à 25 euros par personne selon le nombre de
          participants.
        </li>

        <li>
          SEANCE HYPNOSE / 70 euros 2 séances à prévoir au minimum Dans le cadre
          d'un programme combiné la séance sera à 65 euros.
        </li>
        {/* <li className="p-4  rounded-xl">
          Retrouvez moi facilement grâce à ce plan ci-dessous.
        </li> */}
      </ul>
    </div>
  );
};
