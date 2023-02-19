import styles from "./navbar.css"
import NavbarButton from "./NavbarButton";
import { useState } from "react";

const Navbar = (props) => {
  const [activePage, setActivePage] = useState("Home");

  const getHomeState = () => {
    setActivePage("Home");
  };

  const getGalleryState = () => {
    setActivePage("Gallery");
  };

  const getCustomerState = () => {
    setActivePage("Customer support");
  };
  
  props.onChange(activePage);

  return (
    <div className="navbar-style" style={styles}>
      <div className="navbar-logo" style={styles}>WELCOME</div>
      <div className="navbar-button-container" style={styles}>
        <NavbarButton onClick={getHomeState} label={"Home"} />
        <NavbarButton onClick={getGalleryState} label={"Gallery"} />
        <NavbarButton onClick={getCustomerState} label={"Customer support"} />
      </div>
    </div>
  );
};

export default Navbar;
