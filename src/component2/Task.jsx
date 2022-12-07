import React, { useCallback } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import "./Task.css";

export default function Task() {
  const id = useParams();
  const [newTask, setNewTask] = useState('');
  const [value_1, setvalue_1] = useState("");
  const [value_2, setvalue_2] = useState([]);
  const [process, setProcess] = useState('');

  const changesProces = useCallback((e) => {
    e.preventDefault();
    setProcess(e.target.value);
  }, [setProcess]);

  const tasks = JSON.parse(localStorage.getItem('Task'));

  const CreatnewTask = useCallback((e) => {
    e.preventDefault();
    setNewTask(!newTask);
  }, [newTask]);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    const taskList = JSON.parse(localStorage.getItem('Task'));
    const newData = {
      name: value_1,
      process: process,
    };
    const newTaskList = [...taskList, newData]
    localStorage.setItem('Task', JSON.stringify(newTaskList));
  }, [value_1, value_2, process]);

  const Todo = useMemo(() => {
    return tasks.filter((item) => {
      return item.process === 'todo';
    })
  }, [tasks]);

  const inProces = useMemo(() => {
    return tasks.filter((item) => {
      return item.process === 'in proses';
    })
  }, [tasks]);

  const complited = useMemo(() => {
    return tasks.filter((item) => {
      return item.process === 'complited';
    });
  }, [tasks]);
  const dann = useMemo(() => {
    return tasks.filter((item) => {
      return item.process === "dann";
    });
  }, [tasks]);

  return (
    <div className='container-task'>
      <div className="parent-task-btn-form">
        <div className='child-parent-task-btn-form'>
          <button onClick={CreatnewTask} className='btn-new-task'>Add new Task</button>
          {newTask ?
            <form action="">
              <textarea placeholder='newTask' value={value_1} onChange={(e) => { setvalue_1(e.target.value) }} className='textarea-task' ></textarea>
            </form>
            : ''}
        </div>
        <div>
          <form onClick={CreatnewTask}>
            <select id="" name="" onChange={e => changesProces(e)} className='new-task-select-parent'>
              <option value='todo' >todo</option>
              <option value='in proses' >in Proses</option>
              <option value='complited' >Complited</option>
              <option value='dann' >Dann</option>
            </select>
            <button onClick={handleClick} className='btn-select-option'> send</button>
          </form>
        </div>
      </div>
      <div>
        <div>
          <div className="parent-task">
            <div className='project-title'>
              <p >To DO</p>
              {Todo.map((item, index) => {
                return (
                  <div key={index}>
                    {item.name}
                  </div>
                )
              })}
            </div>
            <div className='project-title'>
              <p>in Progress</p>
              {inProces.map((item, index) => {
                return (
                  <div key={index}>
                    {item.name}
                  </div>
                )
              })}
            </div>
            <div className='project-title'>
              <p>Complited</p>
              {complited.map((item, index) => {
                return (
                  <div key={index}>
                    {item.name}
                  </div>
                )
              })}
            </div>
            <div className='project-title'>
              <p>Dann</p>
              {dann.map((item, index) => {
                return (
                  <div key={index}>
                    {item.name}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
