import { RiDeleteBin7Line } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { TbCircleLetterP } from "react-icons/tb";
import ButtonAction from "../ButtonAction/ButtonAction";
import styles from "./Todos.module.css";

function Todos({listOfTodo, todoListPriority, onDelete, onEdit, onComplete, onPriority}) {
  return (
    <>
    {listOfTodo.length === 0 ? <p>Nessun elemento</p> : listOfTodo.map((singleTodo, index) => (
    
    
    <div key={index} className={`${styles.todoItem} ${singleTodo.completed ? styles.completed : ''}`}>
      
      {/* Rendering TodoList*/}
      <span><strong>{`ToDo ${index+1} `}</strong></span>
      <span>{singleTodo.titolo}</span>
      <span>{singleTodo.descrizione}</span>
      
      <div className={styles.action_button_container}>
        
        {/* Delete button */}  
        <ButtonAction onClickAction={() => onDelete(index)}> <RiDeleteBin7Line /> </ButtonAction>

        {/* Edit button */} 
        <ButtonAction onClickAction={() => onEdit(index)}> <FaPencil /> </ButtonAction>
        
        {/* Completed button */}
        <ButtonAction onClickAction={() => onComplete(index)}> <MdOutlineVerifiedUser /> </ButtonAction>

        {/* Mark with priority */}
        <ButtonAction onClickAction={() => onPriority(singleTodo)} > 
          
          {/* Render correct style if priority is true */}
          <TbCircleLetterP className={singleTodo.priority === "high" ? styles.red : ''}/> 
        </ButtonAction>
        
      </div>

    </div>
    ))}
    
    
    
    </>
  )
}

export default Todos