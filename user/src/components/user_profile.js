// import React from "react";
// import Navbar from "../components/navbar";
// import { useNavigate } from "react-router-dom";

// function UserProfile() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <Navbar />

//       <div className="container mt-4" style={{ minHeight: "100vh" }}>
//         <h3 className="text-center mb-4 fw-bold">User Profile</h3>

//         <div className="card p-4 shadow-sm border-0" style={{ borderRadius: "15px" }}>

//           {/* Top Section (Image + Name + Edit Button) */}
//           <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">

//             <div className="d-flex align-items-center">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//                 alt="user"
//                 className="rounded-circle me-3"
//                 style={{ width: "80px", height: "80px", objectFit: "cover" }}
//               />
//               <div>
//                 <h4 className="mb-1">Aditya Sharma</h4>
//                 <p className="text-muted mb-0">Patient</p>
//               </div>
//             </div>

//             {/* Edit Button */}
//             <button
//               className="btn btn-outline-primary btn-sm px-4 rounded-pill mt-2"
//               onClick={() => navigate("/userprofedit")}
//             >
//               ✏️ Edit Profile
//             </button>

//           </div>

//           {/* User Details */}
//           <div className="row">

//             <div className="col-md-6 mb-3">
//               <h6 className="text-muted">Email</h6>
//               <p className="fw-semibold">aditya.sharma@gmail.com</p>
//             </div>

//             <div className="col-md-6 mb-3">
//               <h6 className="text-muted">Phone</h6>
//               <p className="fw-semibold">0909090909</p>
//             </div>

//             <div className="col-md-6 mb-3">
//               <h6 className="text-muted">Gender</h6>
//               <p className="fw-semibold">Male</p>
//             </div>

//             <div className="col-md-6 mb-3">
//               <h6 className="text-muted">Date of Birth</h6>
//               <p className="fw-semibold">March 5, 2002</p>
//             </div>

//             <div className="col-md-12 mb-3">
//               <h6 className="text-muted">Address</h6>
//               <p className="fw-semibold">
//                 23/B MG Road, Trivandrum, Kerala
//               </p>
//             </div>

//           </div>

//           {/* Back Button */}
//           <div className="d-flex justify-content-end">
//             <button
//               className="btn btn-primary btn-sm px-4 rounded-pill"
//               onClick={() => navigate(-1)}
//             >
//               ← Back
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserProfile;
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:8000/2/get_user", {
      headers: {
        Authorization: `Token ${token}`, // 
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("USER:", data);
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!user) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <div>
      <Navbar />

      <div className="container mt-4" style={{ minHeight: "100vh" }}>
        <h3 className="text-center mb-4 fw-bold">User Profile</h3>

        <div className="card p-4 shadow-sm border-0" style={{ borderRadius: "15px" }}>

          {/* Top Section */}
          <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">

            <div className="d-flex align-items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="user"
                className="rounded-circle me-3"
                style={{ width: "80px", height: "80px" }}
              />
              <div>
                <h4 className="mb-1">{user.name}</h4>
                <p className="text-muted mb-0">Patient</p>
              </div>
            </div>

            <button
              className="btn btn-outline-primary btn-sm px-4 rounded-pill mt-2"
              onClick={() => navigate("/userprofedit")}
            >
              ✏️ Edit Profile
            </button>

          </div>

          {/* Details */}
          <div className="row">

            <div className="col-md-6 mb-3">
              <h6 className="text-muted">Email</h6>
              <p className="fw-semibold">{user.email}</p>
            </div>

            <div className="col-md-6 mb-3">
              <h6 className="text-muted">Phone</h6>
              <p className="fw-semibold">{user.phone_num || "Not provided"}</p>
            </div>

            <div className="col-md-6 mb-3">
              <h6 className="text-muted">Gender</h6>
              <p className="fw-semibold">{user.gender || "Not provided"}</p>
            </div>

            <div className="col-md-6 mb-3">
              <h6 className="text-muted">Date of Birth</h6>
              <p className="fw-semibold">{user.dob || "Not provided"}</p>
            </div>

            <div className="col-md-12 mb-3">
              <h6 className="text-muted">Address</h6>
              <p className="fw-semibold">{user.address || "Not provided"}</p>
            </div>

          </div>

          <div className="d-flex justify-content-end">
            <button
              className="btn btn-primary btn-sm px-4 rounded-pill"
              onClick={() => navigate(-1)}
            >
              ← Back
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default UserProfile;