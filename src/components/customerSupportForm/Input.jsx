const Input = ({ placeholder, type, label, onCHange, Id, error }) => {
  return (
    <div>
      <label htmlFor={Id}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        label={label}
        id={Id}
        error={error}
      />
    </div>
  );
};

export default Input;
