import { useState } from 'react';

import Nome from './components/Nome'
import BemVindo from './components/BemVindo';
import Formulario from './components/Formulario';

function App() {
  const [aluno, setAluno] = useState('Sujeito Programador');
  const [nome, setNome] = useState('');

  const [user, setUser] = useState({})

  function handlerChangeName(name) {
    setAluno(name)
  }

  function handleRegister(e) {
    e.preventDefault()
    console.log('Registrado nome:', nome)

    setUser({
      nome: nome
    })
  }

  return (
    <div>
      <BemVindo aluno={aluno} handlerChangeName={handlerChangeName} />
      <Nome aluno="Eduardo" />
      <Formulario nome={nome} setNome={setNome} handleRegister={handleRegister} />

      <div>
        <span>Nome: {user.nome}</span>
      </div>
    </div>
  );
}

export default App;



