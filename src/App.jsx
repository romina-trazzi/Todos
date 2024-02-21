import { useState } from 'react';
import './App.css'
import FormTodo from './components/FormTodo.jsx';
import SingleTodo from './components/SingleTodo.jsx';


function App() {
  

  return (
    <>
      <header> ToDo List </header>
      <main>
        <FormTodo/>
        <div>
          <SingleTodo/>
        </div>
      </main>
      <footer>Made by Romina Trazzi ~ 2024 ~</footer>
    </>
  )


    
}

export default App
