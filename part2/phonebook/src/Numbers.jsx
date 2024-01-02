import Heading from "./Heading";
import NumbersList from "./NumbersList";
const Numbers = ({ persons, removePerson }) => {
  return (
    <>
      <Heading text="Numbers" />
      <div>
        {persons.map((person) => (
          <p key={person.id}>
            {person.name} {person.number}
            <button onClick={() => removePerson(person)}>delete</button>
          </p>
        ))}
      </div>
    </>
  );
};

export default Numbers;
