import Heading from "./Heading";

const AddNewNumber = ({
  addPerson,
  newName,
  newNumber,
  setNewName,
  setNewNumber,
}) => {
  return (
    <>
      <Heading text="Add new number" />
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={({ target }) => setNewName(target.value)}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={({ target }) => setNewNumber(target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default AddNewNumber;
