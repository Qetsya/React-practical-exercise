import layoutStyle from "./layout.css"

const Layout = ({ children }) => {
  return <div className="layout-style" style={layoutStyle}>{children}</div>;
};

export default Layout;
