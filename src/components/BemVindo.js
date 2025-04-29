function BemVindo({ aluno, handlerChangeName }) {
    return (
      <div>
        <h1>Bem vindo</h1>
        <h2>Olá: {aluno}</h2>
        <button onClick={() => handlerChangeName('Eduardo César')}>
          Mudar nome
        </button>
      </div>
    );
  }
  
  export default BemVindo;