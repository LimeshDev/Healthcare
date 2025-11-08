import React from 'react'
import './About.css'
export default function About() {
  return (
    <>

      <h1 className='About'>About us</h1>
      <div className="about-section container my-5 py-5">

        <div className="row align-items-center">
          <div className="col-md-6">

            <img
              src="https://aica.com/wp-content/uploads/2024/09/Is-There-A-Difference-Between-An-Orthopedic-Doctor-and-An-Orthopedic-Surgeon.jpg"
              alt="Doctor"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4 fw-bold">Drugs & Theraparies </h2>
            <p className="text-secondary mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ab dolor ex, hic laborum temporibus velit obcaecati explicabo voluptatum id veniam iusto debitis fuga natus sed expedita accusamus excepturi eum recusandae quae! Ducimus soluta aperiam, nesciunt error rerum iste hic est accusamus ab autem unde, quae in! Commodi labore asperiores deserunt error! Eum, provident officiis.
            </p>
            <button className="btn btn-primary mt-5">Make Appointment</button>
          </div>
        </div>
      </div>
    </>
  )
}
