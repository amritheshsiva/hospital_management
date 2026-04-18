import React from 'react';
import {useEffect,useState} from 'react'
import Navbar from '../components/navbar';

function Appointment(){
    const [appointments,setAppointments]=useState([]);
    const [searchDoctor,setSearchDoctor]=useState("");
    const [status, setStatus] = useState("");
    const userId = localStorage.getItem("user_id");

    useEffect(() => {
    const token = localStorage.getItem('token');

    fetch(`http://127.0.0.1:8000/${userId}/appointmentlist`, {
        headers: {
            "Authorization": `Token ${token}`  
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log("API RESPONSE:", data);
        if (Array.isArray(data)) {
            setAppointments(data);
        } else {
            console.error("Not an array:", data);
            setAppointments([]);  
        }
    })
    .catch(err => {
        console.error("Fetch error:", err);
        setAppointments([]);
    });
}, [userId]);

const handleFilter = () => {
    const token = localStorage.getItem("token");
    if (!searchDoctor && !status) {
        fetch(`http://127.0.0.1:8000/${userId}/appointmentlist`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
        .then(res => res.json())
        .then(data => setAppointments(data));
        return;
    }

    let url = "http://127.0.0.1:8000/bookingfilter?";

    if (searchDoctor) {
        url += `doctor_name=${searchDoctor}&`;
    }

    if (status) {
        url += `status=${status}`;
    }

    fetch(url, {
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(res => res.json())
    .then(data => setAppointments(data));
}


const handleCancel = (id) => {
  const token = localStorage.getItem("token");

  fetch("http://127.0.0.1:8000/cancelbooking", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    },
    body: JSON.stringify({
      booking_id: id   // 
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      handleFilter(); // refresh
    });
};

    return (
        <div>
            <Navbar/>

            <div className='container-fluid' style={{ minHeight: "100vh" }}>
                <h2 className='text-center mt-4 fw-bold'>My Appointments</h2>

                {/* Search + Dropdown Bar */}
                <div className="d-flex justify-content-center mt-4">
                    <div 
                        className="d-flex align-items-center w-100 shadow-sm rounded-pill overflow-hidden"
                        style={{ maxWidth: "1000px", background: "#ffffff" }}
                    >

                        {/* Search Input */}
                        <div className="d-flex align-items-center flex-grow-1 px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" viewBox="0 0 640 640">
                                <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272z"/>
                            </svg>

                            <input
                                type="text"
                                className="form-control border-0 bg-transparent"
                                placeholder="Search appointments..."
                                onChange={(e)=>setSearchDoctor(e.target.value)}
                            />
                        </div>

                        {/* Divider */}
                        <div style={{ width: "1px", height: "30px", background: "#ddd" }}></div>

                        {/* Dropdown */}
                        <select 
                            className="form-control border-0"
                            style={{ 
                                maxWidth: "160px",
                                boxShadow: "none",
                                outline: "none",
                                background: "transparent"
                            }}
                            value={status}
                            onChange={(e)=>setStatus(e.target.value)}
                        >
                            <option value="">All Status</option>
                            <option>Upcoming</option>
                            <option>Completed</option>
                            <option>Cancelled</option>
                        </select>

                        {/* Search Button */}
                        <button className="btn btn-primary px-4 h-100" onClick={handleFilter}>
                            Search
                        </button>

                    </div>
                </div>

                {/* Appointment List */}
                <div className='row px-3 justify-content-center'>
                    {Array.isArray(appointments) && appointments.map((appt) => (
                    <div className='col-md-10 mt-4'key={appt.id}>
                        <div 
                            className='card border-0 p-3 shadow-sm'
                            style={{ borderRadius:'15px' }}
                        >
                            <div className='d-flex align-items-center justify-content-between flex-wrap'>

                                <div className='d-flex align-items-center'>
                                    <img 
                                        src="https://imgs.search.brave.com/HL1iM8eX1ZJ0a7abH7FCDElbCbpXmY3-2mQbxAwzYMY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mYWNl/bGVzcy1tYWxlLWRv/Y3Rvci1hdmF0YXIt/c3RldGhvc2NvcGUt/ZmxhdC1kZXNpZ24t/aWRlYWwtaGVhbHRo/Y2FyZS1tZWRpY2Fs/LWFwcHMtYW5vbnlt/b3VzLXByb2Zlc3Np/b25hbC1wcm9maWxl/cy0zODgzMzMyODIu/anBn"
                                        alt="doc"
                                        className='rounded-circle me-3'
                                        style={{width:'70px', height:'70px', objectFit:'cover'}}
                                    />
                                    <div>
                                        <p className='mb-1 text-muted small'>
                                                {appt.Date} • {appt.time_slot}
                                        </p>
                                        <h5 className='mb-1 fw-semibold'>{appt.doctor}</h5>
                                        <span className='badge bg-light text-secondary'>
                                            {appt.specialization}
                                        </span>
                                    </div>
                                </div>

                                <div className='text-end'>
                                        <span className={`badge px-3 py-2 mb-2 
                                            ${appt.status === 'Upcoming' ? 'bg-success' :
                                              appt.status === 'Completed' ? 'bg-secondary' :
                                              'bg-danger'
                                              }`}>
                                            {appt.status}
                                        </span>

                                        <br />
                                        {appt.status === "Upcoming" && (
                                            <button className='btn btn-outline-danger btn-sm px-4' onClick={() => {
                                                if (window.confirm("Are you sure you want to cancel this appointment?")) {
                                                    handleCancel(appt.id);
                                                }
                                                }}
                                            >Cancel</button>
                                        )}
                                    </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Appointment;