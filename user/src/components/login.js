import React from 'react';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import reg from '../images/reg.png';
function Login() {
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  var [errorMessage, setErrorMessage] = useState('');
  var navigate = useNavigate();
  
  function attemptLogin() {
    axios.post('http://127.0.0.1:8000/login',{
      email:email,
      password:password
    }).then(response=>{
      console.log(response.data); //Testing Purpose
      setErrorMessage('')
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user_id", response.data.user_id); 
      navigate('/');
    }).catch(error=>{
      if(error.response.data.errors){
        setErrorMessage(Object.values(error.response.data.errors).join(' '))
      }else if(error.response.data.message){
        setErrorMessage(error.response.data.message)
      }else{
        setErrorMessage('Failed to login user. Please contact admin')
      }
    })
  }
  return (
  <div>
    {/* Logo */}
    <h5 className='ml-5 mt-4 p-2' style={{ fontWeight: "700", color: "#2b7cff" }}>MediCare
      <span style={{ color: "#ff7a00" }}>+</span>
      </h5>
      <div className='container-fluid' style={{ minHeight: "100vh" }}>
        <div className='row'>
          <div className='col-md-6'>
            {/* <img src={reg} alt='regpage_pic' className='img-fluid rounded'style={{width:'700px', height:'550px' }}/> */}
            <img
            src={reg}
            alt="regpage_pic"
            className="img-fluid rounded"
            style={{
              width: "680px",
              height: "550px",
              WebkitMaskImage: `
              linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%),
              linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)
              `,
              WebkitMaskComposite: "intersect",
              maskImage: `
              linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%),
              linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)
              `,
              maskComposite: "intersect",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%"
            }}/>
            </div>
            <div className='col-md-6 d-flex align-items-center justify-content-center'>
              <div className="row ">
                <div>
                  <h2>Welcome Back</h2>
                  <p>Log in to your account</p>
                  {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
                  </div>
                  <div className='card p-4 shadow border-0 rounded' style={{ maxWidth: "500px", width: "100%" }}>
                    {/* Email */}
                    <div className="input-group mb-3">
                      <span className="input-group-text bg-light border-0">
                        <i className="fa-solid fa-envelope text-secondary"></i>
                        </span>
                        <input
                        type="email"
                        className="form-control bg-light border-0"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>
                        {/* Password */}
                        <div className="input-group mb-3">
                          <span className="input-group-text bg-light border-0">
                            <i className="fa-solid fa-lock text-secondary"></i>
                            </span>
                            <input
                            type="password"
                            className="form-control bg-light border-0"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            </div>
                            {/* Button */}
                            <button
                            className="btn w-100 py-2 mb-3"
                            style={{
                              backgroundColor: "#1976d2",
                              color: "#fff",
                              fontWeight: "500"
                            }}
                            onClick={attemptLogin}
                            >Login
                            </button>
                            <p className='text-center'>Don't have an account ? <a href='register'>Sign Up</a></p>
                          </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    );
    }        
export default Login;
