import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

function Appointment() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />

      <div className="container mt-4" style={{ minHeight: "100vh" }}>
        <h3 className="text-center mb-4 fw-bold">
          Book Appointment
        </h3>
        <div className="card p-3 mb-4 shadow-sm border-0">
          <div className="d-flex align-items-center">
            <img src="https://imgs.search.brave.com/HL1iM8eX1ZJ0a7abH7FCDElbCbpXmY3-2mQbxAwzYMY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mYWNl/bGVzcy1tYWxlLWRv/Y3Rvci1hdmF0YXIt/c3RldGhvc2NvcGUt/ZmxhdC1kZXNpZ24t/aWRlYWwtaGVhbHRo/Y2FyZS1tZWRpY2Fs/LWFwcHMtYW5vbnlt/b3VzLXByb2Zlc3Np/b25hbC1wcm9maWxl/cy0zODgzMzMyODIu/anBn" alt="doc"className='rounded-circle me-3 mr-2' style={{width:'80px', height:'80px', objectFit:'cover'}}/>
            <div>
              <h5 className="mb-1">Dr. Arjun</h5>
              <p className="text-muted mb-1">MBBS, MD (Cardiology)</p>
              <span className="badge bg-light text-danger">Cardiology</span>
            </div>
           </div>
        </div>


        <div className="card p-4 shadow-sm border-0">
          <h6>Select Appointment Date</h6>
          <input type="date" className="form-control mb-4" />
          <h6>Select Time Slot</h6>
          <div className="d-flex flex-wrap gap-3 mb-4">
            <button className="btn btn-outline-primary mr-2">9:00 AM</button>
            <button className="btn btn-outline-primary mr-2">10:00 AM</button>
            <button className="btn btn-outline-primary mr-2">11:00 AM</button>
            <button className="btn btn-outline-primary mr-2">4:00 PM</button>
            <button className="btn btn-outline-primary mr-2">5:00 PM</button>
            <button className="btn btn-outline-primary mr-2">6:00 PM</button>
          </div>
          <div className="d-flex gap-3">
            <button className="btn btn-secondary w-50 mr-2" onClick={() => navigate(-1)}>Cancel</button>
            <button className="btn btn-primary w-50" ml-2>Confirm Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;