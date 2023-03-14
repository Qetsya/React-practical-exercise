import { useEffect } from "react";
import { useState } from "react";
import Container from "../../components/container/Container";
import Grid from "../../components/grid/Grid.module";
import Image from "../../components/Image/Image";
import GalleryTopic from "../../components/galleryTopic/GalleryTopic";
import styles from "../../components/button/Button.module.css"

const dataUrl = "https://api.artsy.net/api/artworks?total_count=1&size=6";

function getImages() {
  return fetch(dataUrl, {
    method: "GET",
    headers: {
      "X-Xapp-Token":
        "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2NDBhMmZiYTlmOWI0MTAwMGU0NjAwMGMiLCJleHAiOjE2NzkzMTQ4ODcsImlhdCI6MTY3ODcxMDA4NywiYXVkIjoiNjQwYTJmYmE5ZjliNDEwMDBlNDYwMDBjIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY0MGYxNTQ3MWNiOWM2MDAwYzNlNjYwMCJ9.HokRaOx-XuLwif29hOy_nxR6wdUJ-HRf7JT96aI7WMo",
    },
  }).then((response) => response.json());
};

function onNextPage(list) {
  return fetch(list._links.next.href, {
    header: {
      "X-Xapp-Token":
        "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2NDBhMmZiYTlmOWI0MTAwMGU0NjAwMGMiLCJleHAiOjE2NzkzMTQ4ODcsImlhdCI6MTY3ODcxMDA4NywiYXVkIjoiNjQwYTJmYmE5ZjliNDEwMDBlNDYwMDBjIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY0MGYxNTQ3MWNiOWM2MDAwYzNlNjYwMCJ9.HokRaOx-XuLwif29hOy_nxR6wdUJ-HRf7JT96aI7WMo",
    }
  })
  .then((response) => response.json())
}


const GalleryPage = () => {
  const [imageList, setImageList] = useState();
  const [errMessage, setErrMessage] = useState("");

  // console.log(getImages())
  useEffect( () => {
   getImages()
      .then((dataObject) => setImageList(dataObject))
      .then((dataObject) => console.log(dataObject))
      .catch(() => setErrMessage("Something went wrong, please reload the page."));
      
  }, []);

  function nextPage() {
    console.log(imageList)//undefined
    onNextPage(imageList)
    .then((imageData) => setImageList(imageData))
    .then((imageData, imageList) => console.log(imageData, imageList))
    .catch(() => setErrMessage("Something went wrong, please reload the page."));
  };

  return (
    <div>
      <GalleryTopic />
      <Container>
        {errMessage && <h1>{errMessage}</h1>}
        {!errMessage && (
          <Grid columns={3}>
            {imageList?._embedded.artworks.map((artwork) => {
              return (
                <Image src={artwork._links.image.href.replace("{image_version}", "medium")} alt={artwork.title} key={artwork.id} />
              );
            })}
          </Grid>
        )}
        <div className={styles.root}>
        {!errMessage && <button type="button" className={styles.button} onClick={nextPage}>Next page</button>}
        </div>
      </Container>
    </div>
  );
};
export default GalleryPage;
