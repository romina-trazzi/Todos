import { useState } from 'react';
import styles from './App.module.css'
import FormTodos from './components/FormTodos.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
  const [todoList, setTodoList] = useState([{titolo: "", descrizione: ""}]);
  
  const handleTaskChange = (newTask) => {
    
    /* Update the id value of the newTask before setting the list:

    1. Find the maxId value into the current todoList
    2. Update the id property into newTask object */
    
    let updatedTask;

    // Set the newTodoList with all the properties updated
    setTodoList((prev) => [...prev, updatedTask]);
  }

  const handleDelete = (idToDelete) => {
    setTodoList((prev) => prev.filter(todo => todo.id !== idToDelete));
  };

  return (
    <>
      <header> ToDo List </header>
      <main>

        <div className={styles.general_container}>
          <FormTodos onTaskChange={handleTaskChange}/>
        </div>

        <div className={styles.todo_list_container}>
          <TodoList listOfTodo={todoList} onDelete={handleDelete}/>
        </div>

      </main>
      <footer>Made by Romina Trazzi ~ 2024 ~</footer>
    </>
  )

}

export default App
