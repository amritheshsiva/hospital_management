import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useNavigate, useParams } from 'react-router-dom';

function DoctorProfile() {
  const navigate = useNavigate();
  const { id } = useParams();   // 👈 GET ID
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`http://127.0.0.1:8000/${id}/get_doctor`, {
      headers: {
        "Authorization": `Token ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setDoctor(data);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!doctor) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className="container mt-4" style={{ minHeight: "100vh" }}>
        <h3 className="text-center mb-4 fw-bold">Doctor Profile</h3>

        <div className="card p-4 shadow-sm border-0">
          <div className="d-flex align-items-center mb-4">
            <img
              src="https://imgs.search.brave.com/HL1iM8eX1ZJ0a7abH7FCDElbCbpXmY3-2mQbxAwzYMY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mYWNl/bGVzcy1tYWxlLWRv/Y3Rvci1hdmF0YXIt/c3RldGhvc2NvcGUt/ZmxhdC1kZXNpZ24t/aWRlYWwtaGVhbHRo/Y2FyZS1tZWRpY2Fs/LWFwcHMtYW5vbnlt/b3VzLXByb2Zlc3Np/b25hbC1wcm9maWxl/cy0zODgzMzMyODIu/anBn"
              alt="doc"
              className='rounded-circle me-3'
              style={{ width: '70px', height: '70px', objectFit: 'cover' }}
            />
            <div>
              <h4 className="mb-1">{doctor.name}</h4>
              <p className="text-muted mb-1">{doctor.Qualification}</p>
              <span className="badge bg-light text-danger">
                {doctor.Specialization}
              </span>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <h6 className="text-muted">Phone</h6>
              <p className="fw-semibold">{doctor.phone_num}</p>
            </div>

            <div className="col-md-6 mb-3">
              <h6 className="text-muted">Email</h6>
              <p className="fw-semibold">{doctor.email}</p>
            </div>

            <div className="col-md-6 mb-3">
              <h6 className="text-muted">Qualification</h6>
              <p className="fw-semibold">{doctor.Qualification}</p>
            </div>

            <div className="col-md-6 mb-3">
              <h6 className="text-muted">Experience</h6>
              <p className="fw-semibold">{doctor.Year_ofExp}</p>
            </div>
          </div>

          <button
            className="btn btn-primary w-100 mt-3"
            onClick={() => navigate(`/book/${doctor.id}`)}
          >
            Book Appointment
          </button>
        </div>

        <button
          className="btn btn-outline-primary mt-3"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

export default DoctorProfile;