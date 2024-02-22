import { useState } from 'react';
import './App.css'
import FormTodos from './components/FormTodos.jsx';
import TodoList from './components/TodoList.jsx';
import DUMMY_TODO from './assets/DUMMY_TODO.js';

function App() {
  const [todoList, setTodoList] = useState(DUMMY_TODO);
  
  const handleTaskChange = (newTask) => {
    
    // Update the id value of the newTask before setting the list
    
    // Find madId into current todoList
    const maxId = Math.max(...todoList.map(task => task.id));
  
    // Update id property in the object newTask
    const updatedTask = { ...newTask, id: maxId + 1 };

    // Set the newTodoList with all the properties updated
    setTodoList((prev) => [...prev, updatedTask]);
  }

  return (
    <>
      <header> ToDo List </header>
      <main>

        <div className="general_container">
          <FormTodos onTaskChange={handleTaskChange}/>
        </div>

        <div className="todo_list_container">
          <TodoList listOfTodo={todoList} count={todoList.length}/>
        </div>

      </main>
      <footer>Made by Romina Trazzi ~ 2024 ~</footer>
    </>
  )

}

export default App
