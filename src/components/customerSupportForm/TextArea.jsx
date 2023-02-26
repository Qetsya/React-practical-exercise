const Textarea = ({ placeholder, label, Id, Error }) => {
  const getValue = (e) => {
    const value = e.target.value;
    return value;
  };

  return (
    <div>
      <label htmlFor={Id}>{label}</label>
      <textarea
        onChange={getValue}
        name={label}
        id={Id}
        cols="30"
        rows="15"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default Textarea;
