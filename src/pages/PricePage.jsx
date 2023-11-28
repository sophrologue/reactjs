export const PricePage = () => {
  return (
    <div className=" flex flex-col w-screen max-w-[70rem] mt-10  mx-auto  ">
      <ul className="flex flex-col gap-4 text-[18px]  ">
        <li className="p-4  rounded-xl">
          Premier rendez-vous d'une heure trente pour adulte, enfant, adolescent
          au cours duquel nous poserons l'objectif de notre programme : 60
          euros.
        </li>
        <li className="p-4  rounded-xl">
          Enfant / Adolescent jusqu'à 12 ans : 50 euros pour une séance de 30/40
          minutes
        </li>
        <li className="p-4  rounded-xl">
          Adolescent de 13 ans à 17 ans : 55 Euros pour une séance d'une 1h.
        </li>
        <li className="p-4  rounded-xl">
          Adultes : 55 euros pour une séance (1h).
        </li>
        <li className="p-4  rounded-xl">
          Entreprises et groupes : 15 à 25 euros par personne selon le nombre de
          participants.
        </li>

        <li className="p-4  rounded-xl">
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
