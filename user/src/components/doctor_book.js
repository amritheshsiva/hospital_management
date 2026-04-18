// import React from "react";
// import Navbar from "../components/navbar";
// import { useNavigate } from "react-router-dom";


// function Appointment() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <Navbar />

//       <div className="container mt-4" style={{ minHeight: "100vh" }}>
//         <h3 className="text-center mb-4 fw-bold">
//           Book Appointment
//         </h3>
//         <div className="card p-3 mb-4 shadow-sm border-0">
//           <div className="d-flex align-items-center">
//             <img src="https://imgs.search.brave.com/HL1iM8eX1ZJ0a7abH7FCDElbCbpXmY3-2mQbxAwzYMY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mYWNl/bGVzcy1tYWxlLWRv/Y3Rvci1hdmF0YXIt/c3RldGhvc2NvcGUt/ZmxhdC1kZXNpZ24t/aWRlYWwtaGVhbHRo/Y2FyZS1tZWRpY2Fs/LWFwcHMtYW5vbnlt/b3VzLXByb2Zlc3Np/b25hbC1wcm9maWxl/cy0zODgzMzMyODIu/anBn" alt="doc"className='rounded-circle me-3 mr-2' style={{width:'80px', height:'80px', objectFit:'cover'}}/>
//             <div>
//               <h5 className="mb-1">Dr. Arjun</h5>
//               <p className="text-muted mb-1">MBBS, MD (Cardiology)</p>
//               <span className="badge bg-light text-danger">Cardiology</span>
//             </div>
//            </div>
//         </div>


//         <div className="card p-4 shadow-sm border-0">
//           <h6>Select Appointment Date</h6>
//           <input type="date" className="form-control mb-4" />
//           <h6>Select Time Slot</h6>
//           <div className="d-flex flex-wrap gap-3 mb-4">
//             <button className="btn btn-outline-primary mr-2">9:00 AM</button>
//             <button className="btn btn-outline-primary mr-2">10:00 AM</button>
//             <button className="btn btn-outline-primary mr-2">11:00 AM</button>
//             <button className="btn btn-outline-primary mr-2">4:00 PM</button>
//             <button className="btn btn-outline-primary mr-2">5:00 PM</button>
//             <button className="btn btn-outline-primary mr-2">6:00 PM</button>
//           </div>
//           <div className="d-flex gap-3">
//             <button className="btn btn-secondary w-50 mr-2" onClick={() => navigate(-1)}>Cancel</button>
//             <button className="btn btn-primary w-50" ml-2>Confirm Appointment</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Appointment;
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useNavigate, useParams } from "react-router-dom";

function Appointment() {
  const navigate = useNavigate();
  const { id } = useParams(); // ✅ doctor id

  const [doctor, setDoctor] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // 🔹 Fetch doctor details
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

  // 🔹 Booking function
  const handleBooking = () => {
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id");

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
        alert("Appointment booked successfully ✅");
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
              <span className="badge bg-light text-danger">
                {doctor.Specialization}
              </span>
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
                  className={`btn ${time === t ? "btn-primary" : "btn-outline-primary"}`}
                  onClick={() => setTime(t)}
                >
                  {t}
                </button>
            ))}

          </div>

          <div className="d-flex gap-3">
            <button
              className="btn btn-secondary w-50"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>

            <button
              className="btn btn-primary w-50"
              onClick={handleBooking}
            >
              Confirm Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;