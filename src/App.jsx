import { useState } from 'react';
import styles from './App.module.css'
import FormTodos from './components/FormTodos/FormTodos.jsx';
import TodoList from './components/TodoList/TodoList.jsx';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [editElement, setEditElement] = useState({editTitle:"", editDescription:"", index:""});
  const [isEditing, setIsEditing] = useState(false);
  const [todoListPriority, setTodoListPriority] = useState([]);
  
  const handleTaskChange = (task, action) => {
    
    if (action === "create") {

      // Set the updated TodoList
      setTodoList((prev) => [...prev, task]);

    } 
    
    
    if (action === "update") {
      
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

    // Remove from priority list if deleted
    setTodoListPriority(prev => prev.filter(index => index !== indexTodo));
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
    
    setTodoList(prev => {
      // Copy of the previous array 
      const updatedTodoList = [...prev];

      // Modify and toggle the "complete" property value (of the selected object)
      updatedTodoList[indexTodo] = {...updatedTodoList[indexTodo], completed: !updatedTodoList[indexTodo].completed};
      return updatedTodoList;
    })
  }

 
  const handlePriority = (indexTodo) => {
     
    setTodoListPriority(prev => {
      // Check if the task is already in the priority list
      const indexOfTodo = prev.indexOf(indexTodo);
        
      // If not (alias === -1), add it to the list
      if (indexOfTodo === -1) {  
        return [...prev, indexTodo];
      // If it's already in the list, remove it
      } else {
        return prev.filter(itemIndex => itemIndex !== indexTodo);
      }
    });
  }

  // GESTIRE IL SORTING
  const handleSorting = () => {

    // Sort list
    const sortedTodoList = todoList.sort((a, b) => {
    const priorityA = todoListPriority.includes(todoList.indexOf(a));
    const priorityB = todoListPriority.includes(todoList.indexOf(b));
    if (priorityA && !priorityB) return -1;
    if (!priorityA && priorityB) return 1;
    return 0;
    });
  }

  return (
    <>
      <header> ToDo List </header>
      <main>

        <div className={styles.general_container}>
          <FormTodos onTaskChange={handleTaskChange} editElement={editElement} isEditing={isEditing}/>
        </div>

        <div className={styles.todo_list_container}>
          <TodoList listOfTodo={todoList} onDelete={handleDelete} onEdit={handleEdit} onComplete={handleComplete} onPriority={handlePriority}/>
        </div>

      </main>
      <footer>Made by Romina Trazzi ~ 2024 ~</footer>
    </>
  )

}

export default App
