import { useState } from "react";
// import HiddenTopic from "../components/HiddenTopic";

const Button = () => {
  const [buttonText, setButtonText] = useState("Learn more");

  const change Content = () => {
    buttonText === "Learn more"
      ? setButtonText("Show less")
      : setButtonText("Learn more");

    {
      buttonText === "Show less" && <p>test</p>;
    }
  };

  return (
    <button type="button" className="button-style" onClick={changeContent}>
      {buttonText}
    </button>
  );
};

export default Button;
