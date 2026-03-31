import React, { useState } from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

function UserEdit() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "Aditya Sharma",
    email: "aditya.sharma@gmail.com",
    phone: "0909090909",
    gender: "Male",
    dob: "2002-03-05",
    address: "23/B MG Road, Trivandrum, Kerala",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user); // later connect to API
    navigate(-1);
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-4" style={{ minHeight: "100vh" }}>
        <h3 className="text-center mb-4 fw-bold">Edit Profile</h3>

        <div className="card p-4 shadow-sm border-0">

          {/* Profile Image */}
          <div className="text-center mb-4">
            <img
              src={user.image}
              alt="user"
              className="rounded-circle mb-2"
              style={{ width: "90px", height: "90px", objectFit: "cover" }}
            />
            <div>
              <input
                type="text"
                name="image"
                className="form-control mt-2"
                placeholder="Paste image URL"
                value={user.image}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  value={user.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Gender</label>
                <select
                  name="gender"
                  className="form-select"
                  value={user.gender}
                  onChange={handleChange}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  className="form-control"
                  value={user.dob}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12 mb-3">
                <label className="form-label">Address</label>
                <textarea
                  name="address"
                  className="form-control"
                  rows="2"
                  value={user.address}
                  onChange={handleChange}
                />
              </div>

            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-end gap-2 mt-3">
              <button
                type="button"
                className="btn btn-outline-secondary px-4"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>

              <button type="submit" className="btn btn-primary px-4">
                Save Changes
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default UserEdit;