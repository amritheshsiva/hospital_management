import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from 'react-router-dom';

function DoctorProfile() {
    const navigate = useNavigate();
  return (
    <div>
      <Navbar />

      <div className="container mt-4" style={{ minHeight: "100vh" }}>
        <h3 className="text-center mb-4 fw-bold">
          Doctor Profile
        </h3>
        <div className="card p-4 shadow-sm border-0">
          <div className="d-flex align-items-center mb-4">
            <img src="https://imgs.search.brave.com/HL1iM8eX1ZJ0a7abH7FCDElbCbpXmY3-2mQbxAwzYMY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mYWNl/bGVzcy1tYWxlLWRv/Y3Rvci1hdmF0YXIt/c3RldGhvc2NvcGUt/ZmxhdC1kZXNpZ24t/aWRlYWwtaGVhbHRo/Y2FyZS1tZWRpY2Fs/LWFwcHMtYW5vbnlt/b3VzLXByb2Zlc3Np/b25hbC1wcm9maWxl/cy0zODgzMzMyODIu/anBn" alt="doc"className='rounded-circle me-3 mr-2' style={{width:'70px', height:'70px', objectFit:'cover'}}/>
            <div>
              <h4 className="mb-1">Dr. Arjun</h4>
              <p className="text-muted mb-1">MBBS, MD (Cardiology)</p>
              <span className="badge bg-light text-danger">
                Cardiology
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <h6 className="text-muted">Phone</h6>
              <p className="fw-semibold">9090909090</p>
            </div>

            <div className="col-md-6 mb-3">
              <h6 className="text-muted">Email</h6>
              <p className="fw-semibold">arjun.shankar@gmail.com</p>
            </div>

            <div className="col-md-6 mb-3">
              <h6 className="text-muted">Qualification</h6>
              <p className="fw-semibold">
                MBBS, MD Cardiology
              </p>
            </div>

            <div className="col-md-6 mb-3">
              <h6 className="text-muted">Experience</h6>
              <p className="fw-semibold">
                8+ years experience in Cardiology
              </p>
            </div>

          </div>

          <button className="btn btn-primary w-100 mt-3" onClick={() => navigate('/book')}>
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
export default DoctorProfile;
