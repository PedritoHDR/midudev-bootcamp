import './App.css';
import Mensaje from './Mensaje';

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
};

function App() {
  return (
    <div className="App">
      <Mensaje color='red' message='Esto es un curso de React'/>
      <Description />
    </div>
  );
}

export default App;
