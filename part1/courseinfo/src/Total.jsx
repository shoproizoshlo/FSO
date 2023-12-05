const Total = ({ parts }) => {
  const array = parts.map((part) => part.exercises);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return (
    <>
      <p>
        <strong>Number of exercises {array.reduce(reducer)}</strong>
      </p>
    </>
  );
};

export default Total;
