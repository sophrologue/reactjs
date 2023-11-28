import etc from "../assets/care500.png";
import daily from "../assets/high-five500.png";
import health from "../assets/health500.png";
import paths from "../assets/path-500.png";
export const Card = () => {
  return (
    <div className="flex flex-col justify-between gap-4 mb-10 ">
      <h1 className="font-bold text-4xl py-10 text-center   text-gray-700  rounded-xl ">
        AMELIORER SON QUOTIDIEN
      </h1>
      <div className="flex flex-col items-center gap-10  ">
        <div className="flex items-center gap-10">
          <div className="flex items-center justify-around w-[30rem] h-[14rem] border text-[17px]  p-6 rounded-xl bg-purple-400 text-white  ">
            <img src={daily} alt="high five" className="w-[80px]" />

            <ul className="flex flex-col gap-2 ">
              <li>
                Gestion du stress, de l’anxiété, des émotions, <br />
                Burn-out, Concentration, Mémoire
              </li>
              <li>Sommeil</li>
              <li>Confiance en soi, estime de soi</li>
              <li>Relation à soi et aux autres</li>
            </ul>
          </div>
          <div className="flex items-center justify-around w-[30rem] h-[14rem] border text-[17px] bg-green-400  p-6 rounded-xl text-white ">
            <img src={paths} alt="high five" className="w-[80px]" />

            <ul className="flex flex-col gap-2">
              <li>Aux Examens, concours</li>
              <li>Au permis de conduire, au permis moto…</li>
              <li>A travers une scolarité difficile</li>
              <li>Pour accompagner le sportif, l’artiste…</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-10">
          {" "}
          <div className="flex items-center justify-around w-[30rem] h-[14rem] border text-[17px]  p-6 rounded-xl bg-blue-400 text-white transition-[600]">
            <img src={health} alt="high five" className="w-[80px]" />
            <ul className="flex flex-col gap-2">
              <li>A travers la maladie, fibromyalgie, cancer…</li>
              <li>Gestion de la douleur, douleurs post-opératoire …</li>
              <li>Gestion des phobies, des peurs, des colères</li>
              <li>Troubles alimentaires, pulsions alimentaires</li>
              <li>Accompagnement vers un changement important</li>
            </ul>
          </div>
          <div className="flex items-center justify-around w-[30rem] h-[14rem] border text-[17px]  p-6 rounded-xl bg-orange-400  text-white">
            <img src={etc} alt="etc box" className="w-[80px]" />

            <ul className="flex flex-col gap-2">
              <li>Futurs parents</li>
              <li>Départ à la retraite, déménagement</li>
              <li>Projets professionnels</li>
              <li>Deuil</li>
              <li>Divorce</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
