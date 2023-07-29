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

// const Content = () => {
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
//   return (
//     <div>
//       <Part part={part1} exercises={exercises1} />
//       <Part part={part2} exercises={exercises2} />
//       <Part part={part3} exercises={exercises3} />
//     </div>
//   )
// }

// const Total = () => {
//   const exercises1 = 11
//   const exercises2 = 7
//   const exercises3 = 14

//   return (
//     <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//   )
// }

// const App1 = () => {
//   // const-definitions
//   const course = 'Half Stack application development'

//   return (
//     <div>
//       <Header course={course} />
//       <Content  />
//       <Total  />
//     </div>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App1 />
// );

//ReactDOM.render(<App />, document.getElementById('root'))


// Paso 3 

// const Total = () => {
//   const exercises1 = 10
//   const exercises2 = 7
//   const exercises3 = 14

//   return (
//     <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//   )
// }

// const App2 = () => {
//     const course = 'Half Stack application development'
//     const part1 = {
//       name: 'Fundamentals of React',
//       exercises: 10
//     }
//     const part2 = {
//       name: 'Using props to pass data',
//       exercises: 7
//     }
//     const part3 = {
//       name: 'State of a component',
//       exercises: 14
//     }
  
//     return (
//         <div>
//             <Header course={course} />
//             <div>
//                 <Part part={part1.name} exercises={part1.exercises} />
//                 <Part part={part2.name} exercises={part2.exercises} />
//                 <Part part={part3.name} exercises={part3.exercises} />
//             </div>
//             <Total  />
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App2 />
// );

// Part 3

// const Content = ({ parts }) => {

//   return (
//       <div>
//           <Part part={parts[0].name} exercises={parts[0].exercises} />
//           <Part part={parts[1].name} exercises={parts[1].exercises} />
//           <Part part={parts[2].name} exercises={parts[2].exercises} />
//       </div>
//   )
// }

// const Total = ({ parts }) => {

// return (
//   <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
// )

// }

// const App3 = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 11
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//       <div>
//           <Header course={course} />
//           <Content parts={parts} />
//           <Total parts={parts} />
//       </div>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App3 />
// );

// paso 5



const Content = ({ parts }) => {

  return (
      <div>
          <Part part={parts[0].name} exercises={parts[0].exercises} />
          <Part part={parts[1].name} exercises={parts[1].exercises} />
          <Part part={parts[2].name} exercises={parts[2].exercises} />
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