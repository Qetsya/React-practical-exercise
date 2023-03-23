import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getArtist } from "./servise/getArtist";
import { getSimilarArtworks } from "./servise/getSimilarArtworks";

import styles from "../galleryPage/GalleryPage.module.css";
import style from "./ArtworkPage.module.css";
import { SiWolfram } from "react-icons/si";

const ArtworkPage = ({ passArtworkData }) => {
  const [loading, setLoading] = useState(false);
  const [artistData, setArtistData] = useState();
  const [similarArtworks, setSimilarArtworks] = useState();
  const [selectedDimensions, setSelectedDimensions] = useState("centimeters");
  const { id } = useParams();

  const artwork = passArtworkData.find((item) => item.id === id);

  const handleLoad = async () => {
    setLoading(true);
    await getArtist(id).then((artistResponse) =>
      setArtistData(artistResponse._embedded.artists[0])
    );
    await getSimilarArtworks(id).then((similarArtworksResponse) =>
      setSimilarArtworks(similarArtworksResponse._embedded.artworks)
    );
    setLoading(false);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const handleSelectChange = (event) => {
    const select = event.target.value;
    setSelectedDimensions(select);
  };

  return (
    <div className={style.root}>
      {loading ? (
        <div className={styles.icon_container}>
          <SiWolfram className={styles.icons} />
        </div>
      ) : (
        <div className={style.root}>
          <div className={style.main_art}>
            <img
              className={style.main_art_image}
              src={artwork._links.image.href.replace(
                "{image_version}",
                "large"
              )}
              alt={artwork.title}
            />
          </div>

          <div className={style.image_info}>
            <h2 className={style.image_title}>{artwork.title}</h2>
            <p className={style.image_sub_info}>{artwork.date}</p>
            <p className={style.image_sub_info}>
              Artwork Category: {artwork.category}
            </p>
          </div>

          <div className={style.art_additional_info_container}>
            <div>
              <img
                src={artwork._links.image.href.replace(
                  "{image_version}",
                  "medium"
                )}
                alt={artwork.title}
              />
            </div>

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
                    ? artwork.dimensions.cm.text
                    : artwork.dimensions.in.text}
                </p>
              </div>

              <p>Collecting Institution: {artwork.collecting_institution}</p>
              <div>
                <h3>About Author</h3>
                <p>Author: {artistData?.name}</p>
                <p>Birthday : {artistData?.birthday}</p>
                <p>Nationality: {artistData?.nationality}</p>
              </div>
            </div>
          </div>

          <h3 className={style.similar_art_title}>Similar Artworks</h3>
          <div className={style.similar_art_images}>
            {similarArtworks?.map((artwork) => {
              return (
                <div className={style.similar_art_container}>
                  <img
                    src={artwork._links.image.href.replace(
                      "{image_version}",
                      "small"
                    )}
                    alt={artwork.title}
                    key={artwork.id}
                    className={style.similar_art_img}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtworkPage;
