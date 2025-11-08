import React from 'react'
import './Home.css'
export default function Home() {
    return (



        <div className="hospital-container">
            <div className="text-section">
                <h1>Making Health Care Better Together</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique nobis optio totam!
                    Quisquam veniam cupiditate repellat fuga recusandae nostrum qui tempora itaque earum
                    officiis perspiciatis architecto tenetur et nihil sunt necessitatibus, aperiam vitae
                    delectus doloremque reprehenderit consequatur. Sint, at porro!
                </p>
                <div className="button-group">
                    <button className="btn-primary">Make Appointment</button>
                    <button className="btn-secondary">View Department</button>
                </div>
            </div>
            <div className="image-section">
                <img
                    src="https://img.freepik.com/free-photo/happy-doctor-wearing-glasses-presenting-something_329181-616.jpg?semt=ais_hybrid&w=740"
                    alt="Doctor"
                />
            </div>
        </div>
    );
};


