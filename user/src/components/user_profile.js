import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="container mt-4" style={{ minHeight: "100vh" }}>
        <h3 className="text-center mb-4 fw-bold">User Profile</h3>

        <div className="card p-4 shadow-sm border-0">

          {/* Profile Header */}
          <div className="d-flex align-items-center mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="user"
              className="rounded-circle me-3 mr-2"
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
            <div>
              <h4 className="mb-1">Aditya Sharma</h4>
              <p className="text-muted mb-0">Patient</p>
            </div>
          </div>

          {/* User Details */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <h6 className="text-muted">Email</h6>
              <p className="fw-semibold">aditya.sharma@gmail.com</p>
            </div>

            <div className="col-md-6 mb-3">
              <h6 className="text-muted">Phone</h6>
              <p className="fw-semibold">0909090909</p>
            </div>

            <div className="col-md-6 mb-3">
              <h6 className="text-muted">Gender</h6>
              <p className="fw-semibold">Male</p>
            </div>

            <div className="col-md-6 mb-3">
              <h6 className="text-muted">Date of Birth</h6>
              <p className="fw-semibold">March 5, 2002</p>
            </div>

            <div className="col-md-12 mb-3">
              <h6 className="text-muted">Address</h6>
              <p className="fw-semibold">
                23/B MG Road, Trivandrum, Kerala
              </p>
            </div>

          </div>

          <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>← Back</button>

        </div>
      </div>
    </div>
  );
}

export default UserProfile;