import styles from './TodoList.module.css'
import SingleTodo from '../SingleTodo/SingleTodo'



function TodoList({listOfTodo, onDelete, onEdit, onComplete}) {

  return (
    
    <>
    <h2>Lista ToDo</h2>
    <span className={styles.counter}> {`Element: ${listOfTodo.length}`} </span>
    
    <ul>
     <SingleTodo listOfTodo={listOfTodo} onDelete={onDelete} onEdit={onEdit} onComplete={onComplete}/>
    </ul>
    
    </>
  )
}

export default TodoList


