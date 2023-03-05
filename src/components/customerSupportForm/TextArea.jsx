import { useState } from "react";

import style from "./CustomerForm.module.css"

const Textarea = ({ placeholder, label, Id, error, onChange }) => {

  const [value, setValue] = useState("");

  const getValue = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    // console.log("Textarea - getValue is " + newValue);
    return newValue;
  };

  return (
    <div className={style.root}>
{      {label} && <label className={style.label} htmlFor={Id}>{label}</label>}
      <textarea
        onChange={onchange?.(getValue)}
        label={label}
        id={Id}
        cols="30"
        rows="15"
        placeholder={placeholder}
        error={error}
        className={style.input}
      ></textarea>
    </div>
  );
};

export default Textarea;
