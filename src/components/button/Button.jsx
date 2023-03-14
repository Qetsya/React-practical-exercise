import style from "./Button.module.css"
import { useState } from "react";

const Button = (props) => {
  const [buttonText, setButtonText] = useState("Learn more");



  const changeButtonText = () => {
   const next = buttonText === "Learn more"
      ? "Show less"
      : "Learn more";
      setButtonText(next);
      props.onClick(next);
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