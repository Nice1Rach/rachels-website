import React from 'react';
import '../main.css'; // Import your main CSS file
import profileImage from '../images/profile.jpeg'; // Import your images

function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="profile-img" data-aos="fade-right" data-aos-delay="300">
                   <img src="images/profile.jpeg"alt=""></img>
                </div>
                <div className="about-details" data-aos="fade-left" data-aos-delay="600">
                 <div className="about-heading">
                     <h1>About</h1>
                     <h6>Myself</h6>
                     <p> Hello I'm Rachel.
                    </p>
                </div>   
                <div className="social-media">
                <ul className="nav-list">
                <li>
                    <a href="https://www.facebook.com/rachel.sheets.376/" className="icon-link">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/rachel-heke-7ba0b01b6/" className="icon-link">
                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Nice1Rach" className="icon-link">
                        <i className="fa fa-github" aria-hidden="true"></i>"
                    </a>
                </li>
                </ul>
            </div>
        </div>
    </div>
</section>
    );
}

export default About;