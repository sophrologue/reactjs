import groupIcon from "../assets/grommet-icons_group.svg";
import PriceCard from "../components/PriceCard";
import Title from "../components/Title";
import wallpaper from "../assets/images/tarif-walllpaper-min.jpeg";

export const PricePage = () => {
  const background = {
    backgroundImage: `url(${wallpaper}`,
  };

  return (
    <section className="space-y-8   bg-center bg-cover  bg-no-repeat">
      {" "}
      <div
        className="h-[20rem] bg-cover bg-center bg-no-repeat"
        style={background}
      ></div>
      {/* <h1 className="text-4xl my-5 font-[700] text-center">Tarifs</h1> */}
      <div className="xsm:p-4 md:p-10 flex  flex-col max-w-[1250px] w-full mx-auto gap-4 xsm:text-[16px] md:text-[20px]">
        <Title title="Tarifs" align="center" />
        <PriceCard
          backgroundColor="#bfdbfe"
          src={groupIcon}
          description=" Premier rendez-vous d'une heure trente pour adulte, enfant,
            adolescent au cours duquel nous poserons l'objectif de notre
            programme."
          price="60 euros"
        />
        <PriceCard
          backgroundColor="#bbf7d0"
          src={groupIcon}
          description=" Enfant / Adolescent jusqu'à 12 ans : 50 euros pour une séance de 30/40 minutes"
          price="50 euros"
        />
        <PriceCard
          backgroundColor="#fef08a"
          src={groupIcon}
          description="Adolescent de 13 ans à 17 ans : 55 Euros pour une séance d'une 1h."
          price="55 euros"
        />
        <PriceCard
          backgroundColor="#e9d5ff"
          src={groupIcon}
          description="Adultes : 55 euros pour une séance (1h)."
          price="55 euros"
        />
        <PriceCard
          backgroundColor="#fbcfe8"
          src={groupIcon}
          description="Entreprises et groupes : 15 à 25 euros par personne selon le nombre de participants."
          price="15 ~ 25 euros"
        />
        <PriceCard
          backgroundColor="#fecaca"
          src={groupIcon}
          description="SEANCE HYPNOSE / 70 euros 2 séances à prévoir au minimum Dans le cadre d'un programme combiné la séance sera à 60 euros."
          price="60 ~ 70 euros"
        />
      </div>
    </section>
  );
};
