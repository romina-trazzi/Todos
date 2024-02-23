import { useState } from 'react';
import styles from './App.module.css'
import FormTodos from './components/FormTodos/FormTodos.jsx';
import TodoList from './components/TodoList/TodoList.jsx';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [editElement, setEditElement] = useState({editTitle:"", editDescription:"", index:""});
  const [isEditing, setIsEditing] = useState(false);
  
  const handleTaskChange = (task, action) => {
    
    if (action === "create") {

      // Set the updated TodoList
      setTodoList((prev) => [...prev, task]);

    } else if (action === "update") {

      // Set edit task
      setTodoList((prev) => {
        const editedTodoList = [...prev];
        editedTodoList[task.index] = {titolo: task.titolo, descrizione: task.descrizione};
        
        return editedTodoList
      })

      setIsEditing(false);
    }
  }

  const handleDelete = (indexTodo) => {
    setTodoList((prev) => prev.filter((_, index) => index !== indexTodo));
  };

  const handleEdit = (indexTodo) => {

    window.scrollTo(0, 0);

    // Get editable current values (and adding index property)
    const {titolo, descrizione} = todoList[indexTodo];
    setEditElement({editTitle: titolo, editDescription: descrizione, index: indexTodo});

    // Change isEditingValue
    setIsEditing(true);
  }

  const handleComplete = (indexTodo) => {

    // Get completed todo values
    const completedTodo = todoList[indexTodo];
   
    // Set the updated TodoList
    setTodoList((prev) => {
      const markedTodoList = [...prev];
      markedTodoList[indexTodo] = {titolo: completedTodo.titolo, descrizione: completedTodo.descrizione, completed: true};
      
      return markedTodoList
    })


  }

  return (
    <>
      <header> ToDo List </header>
      <main>

        <div className={styles.general_container}>
          <FormTodos onTaskChange={handleTaskChange} editElement={editElement} isEditing={isEditing}/>
        </div>

        <div className={styles.todo_list_container}>
          <TodoList listOfTodo={todoList} onDelete={handleDelete} onEdit={handleEdit} onComplete={handleComplete}/>
        </div>

      </main>
      <footer>Made by Romina Trazzi ~ 2024 ~</footer>
    </>
  )

}

export default App
