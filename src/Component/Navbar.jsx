import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav class="navbar bg  navbar-expand-lg bg-body-tertiary ">
                <div class="container-fluid ">
                    <a class="navbar-brand fs-2 fw-bold" href="#">MADCARE</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent ">
                        <ul class="navbar-nav me-auto mb-2 ms-auto gap-5  mb-lg-0">
                            <li class="nav-item  ">
                                <Link   to="">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="About">About</Link>

                            </li>
                          
                           
                            <li class="nav-item">
                                <Link to="Department">Department</Link>

                            </li>


                            <li class="nav-item">
                                <Link to="Contact">Contact</Link>

                            </li>



                           
                            


                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <ul>

            </ul>
        </>
    )
}
