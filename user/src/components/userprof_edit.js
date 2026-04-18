import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

function UserEdit() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const genderRef = useRef();
  const dobRef = useRef();
  const addressRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");

    fetch(`http://127.0.0.1:8000/${userId}/get_user`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("USER:", data);
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");

    const updatedUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone_num: phoneRef.current.value, 
      gender: genderRef.current.value,
      dob: dobRef.current.value,
      address: addressRef.current.value,
      image: imageRef.current.value,
    };

    fetch(`http://127.0.0.1:8000/${userId}/update_user`, {
      method: "PUT", // or PATCH if needed
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("UPDATED:", data);
        alert("Profile updated successfully");
        navigate("/userprofile");
      })
      .catch((err) => console.log(err));
  };

  if (!user) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <div>
      <Navbar />

      <div className="container mt-4" style={{ minHeight: "100vh" }}>
        <h3 className="text-center mb-4 fw-bold">Edit Profile</h3>

        <div
          className="card p-4 shadow-sm border-0"
          style={{ borderRadius: "15px" }}
        >
          {/* Profile Image */}
          <div className="text-center mb-4">
            <img
              src={
                user.image ||
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              alt="user"
              className="rounded-circle mb-2"
              style={{ width: "90px", height: "90px", objectFit: "cover" }}
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  ref={nameRef}
                  className="form-control"
                  defaultValue={user.name}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  ref={emailRef}
                  className="form-control"
                  defaultValue={user.email}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  ref={phoneRef}
                  className="form-control"
                  defaultValue={user.phone_num || ""}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Gender</label>
                <select
                  ref={genderRef}
                  className="form-select"
                  defaultValue={user.gender || ""}
                >
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  ref={dobRef}
                  className="form-control"
                  defaultValue={user.dob || ""}
                />
              </div>

              <div className="col-md-12 mb-3">
                <label className="form-label">Address</label>
                <textarea
                  ref={addressRef}
                  className="form-control"
                  rows="2"
                  defaultValue={user.address || ""}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-end gap-2 mt-3">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm px-4 rounded-pill"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary btn-sm px-4 rounded-pill"
              >
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