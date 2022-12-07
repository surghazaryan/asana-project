import React, { createContext, } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import ViewMember from "../component2/ViewMember";
import Header from "../component2/Header";
import "./Header.css";
import "./Members.css";

const getUserfromLS = () => {
    const users = localStorage.getItem('users');
    if (users) {
        return JSON.parse(users);
    }
    else {
        return []
    };
};
const getAdminfromLS = () => {
    const admins = localStorage.getItem('useradmin');
    if (admins) {
        return JSON.parse(admins);
    }
    else {
        return []
    };
};
export const headerSmallContext = createContext();

export default function Members() {
    const [open, setIsOpen] = useState(false);
    const [lastName, setLastName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setusers] = useState(getUserfromLS());
    const [admin, setadmin] = useState(getAdminfromLS());

    const closeIcon = <AiOutlineClose onClick={() => { setIsOpen(!open) }} />
    const addMemberClick = useCallback((e) => {
        e.preventDefault();
        setIsOpen(!open);
    }, []);
    const handleAddUserSubmit = (e) => {
        e.preventDefault();
        let user = {
            name,
            lastName,
            email,
            password
        };
        setusers([...users, user]);
        setName('');
        setLastName('');
        setPassword('');
        setEmail('');
    };
    const deleteUser = (name) => {
        const filteredUser = users.filter((element, index) => {
            return element.name !== name
        });
        setusers(filteredUser)
    };
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    return (
        <>
            <headerSmallContext.Provider value={{ admin, setadmin }}>
                <Header />
            </headerSmallContext.Provider>
            <div>
                <div className="parent-description">
                    <div><h4>Description</h4></div>
                    <hr className='member-hr' />
                    <p>Click to add team description...</p>
                </div>
                <div className='parent-add-member'>
                    <div className="parent-btn-title-member">
                        <button className='btn-add-member' onClick={addMemberClick}>+</button>
                        <label htmlFor="">Add member</label>
                    </div>
                    {open ?
                        <div>
                            <div className='closIcon'> {closeIcon}</div>
                            <form onSubmit={handleAddUserSubmit} className="formMembersImputs">
                                <input type='text' placeholder='Name' value={name} onChange={(e) => (setName(e.target.value))} />
                                <input type='text' placeholder='lastname' value={lastName} onChange={(e) => (setLastName(e.target.value))} />
                                <input type="email" placeholder='email' value={email} onChange={(e) => (setEmail(e.target.value))} />
                                <input type="password" placeholder='Password' value={password} onChange={(e) => (setPassword(e.target.value))} />
                                <button className='btn-members'>send</button>
                            </form>
                        </div>
                        : ""
                    }
                </div>
                <ViewMember users={users} deleteUser={deleteUser} />
            </div>
        </>
    );
};
