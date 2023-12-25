import { useState, useEffect } from "react";
import axios from "axios";
import personService from "./services/persons";
import Heading from "./Heading";
import FindName from "./FindName";
import AddNewNumber from "./AddNewNumber";
import Numbers from "./Numbers";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState("some error happened...");
  const [errorStatus, setErrorStatus] = useState(false);

  useEffect(() => {
    personService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons);
      })
      .catch((error) => {
        setErrorMessage(`Error getting person ${initialPersons.name}`);
        setErrorStatus(true);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
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

    personService
      .create(nameObject)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setErrorMessage(`${returnedPerson.name} created`);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setNewName("");
        setNewNumber("");
      })
      .catch((error) => {
        setErrorMessage(`Error creating person ${returnedPerson.name}`);
        setErrorStatus(true);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });

    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (existingPerson) {
      if (
        window.confirm(
          `${existingPerson.name} is already added to phonebook. Do you want to update number?`
        )
      ) {
        const url = `http://localhost:3001/notes/${existingPerson.id}`;
        const person = persons.find((p) => p.id === existingPerson.id);
        const changedPerson = { ...person, number: newNumber };
        personService
          .update(existingPerson.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== existingPerson.id ? person : returnedPerson
              )
            );
            setErrorMessage(`${person.name} was changed`);
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          })
          .catch((error) => {
            setErrorMessage(`${person.name} was already deleted from server`);
            setErrorStatus(true);
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
            setPersons(
              persons.filter((person) => person.id !== existingPerson.id)
            );
          });
      } else {
        setPersons(persons.concat(nameObject));
      }
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
          setErrorMessage(`${person.name} deleted`);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        })
        .catch((err) => {
          setErrorMessage(`${person.name} was already deleted from server`);
          setErrorStatus(true);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        });
    }
  };

  return (
    <div>
      <Heading text="Phonebook" />

      <Notification message={errorMessage} errorStatus={errorStatus} />

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
