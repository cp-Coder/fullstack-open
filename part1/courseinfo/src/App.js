import "./styles.css";

const Header = (props) => {
  return <h1> {props.course} </h1>;
};

const Part = (prop) => {
  return (
    <p>
      {" "}
      {prop.name} {prop.ex}{" "}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {" "}
      {props.part.map((dt) => {
        return <Part name={dt.name} ex={dt.exercises} />;
      })}{" "}
    </div>
  );
};

const Total = (props) => {
  let tot = 0;
  props.part.forEach((dt) => (tot = dt.exercises + tot));
  return <div> Number of exercises {tot} </div>;
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content part={parts} />
      <Total part={parts} />
    </div>
  );
};

export default App;
