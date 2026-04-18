import { useState } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  const token = localStorage.getItem("token"); 
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    window.location.href = "/login";
  };
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const handleChangePassword = () => {
    const token = localStorage.getItem("token");
    if (newPass !== confirmPass) {
      alert("Passwords do not match");      
      return;
    }
    fetch("http://127.0.0.1:8000/updatepass", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      },
      body: JSON.stringify({
        old_password: oldPass,
        new_password: newPass
      })
      })
    .then(res => res.json())
    .then(data => {
  console.log(data);

  alert("Password updated successfully. Please login again.");

  // clear fields
  setOldPass("");
  setNewPass("");
  setConfirmPass("");

  // close modal
  document.getElementById("passwordModalClose").click();

  // 🔥 LOGOUT USER
  localStorage.removeItem("token");
  localStorage.removeItem("user_id");

  // redirect to login
  window.location.href = "/login";
})
    .catch(err => console.log(err));
};

  return (
    <>
      <nav className="navbar navbar-expand-lg mt-3 mx-3 rounded shadow-sm"
        style={{
          backgroundColor: "#f8fbff",
          padding: "0px 40px",
          borderBottom: "1px solid #e0e0e0",
          height: "50px",
        }}>

        {/* Logo */}
        <div className="navbar-brand" style={{ fontWeight: "700", color: "#2b7cff" }}>
          MediCare<span style={{ color: "#ff7a00" }}>+</span>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav" style={{ gap: "25px" }}>

            <li className="nav-item">
              <NavLink to="/" className="nav-link"
                style={({ isActive }) => ({
                  color: "#333",
                  borderBottom: isActive ? "2px solid #2b7cff" : "none",
                })}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/doclist" className="nav-link"
                style={({ isActive }) => ({
                  color: "#333",
                  borderBottom: isActive ? "2px solid #2b7cff" : "none",
                })}>
                Doctors
              </NavLink>
            </li>

            {/* 🔒 Show only if logged in */}
            {token && (
              <li className="nav-item">
                <NavLink to="/appointments" className="nav-link"
                  style={({ isActive }) => ({
                    color: "#333",
                    borderBottom: isActive ? "2px solid #2b7cff" : "none",
                  })}>
                  My Appointments
                </NavLink>
              </li>
            )}

            {/* 🔒 Profile dropdown only if logged in */}
            {token && (
              <li className="nav-item dropdown">
                <button className="nav-link border-0 bg-transparent" data-bs-toggle="dropdown">
                  <i className="fa-solid fa-user"></i>
                </button>

                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <NavLink to="/userprofile" className="dropdown-item">Profile</NavLink>
                  </li>
                  <li>
                    <button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#passwordModal">
                      Change Password
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            )}

          </ul>
        </div>

        {/* 🔥 RIGHT SIDE BUTTONS */}
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>

          {!token ? (
            <>
              <NavLink to="/login" style={{ textDecoration: "none", color: "#333" }}>
                Log In
              </NavLink>

              <NavLink to="/register"
                style={{
                  backgroundColor: "#2b7cff",
                  color: "#fff",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}>
                Sign Up
              </NavLink>
            </>
          ) : (
            <button className="btn btn-danger btn-sm" onClick={handleLogout}>
              Logout
            </button>
          )}

        </div>
      </nav>

      {/* Modal stays same */}
      <div className="modal fade" id="passwordModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Password</h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Current Password</label>
                <input type="password" className="form-control" value={oldPass} onChange={(e) => setOldPass(e.target.value)}/>
              </div>
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <input type="password" className="form-control" value={newPass} onChange={(e) => setNewPass(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control"value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
              </div>
            </div>
            <div className="modal-footer">
              <button id="passwordModalClose" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button className="btn btn-primary" onClick={handleChangePassword} >Update Password</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;