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
  }}
/>
                </div>
                <div className='col-md-6 d-flex align-items-center justify-content-center'>
                    <div className="row ">
                        <div>
                            <h2>Welcome Back</h2>
                            <p>Log in to your account</p>
                            {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}

                        </div>
                        <div className='card p-4 shadow border-0 rounded' style={{ maxWidth: "500px", width: "100%" }}>
                            {/* name */}
                            <div className="input-group mb-3">
                                <span className="input-group-text border-0 bg-light"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20" fill='grey'><path d="M320 96C284.7 96 256 124.7 256 160L256 224L448 224C483.3 224 512 252.7 512 288L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 288C128 252.7 156.7 224 192 224L192 160C192 89.3 249.3 32 320 32C383.5 32 436.1 78.1 446.2 138.7C449.1 156.1 437.4 172.6 419.9 175.6C402.4 178.6 386 166.8 383 149.3C378 119.1 351.7 96 320 96zM360 424C373.3 424 384 413.3 384 400C384 386.7 373.3 376 360 376L280 376C266.7 376 256 386.7 256 400C256 413.3 266.7 424 280 424L360 424z"/></svg></span>
                                <input type="text" className="form-control" placeholder="Email" value={email} onInput={(event)=>setEmail(event.target.value)}/>
                            </div>
                            {/* Email */}
                            <div className='input-group'>
                                <span className='input-group-text border-0 bg-light'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20" fill='grey'><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/></svg></span>
                                <input type="email" className="form-control mb-3" placeholder="Password" value={password} onInput={(event)=>setPassword(event.target.value)}/>
                            </div>
                            {/* Button */}
                            <button className="btn btn-primary w-100 py-2 fw-semibold mb-3" onClick={attemptLogin}>Login</button>
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
