import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <>

      <div className="contact-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src="https://www.future-doctor.de/wp-content/uploads/2024/08/shutterstock_2480850611.jpg"
                alt="Dentist Patient"
                className="rounded-circle contact-img"
              />
            </div>

            {/* Right Form */}
            <div className="col-md-6">
              <h3 className="mb-4 fw-bold">Contact Us</h3>
              <form>
                <input type="text" placeholder="Enter your Name" className="form-control mb-3" />
                <input type="email" placeholder="Enter a valid email address" className="form-control mb-3" />
                <textarea placeholder="Message" rows="4" className="form-control mb-3" />
                <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" id="terms" />
                  <label className="form-check-label" htmlFor="terms">
                    I accept the <a href="#">Terms of Service</a>
                  </label>
                </div>
                <button type="submit" className="btn btn-orange w-100">SUBMIT</button>
              </form>
            </div>
          </div>

          {/* Bottom Info Boxes */}
          <div className="row text-white text-center mt-5 g-4">
            <div className="col-md-4">
              <div className="info-box">
                <h5>📞 CALL US</h5>
                <p>+1 (234) 567-891,<br />+1 (234) 567-654</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-box">
                <h5>📍 LOCATION</h5>
                <p>12 Agrasen Chouk, 21 Avenue,<br />Bhilai, NY 92103-9000</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-box">
                <h5>⏰ HOURS</h5>
                <p>Mon–Fri: 11am–8pm<br />Sat–Sun: 6am–8pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
