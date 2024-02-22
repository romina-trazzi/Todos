import styles from './TodoList.module.css'
import { RiDeleteBin7Line } from "react-icons/ri";

function TodoList({listOfTodo, onDelete}) {

  return (
    
    <>
    <h2>Lista ToDo</h2>
    <span>{`Element: ${listOfTodo.length}`}</span>
    
    <ul>
      {listOfTodo.length === 0 ? <p>Nessun elemento</p> :

      listOfTodo.map((singleTodo, index) => 
      <div key={index} className={styles.todoItem}>
        <span><strong>{`ToDo ${index+1} `}</strong></span>
        <span>{singleTodo.titolo}</span>
        <span>{singleTodo.descrizione}</span>
        <div className={styles.bin_button_container}>
          <button onClick={()=> onDelete(index)}>
            <RiDeleteBin7Line /> 
          </button>
        </div>
      </div>
      )}
    </ul>
    
    </>
  )
}

export default TodoList


