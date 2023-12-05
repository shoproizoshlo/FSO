const Part = ({ myKey, part, exercises }) => {
  return (
    <>
      <p key={myKey}>
        {part} {exercises}
      </p>
    </>
  );
};

export default Part;
