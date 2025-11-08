import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); // close menu on mobile
    }

    // Search button triggers all nav items
    const handleSearchClick = (e) => {
        e.preventDefault();
        const ids = ['home', 'about', 'department', 'contact'];
        ids.forEach(id => {
            const section = document.getElementById(id);
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        });
    }

    return (
        <>
            <nav className="navbar bg navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand fs-2 fw-bold" href="#">MADCARE</a>

                    {/* Hamburger / X toggler */}
                    <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                        {isOpen ? '✕' : <span className="navbar-toggler-icon"></span>}
                    </button>

                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 ms-auto gap-5 mb-lg-0">
                            <li className="nav-item">
                                <Link to="" onClick={() => handleNavClick('home')}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="About" onClick={() => handleNavClick('about')}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="Department" onClick={() => handleNavClick('department')}>Department</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="Contact" onClick={() => handleNavClick('contact')}>Contact</Link>
                            </li>
                        </ul>

                        {/* Search button */}
                        <form className="d-flex" role="search" onSubmit={handleSearchClick}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
