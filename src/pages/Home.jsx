import { Card } from "../components/Card";
import { Career } from "../components/Career";
import { Hero } from "../components/Hero";
import { MyStory } from "../components/MyStory";

export const Home = () => {
  // const accountId = import.meta.env.VITE_APP_BUSINESS_ID;
  // const locationId = import.meta.env.VITE_APP_LOCATION_ID;
  // const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY;

  return (
    <div className=" flex flex-col w-screen md:max-w-[70rem] xsm:w-full  mx-auto  ">
      {/* <h1>Sophrologie</h1> */}

      <Hero />

      {/* <hr className="mb-4 w-full border-t border-gray-300" /> */}
      <Career />
      <hr className="mb-4 w-full border-t border-gray-300" />
      <Card />
      <hr className="mb-4 w-full border-t border-gray-300" />
      <MyStory />
    </div>
  );
};
