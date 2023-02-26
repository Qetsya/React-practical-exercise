const Input = ({ placeholder, type, label, Id, error }) => {
  const getValue = (e) => {
    const value = e.target.value;
    return value;
  };

  return (
    <div>
      <label htmlFor={Id}>{label}</label>
      <input
        onChange={getValue}
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
