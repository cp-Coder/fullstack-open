import './styles.css';
import React from 'react';

const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part, exercises }) => <p> {part} {exercises} </p>

const Content = ({ parts }) => <div> {parts.map(course => <Part key={course.name} part={course.name} exercises={course.exercises} />)} </div>

const Total = ({ parts }) => <p> Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)} </p>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
