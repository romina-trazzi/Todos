function FormTodo() {
    
    return (
    
    <div className="formContainer">
        <h2>Crea un nuovo ToDo</h2>
        <div className="form_wrapper">
          <div className="name">
            <label>Nome</label>
            <input placeholder="Inserisci il nome del ToDo"></input>
          </div>
          <div className="description">
            <label>Descrizione</label>
            <textarea placeholder="Inserisci la descrizione del ToDo"></textarea>
          </div>
        </div>
        <button type="submit"><span>+</span>Inserisci</button>
    </div>
  )
}

export default FormTodo