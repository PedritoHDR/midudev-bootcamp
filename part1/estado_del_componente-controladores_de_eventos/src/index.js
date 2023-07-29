import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById('root');

const App = (props) => {
  const [contadorValue, updateContador] = useState(13);

  return (
    <div>
      <p>El valor del contador es:</p>
      <h1>{contadorValue}</h1>
      <button onClick={() => { updateContador( contadorValue + 1);}}>
        Incrementar
      </button>
      <h2>Magia de React</h2>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);