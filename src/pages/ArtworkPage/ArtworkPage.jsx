import { useParams } from "react-router";
import { useState } from "react";

const ArtworkPage = ({passArtworkData}) => {
  // const [loading, setLoading] = useState();
  const {id} = useParams();
  // console.log(`artworkPage passed data `, passArtworkData)
  const artwork = passArtworkData.find((item) => item.id === id);

  const url = http://api.artsy.net/api/artists?artwork_{artwork.id}={artwork.id}

  return (
    <>
      <h3>{artwork.title}</h3>
      <p>{artwork.date}</p>
      <p>Artwork Category: {artwork.category}</p>
      <select name="Dimensions">
        <option value="inches">Inches</option>
        <option value="centimeters">Centimeters</option>
      </select>
      <p>Artwork Dimensions: {artwork.dimensions.cm.text}</p>
      <p>Collecting Institution: {artwork.collecting_institution}</p>
      <p>Author: {artwork._links.artists.href}</p>
    </>
  );
};

export default ArtworkPage;
