import { useState, useEffect } from "react";
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
  const [filter, setFilter] = useState("");
  const [info, setInfo] = useState({ message: null });

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

  const notifyWith = (message, type = "info") => {
    setInfo({
      message,
      type,
    });

    setTimeout(() => {
      setInfo({ message: null });
    }, 3000);
  };

  const cleanForm = () => {
    setNewName("");
    setNewNumber("");
  };

  const updatePerson = (person) => {
    if (
      window.confirm(
        `${newName} is already added to phoneebook. Do you want to update number?`
      )
    ) {
      personService
        .update(person.id, { ...person, number: newNumber })
        .then((updatedPerson) => {
          setPersons(
            persons.map((p) => (p.id !== person.id ? p : updatedPerson))
          );

          notifyWith(`phone number of ${person.name} updated!`);
        })
        .catch((error) => {
          notifyWith(`phone number of ${person.name} updated!`);
          console.log(info.message);

          setPersons(persons.filter((p) => p.id !== person.id));
        });

      cleanForm();
    }
  };

  const addPerson = (e) => {
    e.preventDefault();

    const person = persons.find((p) => p.name === newName);

    if (person) {
      updatePerson(person);
      return;
    }

    personService
      .create({ name: newName, number: newNumber })
      .then((createdPerson) => {
        setPersons(persons.concat(createdPerson));

        notifyWith(`${createdPerson.name} added!`);

        cleanForm();
      });
  };

  const removePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.deletePerson(person.id).then(() => {
        setPersons(persons.filter((p) => p.id !== person.id));

        notifyWith(`number of ${person.name} deleted!`);
      });
    }
  };

  const byFilterField = (p) =>
    p.name.toLowerCase().includes(filter.toLowerCase());

  const personsToShow = filter ? persons.filter(byFilterField) : persons;

  return (
    <div>
      <Heading text="phoneebook" />

      <Notification info={info} />

      <FindName filter={filter} setFilter={setFilter} />

      <AddNewNumber
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />

      <Numbers persons={personsToShow} removePerson={removePerson} />
    </div>
  );
};

export default App;
