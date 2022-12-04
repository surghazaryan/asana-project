import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useCallback } from 'react'
import { AiOutlineClose } from "react-icons/ai"
import Header from './Header';
import View from './View';
import "./Header.css"

const getDatafromLS = () => {
    const data = localStorage.getItem('users');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return []
    }
}
export default function Members() {
    const [open, setIsOpen] = useState(false)
    const [lastName, setLastName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setusers] = useState(getDatafromLS());

    const closeIcon = <AiOutlineClose onClick={() => { setIsOpen(!open) }} />

    const addMemberClick = useCallback((e) => {
        e.preventDefault()
        setIsOpen(!open)
    }, [])

    const handleAddUserSubmit = (e) => {
        e.preventDefault();
        let user = {
            name,
            lastName,
            email,
            password
        }
        setusers([...users, user]);
        setName('');
        setLastName('');
        setPassword('');
        setEmail('');

    }

    const deleteUser = (name) =>{
       const filteredUser = users.filter((element,index)=>{
        return element.name !== name
       })
       setusers(filteredUser)
    }

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users])
  return (
    <div>
       <Header users={users}/>
              
            

              <div className='add-member'>
  
                  <button className='btn-add-member' onClick={addMemberClick}>+</button>
                  {open ?
  
                      <div>
                          <div className='closIcon'> {closeIcon}</div>
                          <form onSubmit={handleAddUserSubmit} className="formMembersImputs">
                              <input type='text' placeholder='Name' value={name} onChange={(e) => (setName(e.target.value))} />
                              <input type='text' placeholder='lastname' value={lastName} onChange={(e) => (setLastName(e.target.value))} />
                              <input type="email" placeholder='email' value={email} onChange={(e) => (setEmail(e.target.value))} />
                              <input type="password" placeholder='Password' value={password} onChange={(e) => (setPassword(e.target.value))} />
                              <button>send</button>
                          </form>
  
                      </div>
  
                      : ""
                  }
  
            
              </div>
              <View users={users} deleteUser={deleteUser}/>
    </div>
  )
}
