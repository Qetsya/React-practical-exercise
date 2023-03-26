import { useMemo } from "react";
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
import { navbarLinks } from "./components/navbar/navbarLinks/navbarLinks";

function App() {

  const links = useMemo(() => navbarLinks, []);

  return (
    <div>
      <Navbar pages={links} />
      <Layout >
        <Routes>
          <Route path={routes.homePage} element={<HomePage />} />
          <Route path={routes.gallery} element={<GalleryPage />} />
          <Route path={routes.artworkPage} element={<ArtworkPage />} />
          <Route path={routes.customerSupport} element={<CustomerSupportPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
