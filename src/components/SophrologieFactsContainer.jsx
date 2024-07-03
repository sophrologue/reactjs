import etc from "../assets/images/care500.png";
import daily from "../assets/images/high-five500.png";
import health from "../assets/images/health500.png";
import paths from "../assets/images/path-500.png";
import pastel from "../assets/images/pastel.jpg";
import { useInView } from "react-intersection-observer";

export default function SophrologieFactsContainer() {
  const { inView: firstInView, ref: firstRef } = useInView({ threshold: 0.5 });
  const { inView: secondInView, ref: secondRef } = useInView({
    threshold: 0.5,
  });
  const { inView: thirdInView, ref: thirdRef } = useInView({ threshold: 0.5 });
  const { inView: fourthInView, ref: fourthRef } = useInView({
    threshold: 0.5,
  });

  const pointsWallpaper = {
    backgroundImage: `url(${pastel})`,
    transition: "opacity 2000ms",
    opacity: firstInView | secondInView | thirdInView | fourthInView ? 1 : 0,
  };
  return (
    <section
      style={pointsWallpaper}
      className=" flex flex-col gap-4 items-center bg-white xsm:px-4 md:p-10 bg-center bg-contain bg-no-repeat"
    >
      <div
        ref={firstRef}
        className="opacity-85 bg-white flex items-center  gap-14  border border-gray-20 rounded-2xl shadow-xl xsm:w-full lg:w-[1200px] h-[300px] p-6"
      >
        <img src={daily} alt="" className="xsm:size-20 md:size-60 " />
        <ul className="xsm:text-primary-body-mobile md:text-primary-body-tablet lg:text-primary-body xsm:space-y-0 md:space-y-3 lg:space-y-6  list-disc	">
          <li>
            Gestion du stress, de l’anxiété, des émotions, <br />
            Burn-out, Concentration, Mémoire
          </li>
          <li>Sommeil</li>
          <li>Confiance en soi, estime de soi</li>
          <li>Relation à soi et aux autres</li>
        </ul>
      </div>
      <div
        ref={secondRef}
        className="opacity-85 bg-white flex items-center gap-14  border border-gray-20 rounded-2xl shadow-xl xsm:w-full lg:w-[1200px] h-[300px] p-6"
      >
        <img src={paths} alt="" className="xsm:size-20 md:size-60 " />
        <ul className="xsm:text-primary-body-mobile md:text-primary-body-tablet lg:text-primary-body xsm:space-y-0 md:space-y-3 lg:space-y-6  list-disc	">
          <li> Examens, concours</li>
          <li> Permis de conduire, au permis moto…</li>
          <li>A travers une scolarité difficile</li>
          <li>Pour accompagner le sportif, l’artiste…</li>
        </ul>
      </div>
      <div
        ref={thirdRef}
        className="opacity-85 bg-white flex items-center gap-14  border border-gray-20 rounded-2xl shadow-xl xsm:w-full lg:w-[1200px] h-[300px] p-6"
      >
        <img src={health} alt="" className="xsm:size-20 md:size-60 " />
        <ul className="xsm:text-primary-body-mobile md:text-primary-body-tablet lg:text-primary-body xsm:space-y-0 md:space-y-3 lg:space-y-6  list-disc	">
          <li>A travers la maladie, fibromyalgie, cancer…</li>
          <li>Gestion de la douleur, douleurs post-opératoire …</li>
          <li>Gestion des phobies, des peurs, des colères</li>
          <li>Troubles alimentaires, pulsions alimentaires</li>
          <li>Accompagnement vers un changement important</li>
        </ul>
      </div>
      <div
        ref={fourthRef}
        className="opacity-85 bg-white flex items-center gap-14  border border-gray-20 rounded-2xl shadow-xl xsm:w-full lg:w-[1200px] h-[300px] p-6"
      >
        <img src={etc} alt="" className="xsm:size-20 md:size-60 " />
        <ul className="xsm:text-primary-body-mobile md:text-primary-body-tablet lg:text-primary-body xsm:space-y-0 md:space-y-3 lg:space-y-6  list-disc	">
          <li>Futurs parents</li>
          <li>Départ à la retraite, déménagement</li>
          <li>Projets professionnels</li>
          <li>Deuil</li>
          <li>Divorce</li>
        </ul>
      </div>
    </section>
  );
}
