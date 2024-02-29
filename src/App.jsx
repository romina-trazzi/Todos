import { useEffect, useState } from 'react';
import styles from './App.module.css'
import FormTodos from './components/FormTodos/FormTodos.jsx';
import Todos from './components/Todos/Todos.jsx';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoListPriority, setTodoListPriority] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editElement, setEditElement] = useState({editTitle:"", editDescription:"", index:""});
  
  const handleTaskChange = (task, action) => {
    
    if (action === "create") {

      // Set the updated TodoList
      setTodoList((prev) => [task, ...prev]);
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
    setTodoListPriority(prev => prev.filter((_, index) => index !== indexTodo));
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

  const handlePriority = (task) => {
     
    setTodoListPriority(prev => {
    
    // Check if the task object is already in the priority list (result: true or false)
    const isAlreadyInPriorityList = prev.includes(task);
    
    // If FALSE (so, the element is not in the list), add it
    if (!isAlreadyInPriorityList) {

      // Add "priority: high" property to the task
      const priorityTask = { ...task, priority: "high" };
      return [priorityTask, ...prev];
     
    // If TRUE (so, the element it's already in the list), remove it
    } else {
       return prev.filter(item => !(item.titolo === task.titolo && item.descrizione === task.descrizione));
    }

    });
  }
  
  const handleSorting = (priorityList) => {    
    setTodoList((prev) => {
  
    /* Filtra gli elementi di prev (alias todoList): 
      - per ogni elemento di prev: se il singolo prevItem non ha titolo e descrizione uguali a quelli di un item di priorityList
      - allora aggiungi il prevItem nella lista filtrata
    */

    const noPriorityList = prev.filter(prevItem => !priorityList.some(priorityItem => priorityItem.titolo === prevItem.titolo && priorityItem.descrizione === prevItem.descrizione));
    const mergedList = [...priorityList, ...noPriorityList];

    return mergedList;
  })};

  useEffect(() => {
    handleSorting(todoListPriority);
  }, [todoListPriority]);


  return (
    <>
      <header> ToDo List </header>
      <main>

        <div className={styles.general_container}>
          <FormTodos onTaskChange={handleTaskChange} editElement={editElement} isEditing={isEditing}/>
        </div>

        <div className={styles.todo_list_container}>
          <h2>Lista ToDo</h2>
          <span className={styles.counter}> {`Element: ${todoList.length}`} </span>

          <ul>
            <Todos listOfTodo={todoList} todoListPriority={todoListPriority} onDelete={handleDelete} onEdit={handleEdit} onComplete={handleComplete} onPriority={handlePriority}/>
          </ul>
        </div>

      </main>
      <footer>Made by Romina Trazzi ~ 2024 ~</footer>
    </>
  )

}

export default App
