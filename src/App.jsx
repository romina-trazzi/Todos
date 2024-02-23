import { useState } from 'react';
import styles from './App.module.css'
import FormTodos from './components/FormTodos/FormTodos.jsx';
import TodoList from './components/TodoList/TodoList.jsx';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [editElement, setEditElement] = useState({editTitle:"", editDescription:""});
  const [isEditing, setIsEditing] = useState(false);
  
  const handleTaskChange = (newTask) => {
    
    // Set the updated TodoList
    setTodoList((prev) => [...prev, newTask]);
    setIsEditing(false);
  }

  const handleDelete = (indexTodo) => {
    setTodoList((prev) => prev.filter((_, index) => index !== indexTodo));
  };

  const handleEdit = (indexTodo) => {

    // Get editable current values
    const {titolo, descrizione} = todoList[indexTodo];
    setEditElement({editTitle: titolo, editDescription: descrizione})

    // Change isEditingValue
    setIsEditing(true);
  }

  return (
    <>
      <header> ToDo List </header>
      <main>

        <div className={styles.general_container}>
          <FormTodos onTaskChange={handleTaskChange} editElement={editElement} isEditing={isEditing}/>
        </div>

        <div className={styles.todo_list_container}>
          <TodoList listOfTodo={todoList} onDelete={handleDelete} onEdit={handleEdit}/>
        </div>

      </main>
      <footer>Made by Romina Trazzi ~ 2024 ~</footer>
    </>
  )

}

export default App
