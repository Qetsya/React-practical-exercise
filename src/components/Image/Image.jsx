import styles from "./Image.module.css";
const Image = ({ src, alt }) => {
  return (
    <div>
      <p className={styles.author}>{alt}</p>
    <div className={styles.root}>
      <img className={styles.image} src={src} alt={alt} />
    </div>
    </div>
  );
};

export default Image;
