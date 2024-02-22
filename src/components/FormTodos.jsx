import {useState} from 'react';

function FormTodos({ onTaskChange }) {
  const [newTask, setNewTask] = useState({ id: "", titolo: "", descrizione: "" });
    
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleTextAreaChange = (event) => {
    const { name, value } = event.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleClick = () => {
   
    if (newTask.titolo.trim() === '' || newTask.descrizione.trim() === '') {
      alert("Assicurati di compilare tutti i campi!");
      return; 
    }
    
    onTaskChange(newTask);
    setNewTask({ titolo: "", descrizione: "" });
  }

  return (
    <div>
      <h2>Crea un nuovo ToDo</h2>
      <div className="formContainer">
        {/* Title input Field */}
        <div className="title">
          <label>Titolo</label>
          <input type="text" 
            placeholder="Inserisci il titolo del ToDo" 
            name="titolo" 
            value={newTask.titolo}
            onChange={handleInputChange} 
            required 
          />
        </div>
        
        {/* Description TextArea Field */}
        <div className="description">
          <label>Descrizione</label>
          <textarea 
            placeholder="Inserisci la descrizione del ToDo"
            name="descrizione" 
            value={newTask.descrizione} 
            onChange={handleTextAreaChange} 
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button onClick={handleClick}>Inserisci</button>
      </div>
    </div>
  );
}

export default FormTodos;