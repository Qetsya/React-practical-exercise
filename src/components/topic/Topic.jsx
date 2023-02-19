import styles from "./topic.css"
const Topic = () => {
  return (
    <div className="topic-container" style={styles}>
      <h1 className="topic-title"  style={styles}>Welcome to Modern Art Museum</h1>
      <p className="topic-text" style={styles}>
        An exceptional opportunity to experience – and meet! – the works of
        world-renowned artists, such as Guerrilla Girls, Andy Warhol, Yves Klein
        and the others!
      </p>
    </div>
  );
};

export default Topic;
