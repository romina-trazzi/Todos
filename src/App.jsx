import { useState } from 'react';
import './App.css'
import FormTodo from './components/FormTodo.jsx';
import InsertButton from './components/InsertButton.jsx';
import TodoList from './components/TodoList.jsx';
import DUMMY_TODO from './assets/DUMMY_TODO.js';


function App() {
  const [todoList, setTodoList] = useState(DUMMY_TODO);
  const [newTask, setNewTask] = useState({id:"", nome: "", descrizione:""});

  const handleAdd = (event, newTask) => {
    event.preventDefault();
    console.log("Ciao");
    setNewTask(event.target.value);
    setTodoList((prev) => prev, ...todoList);
  }

  return (
    <>
      <header> ToDo List </header>
      <main>
        <div className="general_container">
          <FormTodo/>
          <InsertButton onAdd={handleAdd}/>
        </div>
        <div className="todo_list_container">
          <TodoList listOfTodo={todoList}/>
        </div>
      </main>
      <footer>Made by Romina Trazzi ~ 2024 ~</footer>
    </>
  )


    
}

export default App
