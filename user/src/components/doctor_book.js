import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useNavigate, useParams } from "react-router-dom";

function Appointment() {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [doctor, setDoctor] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

useEffect(() => {
  const token = localStorage.getItem("token");

  fetch(`http://127.0.0.1:8000/${id}/get_doctor`, {
    headers: {
      "Authorization": `Token ${token}`
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log("Doctor:", data);
      setDoctor(data);
    })
    .catch(err => console.log(err));
}, [id]);

  const handleBooking = () => {
    const token = localStorage.getItem("token");
    // const user_id = localStorage.getItem("user_id");

    if (!date || !time) {
      alert("Please select date and time");
      return;
    }

    fetch("http://127.0.0.1:8000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      },
      body: JSON.stringify({
        doctor_id: id,
        Date: date,
        Time_slot: time
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert("Appointment booked successfully");
        navigate("/appointments"); // redirect
      })
      .catch(err => console.log(err));
  };

  if (!doctor) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-4" style={{ minHeight: "100vh" }}>
        <h3 className="text-center mb-4 fw-bold">Book Appointment</h3>

        {/* Doctor Info */}
        <div className="card p-3 mb-4 shadow-sm border-0">
          <div className="d-flex align-items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="doc"
              className="rounded-circle me-3"
              style={{ width: "80px", height: "80px" }}
            />
            <div>
              <h5 className="mb-1">{doctor.name}</h5>
              <p className="text-muted mb-1">{doctor.Qualification}</p>
              <span className="badge bg-light text-danger">{doctor.Specialization}</span>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="card p-4 shadow-sm border-0">
          <h6>Select Appointment Date</h6>
          <input
            type="date"
            className="form-control mb-4"
            onChange={(e) => setDate(e.target.value)}
          />

          <h6>Select Time Slot</h6>
          <div className="d-flex flex-wrap gap-2 mb-4">
            {["9:00 AM","10:00 AM","11:00 AM","4:00 PM","5:00 PM","6:00 PM"]
              .map((t) => (
                <button
                  key={t}
                  className={`btn ${time === t ? "btn-primary" : "btn-outline-primary"} mr-2`}
                  onClick={() => setTime(t)}>
                    {t}
                </button>
            ))}
          </div>

          <div className="d-flex gap-3">
            <button
              className="btn btn-secondary w-50 mr-2"
              onClick={() => navigate(-1)}
              >Cancel
            </button>
            <button
              className="btn btn-primary w-50 ml-2"
              onClick={handleBooking}
            >Confirm Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;