import { useState } from "react";

const NavbarButton = (props) => {
  return (
    //padaryt 1 priima label ir onClick
    <button
      label="home"
      className="navbar-button-style"
      id="home-btn"
      type="button"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default NavbarButton;
