import React from 'react';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import reg from '../images/reg.png';
function Register() {
    var [name, setName] = useState('');
    var [email, setEmail] = useState('');
    var [dob,setDob]=useState('');
    var[gender,setGender]=useState('');
    var[address,setAddress]=useState('');
    var[numb,setNumber]=useState('');
    var [password, setPassword] = useState('');
    var [passwordConf, setPasswordConf] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    var navigate = useNavigate();
    function registerUser(){
        var user = {
            name: name,
            email: email,
            dob:dob,
            gender:gender,
            address:address,
            phone_num:numb,
            password: password,
        }
        if(passwordConf !== password){
    setErrorMessage('Passwords do not match');
    return; 
}
        axios.post('http://127.0.0.1:8000/signup',user).then(response=>{
            setErrorMessage('');
            navigate('/login');
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(' '));
            }else{
                setErrorMessage('Failed to connect to api');
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
                            <h2>Create an account</h2>
                            <p>Sign up to book doctor appointments easily</p>
                            {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
                        </div>
                        <div className='card p-4 shadow border-0 rounded' style={{ maxWidth: "500px", width: "100%" }}>
                            {/* name */}
                            <div className="input-group mb-3">
                                <span className="input-group-text border-0 bg-light"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="grey" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg></span>
                                <input type="text" className="form-control" placeholder="Enter Name"  value={name} onInput={(event)=>setName(event.target.value)}/>
                            </div>
                            {/* Email */}
                            <div className='input-group'>
                                <span className='input-group-text border-0 bg-light'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20" fill='grey'><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/></svg></span>
                                <input type="email" className="form-control mb-3" placeholder="Email" value={email} onInput={(event)=>setEmail(event.target.value)}/>
                            </div>
                            {/* DOB */}
                            <div className='input-group'>
                                <span className='input-group-text border-0 bg-light'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width='20' height='20' fill='grey'><path d="M224 64C241.7 64 256 78.3 256 96L256 128L384 128L384 96C384 78.3 398.3 64 416 64C433.7 64 448 78.3 448 96L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 96C192 78.3 206.3 64 224 64zM160 304L160 336C160 344.8 167.2 352 176 352L208 352C216.8 352 224 344.8 224 336L224 304C224 295.2 216.8 288 208 288L176 288C167.2 288 160 295.2 160 304zM288 304L288 336C288 344.8 295.2 352 304 352L336 352C344.8 352 352 344.8 352 336L352 304C352 295.2 344.8 288 336 288L304 288C295.2 288 288 295.2 288 304zM432 288C423.2 288 416 295.2 416 304L416 336C416 344.8 423.2 352 432 352L464 352C472.8 352 480 344.8 480 336L480 304C480 295.2 472.8 288 464 288L432 288zM160 432L160 464C160 472.8 167.2 480 176 480L208 480C216.8 480 224 472.8 224 464L224 432C224 423.2 216.8 416 208 416L176 416C167.2 416 160 423.2 160 432zM304 416C295.2 416 288 423.2 288 432L288 464C288 472.8 295.2 480 304 480L336 480C344.8 480 352 472.8 352 464L352 432C352 423.2 344.8 416 336 416L304 416zM416 432L416 464C416 472.8 423.2 480 432 480L464 480C472.8 480 480 472.8 480 464L480 432C480 423.2 472.8 416 464 416L432 416C423.2 416 416 423.2 416 432z"/></svg></span>
                            <input type='date' className='form-control mb-3' value={dob} onInput={(event)=>setDob(event.target.value)}/>
                            </div>
                            {/* Gender */}
                            <div className='input-group'>
                                <span className='input-group-text border-0 bg-light'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20" fill='grey'><path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg></span>
                            <select className="form-control mb-3" value={gender} onInput={(event)=>setGender(event.target.value)}>
                                <option value='' disabled >Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Prefer not to say</option>
                            </select>
                            </div>
                            {/* Address */}
                            <div className='input-group'>
                                <span className='input-group-text border-0 bg-light'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20" fill='grey'><path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/></svg></span>
                                <textarea className="form-control mb-3" placeholder="Address" value={address} onInput={(event)=>setAddress(event.target.value)}/>
                            </div>

                            {/* Mob */}
                            <div className='input-group'> 
                                <span className='input-group-text border-0 bg-light'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20" fill='grey'><path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg></span>
                            <input type="text" className="form-control  mb-3" placeholder="Phone Number" value={numb} onInput={(event)=>setNumber(event.target.value)}/>
                            </div>
                            {/* Passwrd */}
                            <div className='input-group'>
                                <span className='input-group-text border-0 bg-light'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="20" height="20" fill='grey'><path d="M320 96C284.7 96 256 124.7 256 160L256 224L448 224C483.3 224 512 252.7 512 288L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 288C128 252.7 156.7 224 192 224L192 160C192 89.3 249.3 32 320 32C383.5 32 436.1 78.1 446.2 138.7C449.1 156.1 437.4 172.6 419.9 175.6C402.4 178.6 386 166.8 383 149.3C378 119.1 351.7 96 320 96zM360 424C373.3 424 384 413.3 384 400C384 386.7 373.3 376 360 376L280 376C266.7 376 256 386.7 256 400C256 413.3 266.7 424 280 424L360 424z"/></svg></span>
                            <input type="password" className="form-control mb-3" placeholder="Password" value={password}onInput={(event)=>setPassword(event.target.value)}/>
                            </div>
                            {/* Password confirmation */}
                            <div className='input-group'>
                                <input type="password" className="form-control mb-3" placeholder="Confirm Password" value={passwordConf} onInput={(e)=>setPasswordConf(e.target.value)}/>
                            </div>
                            {/* Button */}
                            <button className="btn btn-primary w-100 py-2 fw-semibold mb-3"onClick={registerUser}>Register </button>
                            <p className='text-center'>Already have an account ? <a href='login'>Log in</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    );
    }        
export default Register;
