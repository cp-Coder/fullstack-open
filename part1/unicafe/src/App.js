import "./styles.css";
import { useState } from "react";

const Statistics = (props) => {
  if (props.text == "positive") {
    if (isNaN(props.val))
      return (
        <div>
          {" "}
          {props.text} {props.val}{" "}
        </div>
      );
    return (
      <div>
        {" "}
        {props.text} {props.val}%{" "}
      </div>
    );
  }

  return (
    <div>
      {" "}
      {props.text} {props.val}{" "}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1> give feedback </h1>
      <p>
        <button onClick={() => setGood(good + 1)}> good </button>
        <button onClick={() => setNeutral(neutral + 1)}> neutral </button>
        <button onClick={() => setBad(bad + 1)}> bad </button>
      </p>
      <p>
        <h1> statistics </h1>
        <Statistics text="good" val={good} />
        <Statistics text="neutral" val={neutral} />
        <Statistics text="bad" val={bad} />
        <Statistics text="all" val={good + neutral + bad} />
        <Statistics
          text="average"
          val={((good + neutral + bad) / 3).toFixed(2)}
        />
        <Statistics
          text="positive"
          val={((good / (good + neutral + bad)) * 100).toFixed(2)}
        />
      </p>
    </div>
  );
};
export default App;
