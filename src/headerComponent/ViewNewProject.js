import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ViewNewProject({ newtask }) {

  const navigate= useNavigate()
  const handlechangecolor = useCallback((id)=>{
  navigate(`task/${id}`)
  },[navigate])
  

  return (
    <div>
      {newtask.map(task => (
        <div key={task.id} >
            <div onClick={event=>handlechangecolor(task.id)} >
            {task.id}
            {task.name}
            {task.startdate}
            {task.enddate}
            </div>
         

        </div>
      ))
      }
    </div>

  )
}
