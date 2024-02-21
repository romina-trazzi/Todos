
function TodoList({listOfTodo, countToDo}) {
  return (
    
    <>
    <h2>Lista ToDo</h2>

    <ul>
      {listOfTodo.map((singleTodo) => 
      <div key={singleTodo.id} className="todoItem">
        <span><b>{`ToDo ${singleTodo.id} `}</b></span>
        <span>{singleTodo.nome}</span>
        <span>{singleTodo.descrizione}</span>
      </div>
      )}
    </ul>
    
    </>
  )
}

export default TodoList