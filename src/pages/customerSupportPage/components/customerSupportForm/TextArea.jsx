import { useState } from "react";

import style from "./CustomerForm.module.css";

const Textarea = ({ placeholder, label, Id, error, onChange }) => {
  const [value, setValue] = useState("");

  const getValue = (e) => {
    // console.log(`Textarea - event value: `, e);
    const newValue = e.target.value;
    setValue(newValue);

    if (onChange) {
      onChange(newValue);
    }

    return newValue;
  };

  return (
    <div className={style.root}>
      {{ label } && (
        <label className={style.label} htmlFor={Id}>
          {label}
        </label>
      )}
      <textarea
        onChange={getValue}
        label={label}
        id={Id}
        cols="30"
        rows="15"
        placeholder={placeholder}
        error={error}
        className={
          error ? `${style.input} ${style.activeError}` : `${style.input}`
        }
      ></textarea>
    </div>
  );
};

export default Textarea;
