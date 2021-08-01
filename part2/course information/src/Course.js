const Header = (props) => {
  return <h4> {props.head} </h4>;
};

const Part = (props) => {
  return (
    <div>
      {" "}
      {props.part.map((dt) => (
        <p>
          {" "}
          {dt.name} {dt.exercises}{" "}
        </p>
      ))}{" "}
    </div>
  );
};

const Total = (props) => {
  const sum = props.tot.reduce(
    (prevValue, currValue) => prevValue + currValue.exercises,
    0
  );
  return <h4> total of {sum} exercises </h4>;
};

const Content = (props) => {
  return (
    <div>
      {" "}
      <Part part={props.content} />
      <Total tot={props.content} />
    </div>
  );
};

const Course = (props) => {
  return (
    <div>
      <Header head={props.course.name} />
      <Content content={props.course.parts} />
    </div>
  );
};

export default Course;
