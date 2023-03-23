export const getSimilarArtworks = (id) => {
    return fetch(`https://api.artsy.net/api/artworks?similar_to_artwork=${id}`, {
        method: "GET",
        headers: {
            "X-Xapp-Token":
                "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2NDBhMmZiYTlmOWI0MTAwMGU0NjAwMGMiLCJleHAiOjE2Nzk5ODU3NjgsImlhdCI6MTY3OTM4MDk2OCwiYXVkIjoiNjQwYTJmYmE5ZjliNDEwMDBlNDYwMDBjIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY0MTk1MWU4NWQ1YjVmMDAwY2Y3MzdlNyJ9.MjD4FFk4x7R26z2dbwo6ZrZD_ipRsmDWhqvgN69xmw4",
        },
    })
        .then((response) => response.json())
};