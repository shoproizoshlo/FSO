import InputField from "./InputField";

const FindName = ({ value, onChange }) => {
  return (
    <>
      <InputField
        id="search"
        labelText="find name:"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default FindName;
