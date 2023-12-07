import { useState } from "react";
import FindName from "./FindName";
import AddNewNumber from "./AddNewNumber";
import Heading from "./Heading";
import InputField from "./InputField";
import NumbersList from "./NumbersList";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };
  const handleSearchChange = (e) => {
    setSearchName(e.target.value.toLowerCase());
    setShowAll(!e.target.value.toLowerCase());
  };

  const numberToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().startsWith(searchName)
      );

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    if (
      persons.some(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(nameObject));
      setNewName("");
      setNewNumber("");
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <FindName value={searchName} onChange={handleSearchChange} />

      <AddNewNumber
        onSubmit={handleSubmit}
        valueName={newName}
        onChangeName={handleNameChange}
        valueNumber={newNumber}
        onChangeNumber={handleNumberChange}
      />

      <form onSubmit={handleSubmit}>
        <div>
          <InputField
            id="name"
            labelText="name:"
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <InputField
            id="name"
            labelText="number:"
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Heading text="Numbers" />
      <ul>
        <NumbersList
          list={numberToShow.map((person) => (
            <li key={person.name}>
              {person.name} {person.number}
            </li>
          ))}
        />
      </ul>
    </div>
  );
};

export default App;
