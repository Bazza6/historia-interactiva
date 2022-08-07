import './App.css';
import Escena from './components/escena/Escena';
import frases from './frases';
import { Button } from './components/Styled-components/Styled';
import { useState } from 'react';
import Benvingut from './components/benvingut/Benvingut';

function App() {

  const [index, setIndex] = useState(0);
  const [isWelcome, setIsWelcome] = useState(false);

  const enter = () => setIsWelcome(true);

  const anterior = () => (index > 0) && setIndex(prevIndex => prevIndex - 1);

  const seguent = () => (index < 3) && setIndex(prevIndex => prevIndex + 1);


  return (

    <>
      {(isWelcome === false) && <Benvingut onClick={enter} />}
      {(isWelcome === true) && <div>
        <Button onClick={anterior}>anterior</Button>
        <Button onClick={seguent}>següent</Button>

        <Escena frase={frases[0]} selected={index === 0 ? true : false} />
        <Escena frase={frases[1]} selected={index === 1 ? true : false} />
        <Escena frase={frases[2]} selected={index === 2 ? true : false} />
        <Escena frase={frases[3]} selected={index === 3 ? true : false} />
      </div>}
    </>


    /*     <>
              <Benvingut />
          <div>
            <Button onClick={anterior}>anterior</Button>
            <Button onClick={seguent}>següent</Button>
    
            <Escena frase={frases[0]} selected={index === 0 ? true : false} />
            <Escena frase={frases[1]} selected={index === 1 ? true : false} />
            <Escena frase={frases[2]} selected={index === 2 ? true : false} />
            <Escena frase={frases[3]} selected={index === 3 ? true : false} />
          </div>
        </> */



  );
};

export default App;