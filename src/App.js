import Nome from './components/Nome'
import { useState } from 'react';

function App() {
  const [aluno, setAluno] = useState('Sujeito Programador');

  function handlerChangeName(name) {
    setAluno(name)
  }

  return (
    <div>
      <h1>Bem vindo</h1>
      <h2>Olá: {aluno}</h2>
      <Nome aluno="Eduardo" />

      <button onClick={ () => handlerChangeName('Eduardo césar')}>
          Mudar nome
      </button>
    </div>
  );
}

export default App;



