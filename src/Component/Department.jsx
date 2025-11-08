import React from 'react'
import './Department.css'
export default function Department() {
  return (
    <>
 
      <div className="department-section py-5">
        <div className="container">
          <h2 className="text-center text-white mb-2 fw-bold">Our Services</h2>
          <p className="text-center text-white mb-5">
            Our Medical Services & Specialties
          </p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="service-card text-center p-3">
                <img
                  src="https://img.theweek.in/content/dam/week/news/sci-tech/2018/february/modern-ooperation-theatre-surgery-medical-health-doctors-shut.jpg"
                  alt="Emergency Room"
                  className="img-fluid rounded mb-3"
                />
                <h5>EMERGENCY ROOM</h5>
                <p>
                  Our Emergency Department is an American College of Surgeons certified trauma center.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="service-card text-center p-3">
                <img
                  src="https://www.drsakshamjointspecialist.com/wp-content/uploads/2024/11/Orthopedic-Doctor-in-Delhi.jpg"
                  alt="Obstetrics"
                  className="img-fluid rounded mb-3"
                />
                <h5>OBSTETRICS</h5>
                <p>
                  For Your Pregnancy. Every birth is unique, every mother is unique, every baby is a special new gift.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="service-card text-center p-3">
                <img
                  src="https://static.wixstatic.com/media/14dc3a_99c18babd7184caa8ed25cbd2169616c~mv2.png/v1/crop/x_415,y_197,w_1037,h_963/fill/w_612,h_684,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Doctor.png" style={{width:"50%"}}
                  alt="Orthopedics"
                  className="img-fluid rounded mb-3"
                />
                <h5>ORTHOPEDICS</h5>
                <p>
                  Bone and joint problems don’t discriminate – they can happen to anyone, at any age.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="service-card text-center p-3">
                <img
                  src="https://resizer.nationalworld.com/a29536d5-3879-4cbd-9edc-5f5030422127.jpg?tr=w-1200"
                  alt="More Services"
                  className="img-fluid rounded mb-3"
                />
                <h5>MORE SERVICES</h5>
                <p>
                  We offer a wide range of other medical services for every need you might have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
