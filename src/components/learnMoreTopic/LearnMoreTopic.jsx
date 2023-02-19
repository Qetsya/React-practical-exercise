import topicStyle from "../topic/topic.css"

const LearnMoreTopic = () => {
  return (
    <div className="topic-container" id="topic-container-learn-more" style={topicStyle}>
      <h2 className="topic-title">What is Modern Art Museum?</h2>
      <p className="topic-text">
        One of the largest private virtual art collections, the museum
        collection consists of artworks dating from the 1960s to this day. It
        includes around 6 000 works of modern and contemporary art. In 2011 the
        collection was officially recognized as being of “national
        significance.”
      </p>
    </div>
  );
};

export default LearnMoreTopic;
