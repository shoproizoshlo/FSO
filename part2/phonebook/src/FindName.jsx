const FindName = ({ filter, setFilter }) => {
  return (
    <>
      <label htmlFor="input">filter shown with</label>
      <input
        id="input"
        value={filter}
        onChange={({ target }) => setFilter(target.value)}
      />
    </>
  );
};

export default FindName;
