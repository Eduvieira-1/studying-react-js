import { useState, useEffect } from 'react';

// import Nome from './components/Nome'
// import BemVindo from './components/BemVindo';
// import Formulario from './components/Formulario';
import FormularioKey from './components/FormularioKey';

function App() {
  // const [aluno, setAluno] = useState('Sujeito Programador');
  // const [nome, setNome] = useState('');

  const [input, setInput] = useState('')

  
  const [tarefas, setTarefas] = useState(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');
    return tarefasStorage ? JSON.parse(tarefasStorage) : [
      'Pagar a conta de luz',
      'Estudar React Js'
    ];
  });
  

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas]);

  // const [user, setUser] = useState({})

  // function handlerChangeName(name) {
  //   setAluno(name)
  // }

  // function handleRegister(e) {
  //   e.preventDefault()
  //   console.log('Registrado nome:', nome)

  //   setUser({
  //     nome: nome
  //   })
  // }

  function addTask(e) {
    e.preventDefault()
    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      {/* <BemVindo aluno={aluno} handlerChangeName={handlerChangeName} /> */}
      {/* <Nome aluno="Eduardo" /> */}
      {/* <Formulario nome={nome} setNome={setNome} handleRegister={handleRegister} /> */}
      {/* <br /> */}

      <FormularioKey input={input} setInput={setInput} tarefas={tarefas} addTask={addTask}  />
        
      {/* <div>
        <span>Nome: {user.nome}</span>
      </div> */}
    </div>
  );
}

export default App;



