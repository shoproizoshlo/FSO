import Heading from "./Heading";
import InputField from "./InputField";

const FindName = ({ value, onChange }) => {
  return (
    <>
      <Heading text="Phonebook" />
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
