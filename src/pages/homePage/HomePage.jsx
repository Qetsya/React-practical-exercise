import { useState } from "react";
import Topic from "../../components/topic/Topic";
import Button from "../../components/button/Button";
import LearnMoreTopic from "../../components/learnMoreTopic/LearnMoreTopic";

const HomePage = () => {
  const [buttonText, setButtonText] = useState("Show less");

  const changeContent = (value) => {
    const buttonValue = value;
    setButtonText(buttonValue);
  };

  return (
    <div className="home-page-container">
      {buttonText === "Learn more" && <Topic />}
      {buttonText === "Show less" && <LearnMoreTopic />}
      <Button onClick={changeContent} />
    </div>
  );
};

export default HomePage;
