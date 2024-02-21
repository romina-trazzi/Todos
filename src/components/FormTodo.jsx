function FormTodo({onInput}) {
    
    return (
    
    <div className="formContainer">
      
      <h2>Crea un nuovo ToDo</h2>
      <div className="form_wrapper">
        
        <div className="name">
          <label>Nome</label>
          <input type="text" placeholder="Inserisci il nome del ToDo" onChange={onInput}/>
        </div>
        
        <div className="description">
          <label>Descrizione</label>
          <textarea placeholder="Inserisci la descrizione del ToDo" onChange={onInput}></textarea>
        </div>
      
      </div>
     
      
    </div>
  )
}

export default FormTodo