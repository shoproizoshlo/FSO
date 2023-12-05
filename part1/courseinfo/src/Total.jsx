const Total = ({ parts }) => {
  const array = parts.map((part) => part.exercises);
  function reducer(accumulator, currentValue, index) {
    const returns = accumulator + currentValue;
    return returns;
  }

  array.reduce(reducer);

  return (
    <>
      <p>Number of exercises {array.reduce(reducer)}</p>
    </>
  );
};

export default Total;
