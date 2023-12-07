import Heading from "./Heading";
import NumbersList from "./NumbersList";
const Numbers = ({ list }) => {
  return (
    <>
      <Heading text="Numbers" />
      <ul>
        <NumbersList list={list} />
      </ul>
    </>
  );
};

export default Numbers;
