import { useState } from "react";

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

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={increaseByOne}>good</button>
      <button onClick={setToZero}>neutral</button>
      <button onClick={decreaseByOne}>bad</button>

      <h2>give feedback</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  );
};

export default App;
