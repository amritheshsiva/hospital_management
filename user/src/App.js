import React from 'react';
import Navbar from './components/navbar';
import image from './images/wallpaper.JPEG';
import img1 from './images/24x7.png';
import img2 from './images/exp_doc.png';
import img3 from './images/appointment.png';

function App() {
  return (
    <div>
      <Navbar />
      {/* HERO SECTION */}
      <div className="container py-4">
        <div className="row align-items-center">

          <div className="col-md-6 col-12 mt-3 p-3">
            <h1 className="fw-bold display-5 mb-3">We Care About Your Health</h1>
            <p className="text-muted">
              Delivering personalized healthcare with expert doctors, advanced
              facilities, and round-the-clock support to ensure you and your
              family stay healthy and safe.
            </p>
            <p className="text-muted">
              Our mission is to provide compassionate, reliable, and
              patient-centered care with a focus on comfort, trust, and faster
              recovery.
            </p>
            <button className="btn btn-primary px-4 py-2 mt-2 shadow-sm">Book Appointment</button>
          </div>

          <div className="col-md-6 col-12 mt-3">
            <img src={image} alt="hospital" className="img-fluid rounded shadow-sm"/>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
        <div className="container py-3">
          <div className="row text-center mb-4">
            <h2 className="fw-bold">Why Choose Us</h2>
          </div>

          <div className="row">
            {/* 24/7 Service */}
            <div className="col-md-4 mb-3">
              <div className="d-flex align-items-center p-3 shadow-sm rounded bg-white">
                <img
                  src={img1}
                  alt="24/7 service"
                  className="img-fluid rounded me-3 mr-2"
                  style={{ maxWidth: "57px" }}
                />
                <div>
                  <h5 className="mb-1">24/7 Service</h5>
                  <p className="mb-0 text-muted">
                    Healthcare Services Available Anytime
                  </p>
                </div>
              </div>
            </div>

            {/* Expert Doctors */}
            <div className="col-md-4 mb-3">
              <div className="d-flex align-items-center p-3 shadow-sm rounded bg-white">
                <img
                  src={img2}
                  alt="expert doctors"
                  className="img-fluid rounded me-3 mr-2"
                  style={{ maxWidth: "57px" }}
                />
                <div>
                  <h5 className="mb-1">Expert Doctors</h5>
                  <p className="mb-0 text-muted">
                    Professional and experienced doctors
                  </p>
                </div>
              </div>
            </div>

            {/* Easy Appointments */}
            <div className="col-md-4 mb-3">
              <div className="d-flex align-items-center p-3 shadow-sm rounded bg-white">
                <img
                  src={img3}
                  alt="appointment"
                  className="img-fluid rounded me-3 mr-2"
                  style={{ maxWidth: "68px" }}
                />
                <div>
                  <h5 className="mb-1">Easy Appointments</h5>
                  <p className="mb-0 text-muted">
                    Fast and convenient booking process
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;