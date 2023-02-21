import styles from "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ pages }) => {
  return (
    <div className="navbar-style" style={styles}>
      <div className="navbar-logo" style={styles}>
        WELCOME
      </div>
      <div className="navbar-button-container" style={styles}>
        {pages?.map((page) => {
          return (
            <button style={styles}>
              <Link key={page.to} to={page.to}>
                {page.label}
              </Link>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
