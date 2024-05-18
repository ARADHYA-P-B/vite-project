import React, { useState } from 'react'
import AddTask from './components/InputContainer'
import TaskItem from './components/ToDoContainer'
import "./App.css"
import InputContainer from './components/InputContainer'
import ToDoContainer from './components/ToDoContainer'

let id = 1

const App = () => {
  const [toDos, setToDos] = useState([])
  
  const handleAdd = (task) => {
    if (!task) {
      return;
    } 
    const taskObj = {
      title: task,
      id: id
    }
    id += 1

    const newTodos = [...toDos, taskObj]
    setToDos(newTodos)
  }

  const handleDel = (id) => {
    const DelTodos = toDos.filter((task) => task.id !== id)
    setToDos(DelTodos)
  }

  return (
    <div className='container'>
      <h1 style={{marginBottom: "5px"}}>Task List</h1>
      <InputContainer handleAdd={handleAdd}/>
      <ToDoContainer toDos={toDos} handleDel={handleDel}/>
    </div>
  )
}

export default App