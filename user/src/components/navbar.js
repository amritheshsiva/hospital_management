import { NavLink } from "react-router-dom";

function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg mt-3 mx-3 rounded shadow-sm "
  style={{
        backgroundColor: "#f8fbff",
        // padding: "12px 40px",
        padding: '0px 40px',
        borderBottom: "1px solid #e0e0e0",
        height: "50px"
      }}>

      {/* Logo */}
      <div className="navbar-brand" style={{ fontWeight: "700", color: "#2b7cff" }}>
        MediCare<span style={{ color: "#ff7a00" }}>+</span>
      </div>

      {/* Toggle */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Links */}
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav" style={{ gap: "25px" }}>

          <li className="nav-item">
            <NavLink to="/" className="nav-link"style={({ isActive }) => ({color: "#333",borderBottom: isActive ? "2px solid #2b7cff" : "none"})}>
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/doclist" className="nav-link"style={({ isActive }) => ({ color: "#333", borderBottom: isActive ? "2px solid #2b7cff" : "none" })}>
              Doctors
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/appointments" className="nav-link"style={({ isActive }) => ({ color: "#333", borderBottom: isActive ? "2px solid #2b7cff" : "none" })}>
              My Appointments
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/profile" className="nav-link"style={({ isActive }) => ({ color: "#333", borderBottom: isActive ? "2px solid #2b7cff" : "none" })}>
            <i class="fa-solid fa-user"></i>
            </NavLink>
          </li>


        </ul>
      </div>

      {/* Right side (added, but still inside same flow) */}
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <NavLink to="/login" style={{ textDecoration: "none", color: "#333" }}>
          Log In
        </NavLink>

        <NavLink
          to="/register"
          style={{
            backgroundColor: "#2b7cff",
            color: "#fff",
            padding: "6px 14px",
            borderRadius: "6px",
            textDecoration: "none"
          }}
        >
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;