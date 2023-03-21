import { useState } from "react";
import Topic from "../../components/topic/Topic";
import Button from "../../components/button/Button";
import LearnMoreTopic from "../../components/learnMoreTopic/LearnMoreTopic";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [buttonText, setButtonText] = useState();

  const changeContent = (value) => {
    const buttonValue = value;
    setButtonText(buttonValue);
  };

  return (
    <div className={styles.home_page_container}>
      <Topic />
      {buttonText === "Show less" && <LearnMoreTopic />}
      <Button onClick={changeContent} />
    </div>
  );
};

export default HomePage;
