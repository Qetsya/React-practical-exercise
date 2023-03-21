import { useMemo, useState } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import GalleryPage from "./pages/galleryPage/GalleryPage";
import CustomerSupportPage from "./pages/customerSupportPage/CustomerSupportPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import { routes } from "./components/constants/routes";
import ArtworkPage from "./pages/ArtworkPage/ArtworkPage";

function App() {
  const [artworkArray, setArtwokArray] = useState([]);

  const headerLinks = useMemo(() => {
    return [
      {
        to: routes.homePage,
        label: "Home",
      },
      {
        to: routes.gallery,
        label: "Gallery",
      },
      {
        to: routes.customerSupport,
        label: "Customer support",
      },
    ];
  }, [])

const artworkData = async (value) => {
  const data = await value;
  setArtwokArray(data);
  console.log(`app getArtwork`, artworkArray)
}

  return (
    <div>
      <Navbar pages={headerLinks} />
      <Layout >
        <Routes>
          <Route path={routes.homePage} element={<HomePage />} />
          <Route path={routes.gallery} element={<GalleryPage getArtwork={artworkData}/>} />
          <Route path={routes.customerSupport} element={<CustomerSupportPage />} />
          <Route path={routes.artworkPage} element={<ArtworkPage passArtworkData={artworkArray} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
