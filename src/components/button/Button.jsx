import styles from "./button.css"
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
    <div className="button-container" style={styles}>
      <button type="button" className="button-style" onClick={changeButtonText} style={styles}>
      {buttonText}
    </button>
    </div>

  );
};

export default Button;