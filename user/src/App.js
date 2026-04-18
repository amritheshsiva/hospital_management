import React from 'react';
import Navbar from './components/navbar';
import image from './images/wallpaper.JPEG';
import img1 from './images/24x7.png';
import img2 from './images/exp_doc.png';
import img3 from './images/appointment.png';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <h1 className="hero-title">
                We Care About<br />
                Your <span>Health</span> & Wellbeing
              </h1>
              <p className="hero-body">
                Delivering healthcare with expert doctors and good facilities to keep you safe and healthy.
                </p>
                <p className="hero-body">
                  We focus on simple, reliable, and patient-friendly care.
                </p>
                <button
                onClick={() => navigate('/doclist')}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#4284e7",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}>Book Appointment</button>
                </div>
                <div className="col-lg-6 col-12">
                  <img src={image} alt="hospital" className="hero-img" />
                </div>
              </div>
            </div>
          </section>
          
          <hr className="divider-line" />
          
          <section className="features-section">
            <div className="container">
              <div className="text-center mb-5 fade-up">
                <h2 className="section-title">Why Choose Us</h2>
                <p className="section-sub mt-2">
                  Experience healthcare built around you — fast, expert, and always available.
                  </p>
              </div>
              <div className="row g-4 text-center">
      {/* 24/7 Service */}
      <div className="col-md-4 col-12 fade-up delay-1">
        <div className="feature-card d-flex flex-column align-items-center">
          <div style={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={img1} alt="24/7 service"
              style={{ width: "80px", height: "80px", objectFit: "contain" }} />
          </div>
          <div className="feature-content">
            <h5 className="mt-3">24/7 Service</h5>
            <p>Healthcare services available anytime, day or night — because health never waits.</p>
          </div>
        </div>
      </div>

      {/* Expert Doctors */}
      <div className="col-md-4 col-12 fade-up delay-2">
        <div className="feature-card d-flex flex-column align-items-center">
          <div style={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={img2} alt="expert doctors"
              style={{ width: "80px", height: "80px", objectFit: "contain" }} />
          </div>
          <div className="feature-content">
            <h5 className="mt-3">Expert Doctors</h5>
            <p>Board-certified professionals with decades of experience across every specialty.</p>
          </div>
        </div>
      </div>

      {/* Easy Appointments */}
      <div className="col-md-4 col-12 fade-up delay-3">
        <div className="feature-card d-flex flex-column align-items-center">
          <div style={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={img3} alt="appointment"
              style={{ width: "80px", height: "80px", objectFit: "contain" }} />
          </div>
          <div className="feature-content">
            <h5 className="mt-3">Easy Appointments</h5>
            <p>Book in seconds with our fast, convenient scheduling — no long waits, no hassle.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default App;