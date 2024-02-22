import './TodoList.css'
import { RiDeleteBin7Line } from "react-icons/ri";

function TodoList({listOfTodo, count}) {

  return (
    
    <>
    <h2>Lista ToDo</h2>
    <span>{`Element: ${count}`}</span>
    
    <ul>
      {listOfTodo.map((singleTodo, index) => 
      <div key={index} className="todoItem">
        <span><strong>{`ToDo ${singleTodo.id} `}</strong></span>
        <span>{singleTodo.titolo}</span>
        <span>{singleTodo.descrizione}</span>
        <span><RiDeleteBin7Line /></span>
      </div>
      )}
    </ul>
    
    </>
  )
}

export default TodoList


