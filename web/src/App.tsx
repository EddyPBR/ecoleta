import React, {useState, useEffect} from 'react';
import './App.css';

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  function handleButtonClick() {
    setCounter( counter + 1);
  }

  return (
    <div>
      <Header title="Exemplo básico de react com typescript e controladores de estado" />
      <Header title={`Contador: ${counter}`} />
      <button type="button" onClick={handleButtonClick}>incrementar</button>
    </div>
  );
}

export default App;
