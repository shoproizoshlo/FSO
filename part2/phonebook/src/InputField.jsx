const InputField = ({ id, labelText, value, onChange }) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input value={value} onChange={onChange} id={id} />
    </>
  );
};

export default InputField;
