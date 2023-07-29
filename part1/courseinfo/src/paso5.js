import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Part = ({part, exercises}) => {
  return (
    <p>
        {part}, {exercises}.
    </p>
  )
};

const Content = ({ course }) => {

    return (
        <div>
            <Part part={course.parts[0].name} exercises={course.parts[0].exercises} />
            <Part part={course.parts[1].name} exercises={course.parts[1].exercises} />
            <Part part={course.parts[2].name} exercises={course.parts[2].exercises} />
        </div>
    )
}

const Total = ({ parts }) => {

  return (
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )

}

const App4 = () => {
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App4 />
);