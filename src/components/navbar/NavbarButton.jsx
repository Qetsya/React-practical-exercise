import styles from "./navbar.css"
const NavbarButton = (props) => {
  return (
    <button
    style={styles}
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
