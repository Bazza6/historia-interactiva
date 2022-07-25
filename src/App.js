import './App.css';
import Escena from './components/escena/Escena';


function App() {

  const text = "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial";


  return (
    <div>
      <Escena testo={text} />
    </div>
  );
};

export default App;