import { useState } from "react";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseByOne = () => {
    setGood(good + 1);
  };
  const setToZero = () => {
    setNeutral(neutral + 1);
  };
  const decreaseByOne = () => {
    setBad(bad + 1);
  };

  
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={increaseByOne}>good</button>
      <button onClick={setToZero}>neutral</button>
      <button onClick={decreaseByOne}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
