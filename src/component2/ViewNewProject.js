import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./NewProject.css";

export default function ViewNewProject({ newtask }) {
  const navigate = useNavigate();
  const goToTaskpage = useCallback((id) => {
    navigate(`task/${id}`);
  }, [navigate]);

  return (
    <div>
      {newtask.map(task => (
        <div key={task.name} >
          <div onClick={event => goToTaskpage(task.id)} className="created-new-project">
            <p> {task.name}</p>
          </div>
        </div>
      ))
      }
    </div>
  );
};
