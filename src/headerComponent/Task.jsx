import React, { useCallback } from 'react'
import { useRef } from 'react';
import { useState } from 'react'

export default function Task() {
  const [newTask, setNewTask] = useState('');
  const [value_1, setvalue_1] = useState("");
  const [value_2, setvalue_2] = useState("");


  const CreatnewTask = useCallback((e) => {
    e.preventDefault()
    setNewTask(!newTask)
  }, [newTask])

  const handleClick = useCallback((e)=>{
    e.preventDefault()
       setvalue_2(value_1)
  },[value_1])

  return (
    <div>
      <button onClick={CreatnewTask}>Add new Task</button>
      {newTask ? 
      <form action="">
        <textarea placeholder='newTask' value={value_1} onChange={(e)=>{setvalue_1(e.target.value)}} ></textarea> 
      <button onClick={handleClick}>send</button>
      </form>
  
      : ''}
           <div> 
            <p>To DO</p>   <p>Complited</p>    <br/> 
            {value_2}
            </div>

     
    </div>
  )
}
