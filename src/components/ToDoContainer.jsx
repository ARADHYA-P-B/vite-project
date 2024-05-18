import React from 'react'

const ToDoContainer = ({toDos, handleDel}) => {

  return (
    toDos.map((task) => (
        <div key={task.id} className='todo-item'>
            <p>Task {task.id}: {task.title} </p>
            <div>
                <button className='edit-btn'>Edit</button>
                <button className='del-btn' onClick={() => handleDel(task.id)}>Delete</button>
            </div>
        </div>
    ))
  )
}

export default ToDoContainer