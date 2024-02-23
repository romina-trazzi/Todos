import {useState, useEffect} from 'react';
import { RiAddCircleLine } from "react-icons/ri";
import styles from './FormTodos.module.css'

function FormTodos({ onTaskChange, editElement, isEditing }) {
  
  const [newTask, setNewTask] = useState({titolo: "", descrizione:""});

  useEffect(() => { 
    if (isEditing) {
      setNewTask({titolo: editElement.editTitle, descrizione: editElement.editDescription})
    } else {
      setNewTask({titolo: "", descrizione: ""})
    }
  }, [isEditing]);
  
    
  const handleElementChange = (event) => {
    const { name, value } = event.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleClick = (action) => {
    
    if (newTask.titolo.trim() === '' || newTask.descrizione.trim() === '') {
        alert("Assicurati di compilare tutti i campi!");
        return; 
    }
    
    if (action === "create") {  
      onTaskChange(newTask, "create");
      setNewTask({ titolo: "", descrizione: "" });

    } else if (action === "update") {
      const updatedTask = {...newTask, index: editElement.index }
      onTaskChange(updatedTask, "update");

    }
  }

  return (
    <div className={styles.form_Container}>
      <h2>{isEditing ? 'Modifica ToDo' : 'Crea un nuovo ToDo'}</h2>

      <div className={styles.form_wrapper}>

        {/* Title input Field */}
        <div className={styles.title}>
          <label>Titolo</label>
          <input type="text" 
            placeholder="Inserisci il titolo del ToDo" 
            name="titolo" 
            value={newTask.titolo}
            onChange={handleElementChange} 
            required 
          />
        </div>
        
        {/* Description TextArea Field */}
        <div className={styles.description}>
          <label>Descrizione</label>
          <textarea 
            placeholder="Inserisci la descrizione del ToDo"
            name="descrizione" 
            value={newTask.descrizione}
            onChange={handleElementChange} 
            required
          ></textarea>
        </div>

        {/* Create or Update Button */}
        <div className={styles.submit_data}>
          {isEditing ?
          
          <button onClick={() => handleClick("update")}>
            <span><RiAddCircleLine />Salva</span>
          </button> :

          <button onClick={() => handleClick("create")}>
            <span><RiAddCircleLine />Inserisci</span>
          </button>
          }

        </div>

      </div>
    </div>
  );
}

export default FormTodos;

