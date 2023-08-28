import React from 'react';
import '../main.css';

function Header() {
    return (
        <header>
            <div className="menu-toggler">
                <div className="bar half start"></div>
                <div className="bar"></div>
                <div className="bar half end"></div>
            </div>
            <nav className="top-nav">
                <ul className="nav-list">
                <li>
                <a href="index.html" className="nav-link">Home</a>
                </li>
                <li>
                    <a href="#about" className="nav-link">About</a>
                </li>
                <li>
                    <a href="#services" className="nav-link">Services</a>
                </li>
                <li>
                    <a href="#portfolio" className="nav-link">Portfolio</a>
                </li>
                <li>
                    <a href="#experience" className="nav-link">Experience</a>
                </li>
                <li>
                    <a href="#contact" className="nav-link">Contact</a>
                </li>
                </ul>
            </nav>
            <div className="landing-text">
                <h1>Rachel Heke</h1>
                <h6>Full Stack Web Developer</h6>
            </div>
        </header>
    );
}

export default Header;