import React from 'react';
import Navbar from '../components/navbar'
function DocList() {
    return (
    <div>
        <Navbar/>
        <div className='container-fluid'>
            <div className="mt-3 d-flex justify-content-center">
                <div className="d-flex rounded shadow-sm overflow-hidden w-100"style={{ background:"#eaf1f9", maxWidth: "900px" }}>
                    {/* Searching tab */}
                    <div className="d-flex align-items-center px-3 flex-grow-1 border-end">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="25" height='25' fill='grey'>
                        <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9
                        480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/>
                        </svg>
                        <input type="text" className="form-control border-0 bg-transparent" placeholder="Search doctor..."/>
                    </div>
                    {/* Speciality search */}
                    <div className="d-flex align-items-center px-3 border-end">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width='25' height='25' fill='grey'><path d="M64 112C64 85.5 85.5 64 112 64L160 64C177.7 64 192 78.3 192 96C192 113.7 177.7 128 160 128L128 128L128 256C128 309 171 352 224 352C277 352 320 309 320 256L320 128L288 128C270.3 128 256 113.7 256 96C256 78.3 270.3 64 288 64L336 64C362.5 64 384 85.5 384 112L384 256C384 333.4 329 398 256 412.8L256 432C256 493.9 306.1 544 368 544C429.9 544 480 493.9 480 432L480 346.5C442.7 333.3 416 297.8 416 256C416 203 459 160 512 160C565 160 608 203 608 256C608 297.8 581.3 333.4 544 346.5L544 432C544 529.2 465.2 608 368 608C270.8 608 192 529.2 192 432L192 412.8C119 398 64 333.4 64 256L64 112zM512 288C529.7 288 544 273.7 544 256C544 238.3 529.7 224 512 224C494.3 224 480 238.3 480 256C480 273.7 494.3 288 512 288z"/></svg>
                    <select className="form-select border-0 bg-transparent">
                        <option>Select Speciality</option>
                        <option>Cardiology</option>
                        <option>Dermatology</option>
                        <option>General Medicine</option>
                        <option>Neurology</option>
                        </select>
                    </div>
                    {/* Timing */}
                    <div className="d-flex align-items-center px-3 border-end">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width='25' height='25' fill='grey'><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>
                        <select className="form-select border-0 bg-transparent">
                            <option>Any Time</option>
                            <option>Morning</option>
                            <option>Afternoon</option>
                            <option>Evening</option>
                        </select>
                    </div>
                    <button className="btn btn-primary px-4 rounded-0">Search</button>
                </div>
            </div>

            {/* Doctor 1 */}
            <div className='row px-3'>
                <div className='col-md-12 mt-4'>
                    <div className='card shadow-sm border-0 p-3' style={{borderRadius:'12px'}}>
                        <div className='d-flex align-items-center justify-content-between'>
                       
                            <div className='d-flex align-items-center'>
                                <img src="https://imgs.search.brave.com/HL1iM8eX1ZJ0a7abH7FCDElbCbpXmY3-2mQbxAwzYMY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mYWNl/bGVzcy1tYWxlLWRv/Y3Rvci1hdmF0YXIt/c3RldGhvc2NvcGUt/ZmxhdC1kZXNpZ24t/aWRlYWwtaGVhbHRo/Y2FyZS1tZWRpY2Fs/LWFwcHMtYW5vbnlt/b3VzLXByb2Zlc3Np/b25hbC1wcm9maWxl/cy0zODgzMzMyODIu/anBn" alt="doc"className='rounded-circle me-3 mr-2' style={{width:'70px', height:'70px', objectFit:'cover'}}/>
                                <div>
                                    <h5 className='mb-1 fw-semibold'>Dr. Arjun</h5>
                                    <p className='mb-1 text-muted small'>MBBS, MD (Cardiology)</p>
                                    <div className='d-flex flex-wrap gap-2'>
                                        <span className='badge bg-light text-danger'>Cardiology</span>
                                        <span className='badge bg-light text-success'>8+ years experience</span>
                                    </div>
                                    <span className='text-muted small'>🕒 10:00 AM - 1.00 PM | 🕒 4:00 PM - 7:00 PM</span>      
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-primary px-4 rounded-pill'>View Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Docotr 2 */}
                <div className='col-md-12 mt-4'>
                    <div className='card shadow-sm border-0 p-3' style={{borderRadius:'12px'}}>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <img src="https://imgs.search.brave.com/pOoQb3Sl5EUnpCXmiEILVzrtcsUq0_dUEZIo-VnVy2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mZW1h/bGUtZG9jdG9yLWZh/Y2VsZXNzLWF2YXRh/ci1yb3VuZC1pY29u/LWZhY2VsZXNzLWZl/bWFsZS1kb2N0b3It/YXZhdGFyLXN0ZXRo/b3Njb3BlLWZsYXQt/ZGVzaWduLWNpcmN1/bGFyLWZyYW1lLWlk/ZWFsLTM4ODM5MTQ2/Ni5qcGc" alt="doc"className='rounded-circle me-3 mr-2' style={{width:'70px', height:'70px', objectFit:'cover'}}/>
                                <div>
                                    <h5 className='mb-1 fw-semibold'>Dr. Ansila</h5>
                                    <p className='mb-1 text-muted small'>MBBS, MD (General Medicine)</p>
                                    <div className='d-flex flex-wrap gap-2'>
                                        <span className='badge bg-light text-danger'>General Medicine</span>
                                        <span className='badge bg-light text-success'>6 years experience</span>
                                    </div>
                                    <span className='text-muted small'>🕘 11:00 AM - 2:00 PM | 🕓 5:00 PM - 8:00 PM</span>      
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-primary px-4 rounded-pill'>View Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Doctor 3 */}
                <div className='col-md-12 mt-4 '>
                    <div className='card shadow-sm border-0 p-3' style={{borderRadius:'12px'}}>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <img src="https://imgs.search.brave.com/HL1iM8eX1ZJ0a7abH7FCDElbCbpXmY3-2mQbxAwzYMY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mYWNl/bGVzcy1tYWxlLWRv/Y3Rvci1hdmF0YXIt/c3RldGhvc2NvcGUt/ZmxhdC1kZXNpZ24t/aWRlYWwtaGVhbHRo/Y2FyZS1tZWRpY2Fs/LWFwcHMtYW5vbnlt/b3VzLXByb2Zlc3Np/b25hbC1wcm9maWxl/cy0zODgzMzMyODIu/anBn" alt="doc"className='rounded-circle me-3 mr-2' style={{width:'70px', height:'70px', objectFit:'cover'}}/>
                                <div>
                                    <h5 className='mb-1 fw-semibold'>Dr. Rahul</h5>
                                    <p className='mb-1 text-muted small'>MBBS, MD (Pediatrics)</p>
                                    <div className='d-flex flex-wrap gap-2'>
                                        <span className='badge bg-light text-danger'>Pediatrics</span>
                                        <span className='badge bg-light text-success'>10 years experience</span>
                                    </div>
                                    <span className='text-muted small'>🕘 9:00 AM - 12:00 PM | 🕓 4:00 PM - 7:00 PM</span>      
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-primary px-4 rounded-pill'>View Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Doctor 4 */}
                <div className='col-md-12 mt-4'>
                    <div className='card shadow-sm border-0 p-3' style={{borderRadius:'12px'}}>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <img src="https://imgs.search.brave.com/pOoQb3Sl5EUnpCXmiEILVzrtcsUq0_dUEZIo-VnVy2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mZW1h/bGUtZG9jdG9yLWZh/Y2VsZXNzLWF2YXRh/ci1yb3VuZC1pY29u/LWZhY2VsZXNzLWZl/bWFsZS1kb2N0b3It/YXZhdGFyLXN0ZXRo/b3Njb3BlLWZsYXQt/ZGVzaWduLWNpcmN1/bGFyLWZyYW1lLWlk/ZWFsLTM4ODM5MTQ2/Ni5qcGc" alt="doc"className='rounded-circle me-3 mr-2' style={{width:'70px', height:'70px', objectFit:'cover'}}/>
                                <div>
                                    <h5 className='mb-1 fw-semibold'>Dr. Riya</h5>
                                    <p className='mb-1 text-muted small'>MBBS, DM (Neurology)</p>
                                    <div className='d-flex flex-wrap gap-2'>
                                        <span className='badge bg-light text-danger'>Neurology</span>
                                        <span className='badge bg-light text-success'>12 years experience</span>
                                    </div>
                                    <span className='text-muted small'>🕘 10:30 AM - 1:30 PM | 🕓 6:00 PM - 9:00 PM</span>      
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-primary px-4 rounded-pill'>View Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        );
    }        
export default DocList;
