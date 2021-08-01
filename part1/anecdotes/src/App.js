import "./styles.css";
import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients"
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [max, setMax] = useState(0);

  const maxVotes = (votes, selected) => {
    let max_vote_idx = max;
    if (
      (votes[max] == votes[selected] && max > selected) ||
      votes[max] < votes[selected]
    )
      max_vote_idx = selected;
    setMax(max_vote_idx);
  };

  const addVotes = (votes, selected) => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    maxVotes(copy, selected);
  };

  const randAnecdote = () => {
    const rand = Math.floor(Math.random() * 6);
    setSelected(rand);
  };

  return (
    <div>
      <h1> Anecdote of the day</h1>
      <p>
        {" "}
        {anecdotes[selected]} <br /> has {votes[selected]} votes{" "}
      </p>

      <button onClick={() => addVotes(votes, selected)}> vote </button>
      <button onClick={() => randAnecdote()}> next anecdote </button>

      <h1> Anecdote with most votes</h1>
      <p>
        {" "}
        {anecdotes[max]} <br /> has {votes[max]} votes{" "}
      </p>
    </div>
  );
};

export default App;

