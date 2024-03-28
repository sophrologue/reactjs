import { useState } from "react";
import { Html } from "@react-email/html";
import { Button } from "@react-email/button";

export const MailPageTest = (props) => {
  const { url } = props;

  const [bodyText, setBodyText] = useState("");
  return (
    <div className="flex flex-col gap-4 items-center justify-center mx-auto w-full">
      <input type="text" placeholder="email" className="bg-gray-200 p-2" />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        className="bg-gray-200 h-[400px w-[400px] p-2"
      />
      <button className="p-4 bg-blue-400 text-white rounded-xl">
        Send mail
      </button>

      <Html lang="en">
        <Button href={url}>Click me</Button>
      </Html>
    </div>
  );
};
