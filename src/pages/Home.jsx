import { Hero } from "../components/Hero";
import societyImg from "../assets/thesocietyimg.jpeg";

import SophrologieFactsContainer from "../components/SophrologieFactsContainer";
import AboutMeContainer from "../components/AboutMeContainer";

export const Home = () => {
  return (
    <main style={{ scrollbarWidth: "thin" }}>
      <>
        <Hero />
        <div className="xsm:hidden md:block  ">
          <div className="h-[200px] flex items-center justify-center">
            <img src={societyImg} alt="society logo" className=" mx-auto" />
          </div>
        </div>
        <AboutMeContainer />

        <section className="h-[201px] text-center bg-white flex items-center justify-center">
          <h1 className=" xsm:text-[32px] md:text-[48px] text-[#555] font-bold">
            AMELIORER SON QUOTIDIEN
          </h1>
        </section>
        <SophrologieFactsContainer />
      </>
    </main>
  );
};
