import { NavLink } from "react-router-dom";
function Navbar() {
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
              <NavLink to="/" className="nav-link" style={({ isActive }) => ({ color: "#333",borderBottom: isActive ? "2px solid #2b7cff" : "none",})}>
              Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/doclist" className="nav-link" style={({ isActive }) => ({ color: "#333", borderBottom: isActive ? "2px solid #2b7cff" : "none", })}>
                Doctors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/appointments" className="nav-link" style={({ isActive }) => ({ color: "#333",borderBottom: isActive ? "2px solid #2b7cff" : "none",})}>
                My Appointments
              </NavLink>
            </li>

            <li className="nav-item">
              <button className="nav-link border-0 bg-transparent" data-bs-toggle="modal" data-bs-target="#passwordModal">
                <i className="fa-solid fa-user"></i>
              </button>
            </li>
          </ul>
        </div>

        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
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
        </div>
      </nav>

      {/* Modal */}
      <div className="modal fade" id="passwordModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Password</h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Current Password</label>
                <input type="password" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button className="btn btn-primary">Update Password</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;