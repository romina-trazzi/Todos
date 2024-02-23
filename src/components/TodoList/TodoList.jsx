import styles from './TodoList.module.css'
import { RiDeleteBin7Line } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";
import { MdOutlineVerifiedUser } from "react-icons/md";


function TodoList({listOfTodo, onDelete, onEdit, onComplete}) {

  return (
    
    <>
    <h2>Lista ToDo</h2>
    <span className={styles.counter}> {`Element: ${listOfTodo.length}`} </span>
    
    <ul>
      {listOfTodo.length === 0 ? <p>Nessun elemento</p> : listOfTodo.map((singleTodo, index) => (
      <div key={index} className={`${styles.todoItem} ${singleTodo.completed ? styles.completed : ''}`}>
      
      {/* Rendering TodoList*/}
      <span><strong>{`ToDo ${index+1} `}</strong></span>
      <span>{singleTodo.titolo}</span>
      <span>{singleTodo.descrizione}</span>

      <div className={styles.action_button_container}>
        {/* Delete button */}  
        <button onClick={() => onDelete(index)}>
          <RiDeleteBin7Line />
        </button>
        
        {/* Edit button */} 
        <button onClick={() => onEdit(index)}>
          <FaPencil />
        </button>

        {/* Completed button */}
        <button onClick={() => onComplete(index)}>
          <MdOutlineVerifiedUser />
        </button>
      </div>

    </div>
    ))}
    </ul>
    
    </>
  )
}

export default TodoList


