import React from 'react';
function Login() {
    return (
        <div className="container justify-content-center align-items-center vh-100">
            <div className='card'>
            <h1>Login</h1>
            <label>Enter Email</label>
            <input type="text" className="form-control" placeholder="Email"/>
            <input type="password" className="form-control mt-2" placeholder="Password"/>
            <button className="btn btn-primary mt-2">Login </button>
            </div>
        </div>
        );
    }        
export default Login;
