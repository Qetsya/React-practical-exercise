const getArtist = (id) => {
    fetch(`https://api.artsy.net/api/artists?artwork_id=${id}`, {
                method: "GET",
                headers: {
                    "X-Xapp-Token":
                        "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2NDBhMmZiYTlmOWI0MTAwMGU0NjAwMGMiLCJleHAiOjE2NzkzMTQ4ODcsImlhdCI6MTY3ODcxMDA4NywiYXVkIjoiNjQwYTJmYmE5ZjliNDEwMDBlNDYwMDBjIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY0MGYxNTQ3MWNiOWM2MDAwYzNlNjYwMCJ9.HokRaOx-XuLwif29hOy_nxR6wdUJ-HRf7JT96aI7WMo",
                },
            })
                .then((response) => response.json())
}


// import { useState } from "react";

// export const getArtist = () => {
//     const [artworkData, setArtworkData] = useState([]);
//     const [errMessage, setErrMessage] = useState("");
//     const [loading, setloading] = useState(false);

//      const dataUrl =  "https://api.artsy.net/api/artists?artwork_id={artwork_id}"


// const nextPage = async () => {
//     setloading(true);
//     await fetch(url, {
//         method: "GET",
//         headers: {
//             "X-Xapp-Token":
//                 "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2NDBhMmZiYTlmOWI0MTAwMGU0NjAwMGMiLCJleHAiOjE2NzkzMTQ4ODcsImlhdCI6MTY3ODcxMDA4NywiYXVkIjoiNjQwYTJmYmE5ZjliNDEwMDBlNDYwMDBjIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY0MGYxNTQ3MWNiOWM2MDAwYzNlNjYwMCJ9.HokRaOx-XuLwif29hOy_nxR6wdUJ-HRf7JT96aI7WMo",
//         },
//     })
//         .then((response) => response.json())
//         .then((imageData) => {
//             // console.log("nextPage - imageData: ", imageData);
//             setArtworkData([...artworkData, ...imageData._embedded.artworks]);
//             setUrl(imageData._links.next.href);
//         })
//         .catch(() =>
//             setErrMessage("Something went wrong, please reload the page.")
//         );
//     setloading(false);
// }
// }