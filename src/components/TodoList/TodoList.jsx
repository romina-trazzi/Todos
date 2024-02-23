import styles from './TodoList.module.css'
import { RiDeleteBin7Line } from "react-icons/ri";

function TodoList({listOfTodo, onDelete, onEdit}) {

  return (
    
    <>
    <h2>Lista ToDo</h2>
    <span className={styles.counter}> {`Element: ${listOfTodo.length}`} </span>
    
    <ul>
      {listOfTodo.length === 0 ? <p>Nessun elemento</p> : listOfTodo.map((singleTodo, index) => (
      <div key={index} className={styles.todoItem}>
      
      {/* Rendering TodoList*/}
      <span><strong>{`ToDo ${index+1} `}</strong></span>
      <span>{singleTodo.titolo}</span>
      <span>{singleTodo.descrizione}</span>

      <div className={styles.bin_container}>
        {/* Delete button */}  
        <button onClick={() => onDelete(index)}>
          <RiDeleteBin7Line />
        </button>
        
        {/* Edit button */} 
        <button onClick={() => onEdit(index)}>
          Modifica
        </button>
      </div>

    </div>
    ))}
    </ul>
    
    </>
  )
}

export default TodoList


