import { useEffect } from "react";
import { useState } from "react";
import Container from "../../components/container/Container";
import Grid from "../../components/grid/Grid.module";
import Image from "../../components/Image/Image";

const dataUrl = "https://picsum.photos/v2/list";

function getImages() {
  return fetch(dataUrl).then((res) => res.json()); //then metodas
}

const GalleryPage = () => {
  const [imageList, setImageList] = useState([]);
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    getImages()
      .then((imageData) => setImageList(imageData))
      .catch(() => setErrMessage("Something went wrong"));
  }, []);

  return (
    <div>
      <p>Gallery Page</p>
      <Container>
        {errMessage && <h1>{errMessage}</h1>}
        {!errMessage && (
          <Grid columns={3}>
            {imageList.map(({ download_url, author, id }) => {
              return (
                <Image src={download_url} alt={author} key={author + id} />
              );
            })}
          </Grid>
        )}
      </Container>
    </div>
  );
};
export default GalleryPage;
