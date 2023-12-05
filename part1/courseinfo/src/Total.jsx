const Total = ({ parts }) => {
  const array = parts.map((part) => part.exercises);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return (
    <>
      <p>Number of exercises {array.reduce(reducer)}</p>
    </>
  );
};

export default Total;
