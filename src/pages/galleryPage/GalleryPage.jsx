import Container from "../../components/container/Container";
import Grid from "../../components/grid/Grid.module";
import PictureCard from "./components/PictureCard/PictureCard";
import GalleryTopic from "./components/galleryTopic/GalleryTopic";
import styles from "../../components/button/Button.module.css";
import style from "./GalleryPage.module.css";
import containerStyle from "../../components/container/container.module.css";
import { useImageData } from "./service/useImageData";
import { SiWolfram } from "react-icons/si";

const GalleryPage = () => {
  const { artworkData, errMessage, loading, nextPage } = useImageData();

  if (loading) {
    return (
      <div className={style.icon_container}>
        <SiWolfram className={style.icons} />
      </div>
    );
  }

  if (errMessage) {
    return <h2>{errMessage}</h2>;
  }

  return (
    <div className={containerStyle.root}>
      <GalleryTopic />
      <Container>
        <Grid columns={3}>
          {artworkData.map((artwork) => {
            return (
              <PictureCard
                src={artwork._links.image.href.replace(
                  "{image_version}",
                  "medium"
                )}
                alt={artwork.title}
                key={artwork.id}
                id={artwork.id}
              />
            );
          })}
        </Grid>
        <div className={styles.root}>
          <button type="button" className={styles.button} onClick={nextPage}>
            Load next 6
          </button>
        </div>
      </Container>
    </div>
  );
};
export default GalleryPage;
