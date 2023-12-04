import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const getRandomAnecdote = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  };

  const handleVotes = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };
  console.log(votes);

  return (
    <>
      <h1>anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>This anecdote has: {votes[selected]} votes</p>

      <button onClick={handleVotes}>vote</button>
      <button
        onClick={() => setSelected(getRandomAnecdote(1, anecdotes.length))}
      >
        next anecdote
      </button>

      <h2>anecdote with the most votes</h2>
      <p>{anecdotes[votes.indexOf(Math.max.apply(null, votes))]}</p>
      <p>This anecdote has: {[Math.max(...votes)]} votes</p>
    </>
  );
};

export default App;
