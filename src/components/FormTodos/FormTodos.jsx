import {useState} from 'react';
import { RiAddCircleLine } from "react-icons/ri";
import styles from './FormTodos.module.css'

function FormTodos({ onTaskChange, editElement, isEditing }) {
  const [newTask, setNewTask] = useState({titolo: "", descrizione: ""});
    
  const handleElementChange = (event) => {
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
    <div className={styles.form_Container}>
      <h2>{isEditing ? 'Modifica ToDo' : 'Crea un nuovo ToDo'}</h2>

      <div className={styles.form_wrapper}>

        {/* Title input Field */}
        <div className={styles.title}>
          <label>Titolo</label>
          <input type="text" 
            placeholder="Inserisci il titolo del ToDo" 
            name="titolo" 
            value={isEditing ? editElement.editTitle : newTask.titolo}
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
            value={isEditing ? editElement.editDescription : newTask.descrizione}
            onChange={handleElementChange} 
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className={styles.submit_data}>
          <button onClick={handleClick}>
            <span><RiAddCircleLine />Inserisci</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default FormTodos;

