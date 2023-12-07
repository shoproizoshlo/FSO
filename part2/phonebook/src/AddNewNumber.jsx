import Heading from "./Heading";
import AddNumberForm from "./AddNumberForm";

const AddNewNumber = ({
  onSubmit,
  valueName,
  onChangeName,
  valueNumber,
  onChangeNumber,
}) => {
  return (
    <>
      <Heading text="Add new number" />
      <AddNumberForm
        onSubmit={onSubmit}
        valueName={valueName}
        onChangeName={onChangeName}
        valueNumber={valueNumber}
        onChangeNumber={onChangeNumber}
      />
    </>
  );
};

export default AddNewNumber;
