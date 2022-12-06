import React from 'react'
import  { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { FaRegUser } from "react-icons/fa"
import { useNavigate } from 'react-router';
import "./Login.css"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const localsignup = localStorage.getItem('email')
    const navigate = useNavigate()
    // useEffect(()=>{
    //   localStorage.setItem('email',JSON.stringify('garush@gmail.com'));
    //   localStorage.setItem('password',JSON.stringify('garush44'));

    // },[])

    useEffect(() => {
      if (localsignup) {
        navigate('/home')
      }
    })
    const handleSubmit = useCallback((e) => {
      e.preventDefault();
      if (email.length === 0 || password.length === 0) {
        setError(true);
      }
      if (email && password) {
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("password", JSON.stringify(password));
        
      }
    });
  return (
    <div>
        <div>
          <form onSubmit={handleSubmit} className='Register-Form'>
            <div className="register-parent-input">
              <h1 className="register-title">Create Account</h1>
              <FaRegUser className="user-icon" />
              <input className="register-inp"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
              />
              <br />
              <div>
                {error && email.length <= 0 ?
                  <label className="register-inp-label">Email is not filled</label>
                  : ""
                }
              </div>
              <input className="register-inp"
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <div>
                {error && password.length <= 0  ?
                  <label className="register-inp-label">Password is not filled</label>
                  : ""
                }
              </div>
              <button className="register-submit">Login</button>
            </div>
          </form>
      </div>
    </div>
  )
}
