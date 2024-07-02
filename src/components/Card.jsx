import etc from "../assets/care500.png";
import daily from "../assets/high-five500.png";
import health from "../assets/health500.png";
import paths from "../assets/path-500.png";
import { useInView } from "react-intersection-observer";
import React, { Suspense } from "react";
// import therapy from "../assets/images/therapy-image.jpeg";
const LazyTherapyImage = React.lazy(() =>
  import("../assets/images/therapy-image.jpeg")
);

export const Card = () => {
  const { inView, ref } = useInView({ threshold: 0.2 });

  const transitionStyle = {
    transition: "opacity 2000ms",
    opacity: inView ? 1 : 0,
  };

  const backgroundStyle = {
    backgroundImage: `url(${LazyTherapyImage})`,
  };
  return (
    /**
     *  className=" brightness-75 h-[600px] bg-cover bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${wallpaper})` }}
        style={backgroundStyle}
     */
    <Suspense fallback={<div>Loading...</div>}>
      <section
        style={backgroundStyle}
        className="relative h-[40rem]  bg-cover bg-center bg-no-repeat w-screen bg-gray-100 p-10"
      >
        <div className="absolute left-0 right-0  top-0 flex items-center justify-center text-black">
          <h1>Catherine Fabrici</h1>
          <h2>Sophrologue</h2>
        </div>
      </section>
    </Suspense>
    // {/* <div className="w-[1250px] mx-auto bg-white rounded-xl  h-full "></div> */}

    //     <section className=" h-[150rem] xsm:my-60 md:my-0 bg-gray-100 ">
    //       <div
    //         ref={ref}
    //         style={transitionStyle}
    //         className="flex flex-col items-center md:gap-10 xsm:gap-0 justify-center  h-full    max-w-[1200px] w-full mx-auto "
    //       >
    //         <h1 className="w-full text-center  font-bold xsm:text-[24px] md:text-[42px]  rounded-lg">
    //           AMELIORER SON QUOTIDIEN
    //         </h1>
    //         <div
    //           className="flex flex-col items-center  xms:gap-0 md:gap-4 max-w-[1200px] w-full mx-auto md:text-[19px]  xsm:text-[18px]
    //  "
    //         >
    //           <div className=" w-full flex xsm:flex-col sm:flex-col lg:flex-row items-center justify-center xsm:gap-0 md:gap-10">
    //             <div className="flex items-center gap-10 xsm:w-full   h-[350px]  border px-8  md:rounded-xl xsm:border-none bg-purple-400 text-white  ">
    //               <img src={daily} alt="high five" className="w-[80px]" />

    //               <ul className="flex flex-col gap-2 font-bold ">
    //                 <li>
    //                   Gestion du stress, de l’anxiété, des émotions, <br />
    //                   Burn-out, Concentration, Mémoire
    //                 </li>
    //                 <li>Sommeil</li>
    //                 <li>Confiance en soi, estime de soi</li>
    //                 <li>Relation à soi et aux autres</li>
    //               </ul>
    //             </div>
    //             <div className="flex items-center gap-10 xsm:w-full   h-[350px] border px-8  md:rounded-xl xsm:border-none bg-green-400 text-white  ">
    //               <img src={paths} alt="high five" className="w-[80px]" />

    //               <ul className="flex flex-col gap-2 font-bold">
    //                 <li> Examens, concours</li>
    //                 <li> Permis de conduire, au permis moto…</li>
    //                 <li>A travers une scolarité difficile</li>
    //                 <li>Pour accompagner le sportif, l’artiste…</li>
    //               </ul>
    //             </div>
    //           </div>
    //           <div className="w-full flex xsm:flex-col sm:flex-col lg:flex-row items-center  justify-center xsm:gap-0 md:gap-10">
    //             {" "}
    //             <div className="flex items-center gap-10 xsm:w-full   h-[350px]  border px-8  md:rounded-xl xsm:border-none bg-blue-400 text-white  ">
    //               <img src={health} alt="high five" className="w-[80px]" />
    //               <ul className="flex flex-col gap-2 font-bold">
    //                 <li>A travers la maladie, fibromyalgie, cancer…</li>
    //                 <li>Gestion de la douleur, douleurs post-opératoire …</li>
    //                 <li>Gestion des phobies, des peurs, des colères</li>
    //                 <li>Troubles alimentaires, pulsions alimentaires</li>
    //                 <li>Accompagnement vers un changement important</li>
    //               </ul>
    //             </div>
    //             <div className="flex items-center gap-10 xsm:w-full    h-[350px]  border px-8  md:rounded-xl xsm:border-none bg-orange-400 text-white  ">
    //               <img src={etc} alt="etc box" className="w-[80px]" />

    //               <ul className="flex flex-col gap-2 font-bold">
    //                 <li>Futurs parents</li>
    //                 <li>Départ à la retraite, déménagement</li>
    //                 <li>Projets professionnels</li>
    //                 <li>Deuil</li>
    //                 <li>Divorce</li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
  );
};
