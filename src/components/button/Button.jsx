import style from "./Button.module.css"
import { useState } from "react";

const Button = (props) => {
  const [buttonText, setButtonText] = useState("Learn more");

  const changeButtonText = () => {
    buttonText === "Learn more"
      ? setButtonText("Show less")
      : setButtonText("Learn more");
      props.onClick(buttonText);
  };

  return (
    <div className={style.root}>
      <button type="button" className={style.button} onClick={changeButtonText}>
      {buttonText}
    </button>
    </div>

  );
};

export default Button;