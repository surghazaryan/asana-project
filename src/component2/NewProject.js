import React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import ViewNewProject from './ViewNewProject';

const getTaskfromLS = () => {
    const task = localStorage.getItem('Task');
    if (task) {
        return JSON.parse(task);
    }
    else {
        return []
    };
};
export default function NewProject() {
    const [open, setIsopen] = useState(false);
    const [name, setName] = useState('');
    const [textarea, setTextarea] = useState('');
    const [startdate, setStartDate] = useState('');
    const [enddate, setendDate] = useState('');
    const [newtask, setNewtask] = useState(getTaskfromLS());

    const closeIcon = <AiOutlineClose onClick={() => { setIsopen(!open) }} className='new-project-close' />
    const handleAddProject = useCallback((e) => {
        e.preventDefault();
        setIsopen(!open);
    }, []);

    const handleAddUserSubmit = (e) => {
        e.preventDefault();
        let Task = {
            id: Math.floor(Math.random() * 10000) + 1,
            name,
            textarea,
            startdate,
            enddate,
        };
        setNewtask([...newtask, Task]);
        setName('');
        setTextarea('');
        setStartDate('');
        setendDate('');
    };
    useEffect(() => {
        if (setName() !== '' && setTextarea() !== '' && setStartDate() !== '' && setendDate() !== '') {
            localStorage.setItem('Task', JSON.stringify(newtask));
        }
    }, [newtask]);

    return (
        <div>
            <div className="parent-new-project">
                <div><h4>Project</h4></div>
                <hr className='project-hr' />
                <button onClick={handleAddProject} className='btn-new-project'>New Project</button>
            </div>
            {open ?
                <div>
                    <div >{closeIcon}</div>
                    <form onSubmit={handleAddUserSubmit} className='project-form'>
                        <input type="text" placeholder='name' value={name || ''} onChange={(e) => setName(e.target.value)} />
                        <textarea placeholder='description' value={textarea} onChange={(e) => setTextarea(e.target.value)}></textarea>
                        <input type="date" value={startdate || ''} onChange={(e) => setStartDate(e.target.value)} />
                        <input type="date" value={enddate || ''} onChange={(e) => setendDate(e.target.value)} />
                        <button className='btn-new-send-project'>send</button>
                    </form>
                </div>
                : ''}
            <ViewNewProject newtask={newtask} />
        </div>
    );
};
