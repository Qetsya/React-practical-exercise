import data from "./data/image_list.json"
import { useState } from "react";
import Layout from "./components/layout/Layout";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import GalleryPage from "./pages/galleryPage/GalleryPage";
import CustomerSupportPage from "./pages/customerSupportPage/CustomerSupportPage";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const getActivePage = (value) => {
    setActivePage(value);
  };

  return (
    <div>
      <Navbar onChange={getActivePage} />
      <Layout>
        {activePage === "Home" && <HomePage />}
        {activePage === "Gallery" && <GalleryPage />}
        {activePage === "Customer support" && <CustomerSupportPage />}
      </Layout>
    </div>
  );
}

export default App;
