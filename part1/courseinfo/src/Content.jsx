import Part from "./Part";

const Content = ({ parts }) => {
  console.log("content parts", parts);
  return (
    <>
      {parts.map((part, key) => (
        <Part
          key={part.id}
          myKey={key}
          part={part.name}
          exercises={part.exercises}
        />
      ))}
    </>
  );
};

export default Content;
