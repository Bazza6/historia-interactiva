import './App.css';
import Escena from './components/escena/Escena';
import frases from './frases';

function App() {

  return (
    <div>
      <Escena frase={frases[0]} />
      <Escena frase={frases[1]} />
      <Escena frase={frases[2]} />
      <Escena frase={frases[3]} />
    </div>
  );
};

export default App;