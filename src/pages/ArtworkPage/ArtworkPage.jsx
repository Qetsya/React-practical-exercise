import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getArtist } from "./service/getArtist";
import { getSimilarArtworks } from "./service/getSimilarArtworks";
import { getArtwork } from "./service/getArtwork";
import styles from "../galleryPage/GalleryPage.module.css";
import style from "./ArtworkPage.module.css";
import { SiWolfram } from "react-icons/si";

const ArtworkPage = () => {
  const [loading, setLoading] = useState(false);
  const [artworkData, setArtworkData] = useState();
  const [artistData, setArtistData] = useState();
  const [similarArtworks, setSimilarArtworks] = useState();
  const [selectedDimensions, setSelectedDimensions] = useState("centimeters");
  const { id } = useParams();

  const handleLoad = async () => {
    setLoading(true);
    await getArtist(id).then((artistResponse) =>
      setArtistData(artistResponse._embedded.artists[0])
    );
    await getSimilarArtworks(id).then((similarArtworksResponse) =>
      setSimilarArtworks(similarArtworksResponse._embedded.artworks)
    );
    await getArtwork(id).then((artworkResponse) => {
      setArtworkData(artworkResponse);
      console.log(artworkResponse);
    });
    setLoading(false);
  };

  useEffect(() => {
    handleLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectChange = (event) => {
    const select = event.target.value;
    setSelectedDimensions(select);
  };

  if (loading) {
    return (
      <div className={styles.icon_container}>
        <SiWolfram className={styles.icons} />
      </div>
    );
  }

  return (
    <div className={style.root}>
      <div className={style.root}>
        <div className={style.main_art}>
          <img
            className={style.main_art_image}
            src={artworkData?._links.image.href.replace(
              "{image_version}",
              "large"
            )}
            alt={artworkData?.title}
          />
        </div>

        <div className={style.image_info}>
          <h2 className={style.image_title}>{artworkData?.title}</h2>
          <p className={style.image_sub_info}>{artworkData?.date}</p>
          <p className={style.image_sub_info}>
            Artwork Category: {artworkData?.category}
          </p>
          <p className={style.image_sub_info}>
            Artwork Medium: {artworkData?.medium}
          </p>
        </div>

        <div className={style.art_additional_info_container}>
          <div className={style.art_additional_info}>
            <div>
              <select
                className={style.select}
                name="Dimensions"
                value={selectedDimensions}
                onChange={handleSelectChange}
              >
                <option value="centimeters">Centimeters</option>
                <option value="inches">Inches</option>
              </select>

              <p>
                Artwork Dimensions:
                {selectedDimensions === "centimeters"
                  ? artworkData?.dimensions.cm.text
                  : artworkData?.dimensions.in.text}
              </p>
            </div>

            <p>Collecting Institution: {artworkData?.collecting_institution}</p>
            <div>
              <h3>About Author</h3>
              <p>Author: {artistData?.name}</p>
              <p>
                Birthday - Deathday : {artistData?.birthday} -{" "}
                {artistData?.deathday}
              </p>
              <p>Nationality: {artistData?.nationality}</p>
            </div>
          </div>
        </div>

        <h3 className={style.similar_art_title}>Similar Artworks</h3>
        <div className={style.similar_art_images}>
          {similarArtworks?.map((artwork) => {
            return (
              <div className={style.similar_art_container} key={artwork?.id}>
                <img
                  src={artwork._links.image.href.replace(
                    "{image_version}",
                    "small"
                  )}
                  alt={artwork?.title}
                  className={style.similar_art_img}
                  id={artwork?.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArtworkPage;
