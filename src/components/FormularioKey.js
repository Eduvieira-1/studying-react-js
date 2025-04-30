function FormularioKey({ input, tarefas, setInput, addTask }) {
    return (
      <div>

        <h1>Forms</h1>
        <form onSubmit={addTask}>
          <label>Tarefas: </label>
          <input
            placeholder="Digite sua tarefa"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Registrar</button>
        </form>

        <ul>
           {tarefas.map( (tarefa, index) => (
                <li key={index}> {tarefa }</li>
           ))}
        </ul>
      </div>
    );
  }
  
  export default FormularioKey;