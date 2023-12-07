import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameObject = {
      name: newName,
      id: persons.length + 1,
    };

    persons.map((person) => person.name === newName)
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(nameObject));

    setNewName("");
  };

  // console.log(
  //   "array of persons",
  //   persons
  //     .map((person) => person.name)
  //     .forEach((element) => console.log("name of person", element))
  // );

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
