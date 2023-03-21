import styles from "./PictureCard.module.css";
import { Link } from "react-router-dom";

const PictureCard = ({ src, alt, id }) => {
  return (
    <div className={styles.root}>
      <div className={styles.author_container}>
        <p className={styles.author}>{alt}</p>
      </div>
      <div className={styles.container}>
        <Link to={id.toString()}>
          <img className={styles.image} src={src} alt={alt} />
        </Link>
      </div>
    </div>
  );
};

export default PictureCard;
