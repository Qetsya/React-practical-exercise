import styles from "./Image.module.css";
const Image = ({ src, alt }) => {
  return (
    <div className={styles.root}>
      <img className={styles.image} src={src} alt={alt} />
    </div>
  );
};

export default Image;
