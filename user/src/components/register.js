import React from 'react';
import reg from '../images/reg.png';
function Register() {
    return (
    <div>
        <h5 className='ml-5 mt-4 p-2' style={{ fontWeight: "700", color: "#2b7cff" }}>MediCare
            <span style={{ color: "#ff7a00" }}>+</span>
        </h5>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6'>
                    {/* <img src={reg} alt='regpage_pic' className='img-fluid rounded'style={{width:'700px', height:'550px' }}/> */}
                    <img src={reg} alt="regpage_pic" className="img-fluid rounded"
                    style={{
                        width: "680px",
                        height: "550px",
                        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                        WebkitMaskComposite: "intersect",
                        maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                        maskComposite: "intersect",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "100% 100%",
                        maskSize: "100% 100%"
                        }}/>
                </div>
                <div className='col-md-6'>
                        <h2>Create an account</h2>
                        <p>Sign up to book doctor appointments easily</p>
                        <div className='card'>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="container justify-content-center align-items-center vh-100">
            <h1>Register</h1>
            <input type="text" className="form-control" placeholder="Enter Name"/>
            <input type="text" className="form-control" placeholder="Email"/>
            <input type="password" className="form-control mt-2" placeholder="Password"/>
            <button className="btn btn-primary mt-2">Register </button>
        </div> */}
    </div>
        );
    }        
export default Register;
