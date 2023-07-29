import ReactDOM from "react-dom";
import { useState } from "react";

//const rootElement = document.getElementById('root');

// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 20

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// ReactDOM.render(<App />, rootElement);


//Re-renderizado de la página

// const App = (props) => {
//   const { counter } = props
//   return (
//     <div>{counter}</div>
//   )
// }

// let counter = 0

// const refresh = () => {
//   ReactDOM.render(<App counter={counter} />, 
//   document.getElementById('root'))
// }

// setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000)

// Componente con estado

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   setTimeout(
//     () => setCounter(counter + 1),
//     1000
//   )

//   console.log('rendering...', counter)

//   return (
//     <div>{counter}</div>
//   )
// }

// ReactDOM.render(
//   <App />, 
//   document.getElementById('root')
// )

// Manejo de eventos

// const App = () => {
//   const [ counter, setCounter ] = useState(0)


//   const increaseByOne = () => setCounter(counter + 1)
  
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <div>{counter}</div>

//       <button onClick={increaseByOne}>
//         plus
//       </button>

//       <button onClick={setToZero}>
//         zero
//       </button>
//     </div>
//   )
// }
// ReactDOM.render(
//   <App />, 
//   document.getElementById('root')
// )


// Pasando el estado a componentes hijos

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>

      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
