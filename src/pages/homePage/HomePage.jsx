import { useState } from "react";
import Topic from "../../components/topic/Topic";
import Button from "../../components/button/Button";
import LearnMoreTopic from "../../components/learnMoreTopic/LearnMoreTopic";

const HomePage = () => {
  const [buttonText, setButtonText] = useState("Learn more");

  const changeContent = (value) => {
    console.log(value);
    const buttonValue = value;
    setButtonText(buttonValue);
  };

  return (
    <div className="home-page-container">
      <Topic />
      {buttonText === "Show less" && <LearnMoreTopic />}
      <Button onClick={changeContent} />
    </div>
  );
};

export default HomePage;
