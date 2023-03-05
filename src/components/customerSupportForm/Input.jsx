import { useState } from "react";
import style from "./CustomerForm.module.css";

const Input = ({ placeholder, type, label, Id, error, onChange }) => {
  const [value, setValue] = useState("");

  const getValue = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    // console.log("Input - getValue is " + newValue);
    onChange?.(newValue);
    return newValue;
  };

  return (
    <div className={style.root}>
      {{label} && <label className={style.label} htmlFor={Id}>{label}</label>}

      <input
        onChange={getValue}
        type={type}
        value={value}
        placeholder={placeholder}
        label={label}
        id={Id}
        error={error}
        className={style.input}
      />
        {/* {value === "" ? (<p>{error}</p>) : false} */}

    </div>
  );
};

export default Input;
