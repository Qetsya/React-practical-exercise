import React from "react";
import style from "./container.module.css";

const Container = ({ children }) => {
  return <div className={style.root}>{children}</div>;
};

export default Container;
