import React from 'react';
import Navbar from '../components/navbar'
function Appointment() {
    return (
    <div>
        <Navbar/>
        {/* <div className='container-fluid'> */}
        <div className='container-fluid' style={{ minHeight: "100vh" }}>
            <h2 className='text-center mt-4'>My Appointments</h2>
            <div className="mt-3 d-flex justify-content-center">
                <div className="d-flex rounded shadow-sm overflow-hidden w-100 mt-3"style={{ background:"#ffffff", maxWidth: "900px" }}>
                    {/* Searching tab */}
                    <div className="d-flex align-items-center px-3 flex-grow-1 border-end">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="25" height='25' fill='grey'>
                        <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9
                        480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/>
                        </svg>
                        <input type="text" className="form-control border-0 bg-transparent" placeholder="Search appointments..."/>
                    </div>
                    <button className="btn btn-primary px-4 rounded-0">Search</button>
                </div>
            </div>

            {/* Appointment 1 */}
            <div className='row px-3'>
                <div className='col-md-12 mt-4'>
                    <div className='card shadow-sm border-0 p-3' style={{borderRadius:'12px'}}>
                        <div className='d-flex align-items-center justify-content-between'>
                       
                            <div className='d-flex align-items-center'>
                                <img src="https://imgs.search.brave.com/HL1iM8eX1ZJ0a7abH7FCDElbCbpXmY3-2mQbxAwzYMY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mYWNl/bGVzcy1tYWxlLWRv/Y3Rvci1hdmF0YXIt/c3RldGhvc2NvcGUt/ZmxhdC1kZXNpZ24t/aWRlYWwtaGVhbHRo/Y2FyZS1tZWRpY2Fs/LWFwcHMtYW5vbnlt/b3VzLXByb2Zlc3Np/b25hbC1wcm9maWxl/cy0zODgzMzMyODIu/anBn" alt="doc"className='rounded-circle me-3 mr-2' style={{width:'70px', height:'70px', objectFit:'cover'}}/>
                                <div>
                                    <p className='mb-1 text-muted small'>25 Apr 2026 . 11.00 AM</p>
                                    <h5 className='mb-1 fw-semibold'>Dr. Arjun</h5>
                                    <div className='d-flex flex-wrap gap-2'>
                                        <span className='badge bg-light text-secondary'>Cardiology</span>
                                    </div>
                                </div>
                            </div>
                            <div>                             
                                <button className='btn btn-info btn-sm px-4 rounded mt-2 mr-2'>View Details</button>
                                <button className='btn btn-primary btn-sm px-4 rounded mt-2 mr-2'>Upcoming</button>
                                <button className='btn btn-danger btn-sm px-4 rounded mt-2'>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Appointment 2 */}
                <div className='col-md-12 mt-4'>
                    <div className='card shadow-sm border-0 p-3' style={{borderRadius:'12px'}}>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <img src="https://imgs.search.brave.com/pOoQb3Sl5EUnpCXmiEILVzrtcsUq0_dUEZIo-VnVy2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mZW1h/bGUtZG9jdG9yLWZh/Y2VsZXNzLWF2YXRh/ci1yb3VuZC1pY29u/LWZhY2VsZXNzLWZl/bWFsZS1kb2N0b3It/YXZhdGFyLXN0ZXRo/b3Njb3BlLWZsYXQt/ZGVzaWduLWNpcmN1/bGFyLWZyYW1lLWlk/ZWFsLTM4ODM5MTQ2/Ni5qcGc" alt="doc"className='rounded-circle me-3 mr-2' style={{width:'70px', height:'70px', objectFit:'cover'}}/>
                                <div>
                                    <p className='mb-1 text-muted small'>22 Apr 2026 . 5:30 PM</p>
                                    <h5 className='mb-1 fw-semibold'>Dr. Rahul</h5>
                                    <div className='d-flex flex-wrap gap-2'>
                                        <span className='badge bg-light text-secondary'>Pediatrics</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-info btn-sm px-4 rounded mt-2 mr-2'>View Details</button>
                                <button className='btn btn-primary btn-sm px-4 rounded mt-2 mr-2'>Completed</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
        );
    }        
export default Appointment;
