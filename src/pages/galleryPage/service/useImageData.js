import { useState, useEffect } from "react";

export const useImageData = () => {
    const [artworkData, setArtworkData] = useState([]);
    const [url, setUrl] = useState(
        "https://api.artsy.net/api/artworks?total_count=1&size=6"
    );
    const [errMessage, setErrMessage] = useState("");
    const [loading, setloading] = useState(false);

    const nextPage = async () => {
        setloading(true);
        await fetch(url, {
            method: "GET",
            headers: {
                "X-Xapp-Token":
                    "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2NDBhMmZiYTlmOWI0MTAwMGU0NjAwMGMiLCJleHAiOjE2Nzk5ODU3NjgsImlhdCI6MTY3OTM4MDk2OCwiYXVkIjoiNjQwYTJmYmE5ZjliNDEwMDBlNDYwMDBjIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY0MTk1MWU4NWQ1YjVmMDAwY2Y3MzdlNyJ9.MjD4FFk4x7R26z2dbwo6ZrZD_ipRsmDWhqvgN69xmw4",
            },
        })
            .then((response) => response.json())
            .then((imageData) => {
                // console.log("nextPage - imageData: ", imageData);
                setArtworkData([...artworkData, ...imageData._embedded.artworks]);
                setUrl(imageData._links.next.href);
            })
            .catch(() =>
                setErrMessage("Something went wrong, please reload the page.")
            );
        setloading(false);
    }

    useEffect(() => {
        nextPage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { artworkData, errMessage, loading, nextPage };
};