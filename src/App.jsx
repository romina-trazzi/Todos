import { useState } from 'react';
import styles from './App.module.css'
import FormTodos from './components/FormTodos/FormTodos.jsx';
import TodoList from './components/TodoList/TodoList.jsx';

function App() {
  const [todoList, setTodoList] = useState([]);
  
  const handleTaskChange = (newTask) => {
    // Set the updated TodoList
    setTodoList((prev) => [...prev, newTask]);
  }

  const handleDelete = (indexTodo) => {
    setTodoList((prev) => prev.filter((_, index) => index !== indexTodo));
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
