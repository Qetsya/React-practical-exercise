import NavbarButton from "./NavbarButton";
import { useState } from "react";

const Navbar = () => {
  const [activePage, setActivePage] = useState("Home");
  console.log(activePage);

  const getHomeState = () => {
    setActivePage("Home");
  };

  const getGalleryState = () => {
    setActivePage("Gallery");
  };

  const getCustomerState = () => {
    setActivePage("Customer upport");
  };

  return (
    <div className="navbar-style">
      <div className="navbar-logo">WELCOME</div>
      <div className="navbar-button-container">
        <NavbarButton onClick={getHomeState} label={"Home"} />
        <NavbarButton onClick={getGalleryState} label={"Gallery"} />
        <NavbarButton onClick={getCustomerState} label={"Customer upport"} />
      </div>
    </div>
  );
};

export default Navbar;
