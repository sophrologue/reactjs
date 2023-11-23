import img from "../assets/hypnosis.jpg";
// import img2 from "../assets/";
export const SophologyIntroBox = () => {
  return (
    <div className="relative bg-orange-100">
      <img src={img} alt="hyponsis image" className="w-[400px]" />
      <div className="absolute right-5 top-5">
        <button className="text-[40px] bg-white p-4 rounded-xl">
          Qu'est-ce que la sophrologie ?
        </button>
      </div>
    </div>
  );
};
