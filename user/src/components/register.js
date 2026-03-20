import React from 'react';
function Register() {
    return (
    <div>
        <div className="container justify-content-center align-items-center vh-100">
            <h1>Register</h1>
            <input type="text" className="form-control" placeholder="Enter Name"/>
            <input type="text" className="form-control" placeholder="Email"/>
            <input type="password" className="form-control mt-2" placeholder="Password"/>
            <button className="btn btn-primary mt-2">Register </button>
        </div>
    </div>
        );
    }        
export default Register;
