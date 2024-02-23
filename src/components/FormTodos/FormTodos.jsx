import {useState, useEffect} from 'react';
import { RiAddCircleLine } from "react-icons/ri";
import styles from './FormTodos.module.css'

function FormTodos({ onTaskChange, editElement, isEditing, completedElement }) {
  
  const [task, setTask] = useState({titolo: "", descrizione:""});

  useEffect(() => { 
    if (isEditing) {
      setTask({titolo: editElement.editTitle, descrizione: editElement.editDescription, completed: false})
    } else {
      setTask({titolo: "", descrizione: "", completed: false})
    }
  }, [isEditing]);
  
    
  const handleElementChange = (event) => {
    const { name, value } = event.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleInsert = (action) => {
    
    if (task.titolo.trim() === '' || task.descrizione.trim() === '') {
        alert("Assicurati di compilare tutti i campi!");
        return; 
    }
    
    if (action === "create") {  
      onTaskChange(task, "create");
      setTask({ titolo: "", descrizione: "", completed: false });

    } else if (action === "update") {
      const updatedTask = {...task, index: editElement.index }
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
            value={task.titolo}
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
            value={task.descrizione}
            onChange={handleElementChange} 
            required
          ></textarea>
        </div>

        {/* Create or Update Button */}
        <div className={styles.submit_data}>
          {isEditing ?
          
          <button onClick={() => handleInsert("update")}>
            <span><RiAddCircleLine />Salva</span>
          </button> :

          <button onClick={() => handleInsert("create")}>
            <span><RiAddCircleLine />Inserisci</span>
          </button>
          }

        </div>

      </div>
    </div>
  );
}

export default FormTodos;

