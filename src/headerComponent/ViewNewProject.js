import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ViewNewProject({ newtask }) {
  const [changecolor, setChangeColor] = useState("#451252")

  const handlechangecolor = useCallback(()=>{
    const randomColor = '#' + Math.random().toString(14).slice(1,8);
    setChangeColor(randomColor)
    
  },[changecolor])
  return (
    <div>
      {newtask.map(task => (
        <div key={task.id}>
          <Link to="/Task">
            <div   onCLick={handlechangecolor} style={{backgroundColor:`${changecolor}`}}>
            {task.id}
            {task.name}
            {task.startdate}
            {task.enddate}
            </div>
          </Link>

        </div>
      ))
      }
    </div>

  )
}
