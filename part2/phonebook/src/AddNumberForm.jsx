import InputField from "./InputField";
const AddNumberForm = ({
  valueName,
  onChangeName,
  valueNumber,
  onChangeNumber,
  onSubmit,
}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <InputField
            id="name"
            labelText="name:"
            value={valueName}
            onChange={onChangeName}
          />
        </div>
        <div>
          <InputField
            id="name"
            labelText="number:"
            value={valueNumber}
            onChange={onChangeNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default AddNumberForm;
