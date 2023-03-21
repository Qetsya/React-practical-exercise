import { useState } from "react";
import style from "./CustomerForm.module.css";

const Input = ({ placeholder, type, label, Id, error, onChange, value }) => {
  const [inputValue, setInputValue] = useState("");

  const getValue = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    // console.log("Input - getValue is " + newValue);
    onChange?.(newValue);
  };

  return (
    <div className={style.root}>
      {{ label } && (
        <label 
        className={
          error ? `${style.label} ${style.activeLabelError}` : `${style.label}`
        }
         htmlFor={Id}>
          {label}
        </label>
      )}
      <input
        onChange={getValue}
        type={type}
        value={value}
        placeholder={placeholder}
        label={label}
        id={Id}
        error={error}
        className={
          error ? `${style.input} ${style.activeError}` : `${style.input}`
        }
      />
    </div>
  );
};

export default Input;
