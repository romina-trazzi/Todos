import { useState } from 'react';
import './App.css'
import FormTodo from './components/FormTodo.jsx';
import InsertButton from './components/InsertButton.jsx';
import TodoList from './components/TodoList.jsx';


function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState({nome: "", descrizione:""});

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const handleAdd = (newTask) => {
    setNewTask(newTask);
  }

  return (
    <>
      <header> ToDo List </header>
      <main>
        <div className="general_container">
          <FormTodo onInput={handleChange}/>
          <InsertButton onAdd={handleAdd}/>
        </div>
        <div>
          <TodoList todoList={todoList}/>
        </div>
      </main>
      <footer>Made by Romina Trazzi ~ 2024 ~</footer>
    </>
  )


    
}

export default App
