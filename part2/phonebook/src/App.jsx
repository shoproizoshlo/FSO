import { useState, useEffect } from "react";
import axios from "axios";
import personService from "./services/persons";
import FindName from "./FindName";
import AddNewNumber from "./AddNewNumber";
import Numbers from "./Numbers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [showAll, setShowAll] = useState(true);

  // useEffect(() => {
  //   console.log("effect");
  //   axios.get("http://localhost:3001/persons").then((response) => {
  //     console.log("promise fulfilled");
  //     setPersons(response.data);
  //   });
  // }, []);
  // console.log("render", persons.length, "persons");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

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

    personService.create(nameObject).then((returnedPerson) => {
      console.log(returnedPerson.name);
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });

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

  const handleDeletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(person.id)
        .then(() => {
          setPersons((prevPersons) =>
            prevPersons.filter(
              (currentPerson) => currentPerson.id !== person.id
            )
          );
        })
        .catch((err) => {
          console.error("Error deleting person:", err);
        });
    }
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
          <li key={person.id}>
            {person.name} {person.number}
            <button onClick={() => handleDeletePerson(person)}>delete</button>
          </li>
        ))}
      />
    </div>
  );
};

export default App;
