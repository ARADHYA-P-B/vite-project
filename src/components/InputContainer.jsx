import React, { useEffect, useState } from 'react'

const InputContainer = ({handleAdd}) => {
  const [task, setTask] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!task) {
      return;
    }
    handleAdd(task)
    setTask("")
  }

  return (
    <div className='containeraddtask'>
      <input type="text" value={task} placeholder='Add task here' autoFocus onChange={(e)=> {
        setTask(e.target.value)
      }} />
      <button style={{margin: "7px"}} onClick={handleSubmit}>Add Task</button>
    </div>
  )
}

export default InputContainer