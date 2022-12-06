import React, { useCallback } from 'react'
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router';

export default function Task() {
  const id = useParams();
  const [newTask, setNewTask] = useState('');
  const [value_1, setvalue_1] = useState("");
  const [value_2, setvalue_2] = useState("");
  const [project, setProject] = useState([]);

  const netDate = JSON.parse(localStorage.getItem('Task'))
  useEffect(() => {
    setProject(netDate)
  }, [])
  // const thisTask = useMemo(()=>{
  //   const task = []; 
  //   project.forEach((item)=>{if (item.id === Number(id)){
  //      task.push(item.id)
  //   }})
  //   console.log(task);
  //   return task[0];
   
  // },[id,project])
  const onSubmit = netDate=>JSON.stringify(netDate);
 

  const CreatnewTask = useCallback((e) => {
    e.preventDefault()
    setNewTask(!newTask)
  }, [newTask])

  const handleClick = useCallback((e) => {
    e.preventDefault()
    setvalue_2(value_1)
  }, [value_1])

  return (
    <div>
      <button onClick={CreatnewTask}>Add new Task</button>
      {newTask ?
        <form action="">
          <textarea placeholder='newTask' value={value_1} onChange={(e) => { setvalue_1(e.target.value) }} ></textarea>
          <button onClick={handleClick}>send</button>
        </form>

        : ''}
      <div>
        <div>
          <form onClick={CreatnewTask}>
          <select id="" name="">
              <option value={value_2} onChange={(e) => { setvalue_1(e.target.value) }}>todo</option>
               <option value={value_2} onChange={(e) => { setvalue_1(e.target.value) }}>in Proses</option>
               <option value={value_2} onChange={(e) => { setvalue_1(e.target.value) }}>Complited</option>
              <option value={value_2} onChange={(e) => { setvalue_1(e.target.value) }}>Dann</option>
         </select>
         <button onClick={handleClick}> send</button>
          </form>
          <p>To DO</p>
          <p>{value_2}</p>
        </div>
        <div><p>in Progress</p></div>
        <p>{value_2}</p>
        <div>
          <p>Complited</p>
          <p>{value_2}</p>
        </div>
        <div><p>Dann</p>
        <p>{value_2}</p>
        </div>
      </div>
    </div>
  )
}
