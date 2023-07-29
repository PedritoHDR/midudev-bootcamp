import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Part = ({part, exercises}) => {
  return (
    <p>
        {part}, {exercises}
    </p>
  )
} 

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
}

const App3 = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  
    return (
        <div>
            <Header course={course} />
            <div>
                <Part part={part1.name} exercises={part1.exercises} />
                <Part part={part2.name} exercises={part2.exercises} />
                <Part part={part3.name} exercises={part3.exercises} />
            </div>
            <Total  />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App3 />
);