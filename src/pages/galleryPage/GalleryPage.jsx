import Container from "../../components/container/Container";
import Grid from "../../components/grid/Grid.module";
import PictureCard from "./components/PictureCard/PictureCard";
import GalleryTopic from "./components/galleryTopic/GalleryTopic";
import styles from "../../components/button/Button.module.css";
import style from "./GalleryPage.module.css";
import containerStyle from "../../components/container/container.module.css";
import { useImageData } from "./service/useImageData";
import { SiWolfram } from "react-icons/si";

const GalleryPage = ({getArtwork}) => {
  const { artworkData, errMessage, loading, nextPage } = useImageData();

  console.log(`galleryPage artworkData `,artworkData)
  if(artworkData) {
    getArtwork(artworkData);
  }
  // getArtwork(artworkData);

  return (
    <div className={containerStyle.root}>
      <GalleryTopic />
      <Container>
        {errMessage ? (
          <h2>{errMessage}</h2>
        ) : (
          <Grid columns={3}>
            {artworkData?.map((artwork) => {
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
        )}

        {loading ? (
          <div className={style.icon_container}>
            <SiWolfram className={style.icons} />
          </div>
        ) : (
          <div className={styles.root}>
            <button type="button" className={styles.button} onClick={nextPage}>
              Load next 6
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};
export default GalleryPage;
