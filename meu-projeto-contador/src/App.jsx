import { useState } from 'react';

function App(){
  const [count, setCount] = useState(0);
  const incrementCount =() => {
    setCount(count + 1);
  }
  const descrement =() => {
    setCount(count - 1);
  }
  const reset =() => {
    setCount(0);
  }


  return(
    <div className='contador-container'>
      <h1>Contador de Cliques</h1>
      <p>Cliques: {count}</p>
      <button className='increment' onClick={incrementCount}>Clique aqui</button>
      <button className='descrement' onClick={descrement}>voltar</button>
      <button className='reset' onClick={reset}>Resetar</button>
    </div>
    
  );
}

export default App;