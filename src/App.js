import './App.css';
import Escena from './components/escena/Escena';
import frases from './frases';
import Button from './components/ButtonStyle';
import { useState } from 'react';

function App() {

  const [index, setIndex] = useState(0);
  //console.log({ index });
  console.log(frases[index]);
  console.log({ index });
  const anterior = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const seguent = () => {
    if (index < 3) {
      setIndex(index + 1);
    }
  };


  return (
    <div>
      <Button onClick={anterior}>anterior</Button>
      <Button onClick={seguent}>següent</Button>

      <Escena frase={frases[0]} selected={index == 0 ? true : false} />
      <Escena frase={frases[1]} selected={index == 1 ? true : false} />
      <Escena frase={frases[2]} selected={index == 2 ? true : false} />
      <Escena frase={frases[3]} selected={index == 3 ? true : false} />
    </div>
  );
};

export default App;