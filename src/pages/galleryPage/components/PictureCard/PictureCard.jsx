import styles from "./PictureCard.module.css";
const PictureCard = ({ src, alt }) => {
  return (
    <div className={styles.root}>
      <div className={styles.author_container}>
        <p className={styles.author}>{alt}</p>
      </div>
      <div className={styles.container}>
        <img className={styles.image} src={src} alt={alt} />
      </div>
    </div>
  );
};

export default PictureCard;
