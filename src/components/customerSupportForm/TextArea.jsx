const Textarea = ({ placeholder, label, onChange, Id, Error }) => {
  return (
    <div>
      <label htmlFor={Id}>{label}</label>
      <textarea name={label} id={Id} cols="30" rows="15">
        {placeholder}
      </textarea>
    </div>
  );
};

export default Textarea;
