import { useState, useEffect } from "react";
import axios from "axios";
import FindName from "./FindName";
import AddNewNumber from "./AddNewNumber";
import Numbers from "./Numbers";

const App = () => {
  const [persons, setPersons] = useState([
    // { name: "Arto Hellas", number: "040-123456", id: 1 },
    // { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    // { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    // { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);
  console.log("render", persons.length, "persons");

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

      <Numbers
        list={numberToShow.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      />
    </div>
  );
};

export default App;
