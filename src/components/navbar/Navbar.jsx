import styles from "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = ({ pages }) => {
  return (
    <div className="navbar-style" style={styles}>
      <div className="navbar-logo" style={styles}>
        WELCOME
      </div>
      <div className="navbar-link-container" style={styles}>
        {pages?.map((page) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active navbar-link-style" : "navbar-link-style"
              }
              key={page.to}
              to={page.to}
            >
              {page.label}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
