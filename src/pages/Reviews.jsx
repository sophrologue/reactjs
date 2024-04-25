import { useEffect, useState } from "react";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("../../public/reviews.json");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);
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
          target="_blank"
          href="_https://www.google.com/search?sca_esv=588364199&sxsrf=AM9HkKk1Po2jNOC2QoCiIuUS-7aOCwuwjQ:1701869282346&q=Catherine+Fabrici+sophrologue+Wellness+program+in+Le+Malesherbois,+France&si=ALGXSlZxBBDAx2AHKeMOj5-1VEN5S7cHqdh2fch2yZlxm0ucj7afXmqTJ_wFZr4uQtZZVIdqWucuMF3kP0u29S_WMkJxm16wPfInmczCBzxQQwAX3IedcKgZzuuRWwjmaXsHuZUigyfLLOqfBZVtXlEBVJhkVlrhzinJYcTGt216ZjsjQZfCJV7TLifbO2uW5zyahNxv4fIVNHHJJK1UvP0h7gMUF0rGCqLcaqUVI0LcFaE9fotnng75kWNsAOg5duXLIfAL_ICy9x9pLVSf5EHqVHgb24sIIocv15DYXF1cEtlrm3lPXKw%3D&sa=X&ved=2ahUKEwjr1JyQ9fqCAxUIffUHHb_vBMwQ6RN6BAgMEAE&biw=2111&bih=928&dpr=0.9#lrd=0x47e595fc0f090e9b:0x40983a268fe4ed9d,1,,,,"
          rel="noreferrer"
          className="p-4  w-[800px] h-[60px] rounded-xl bg-green-500 hover:bg-blue-500 border  text-white"
        >
          {" "}
          Écrire un avis sur Google
        </a>
      </button>
      <div className="w-full ">
        {reviews.map((review) => {
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
