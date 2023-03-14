import styles from "./Image.module.css";
const Image = ({ src, alt }) => {
  return (
    <div className={styles.root}>
      <p className={styles.author}>{alt}</p>
    <div className={styles.container}>
      <img className={styles.image} src={src} alt={alt} />
    </div>
    </div>
  );
};

export default Image;
