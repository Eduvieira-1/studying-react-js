function Formulario({ nome, setNome, handleRegister }) {
    return (
      <div>
        <h1>Forms</h1>
        <form onSubmit={handleRegister}>
          <label>Nome: </label>
          <input
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </form>
      </div>
    );
  }
  
  export default Formulario;