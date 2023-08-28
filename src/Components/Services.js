import React from 'react';
import '../main.css';

function Services() {
    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-heading">
                    <h1>Services</h1>
                    <h6>What I can do for you</h6>
                </div>
                <div className="my-skills">
                    <div className="skill" data-aos="fade-in" data-aos-delay="300">
                    <div className="icon-container">
                        <i className="fas fa-layer-group"></i>
                    </div>
                    <h1>Web Design</h1>
                    <p>I am interested in technical work, I have creative mind with this combination I can design and bring to life website's.
                    </p>
                </div>
                <div className="skill" data-aos="fade-in" data-aos-delay="600">
                <div className="icon-container">
                    <i className="fas fa-code"></i>
                </div>
                <h1>Web Development</h1>
                <p>I am competent in designing, building, creating and maintaining websites, servers and databases. I can contribute anywhere I am needed on a development team, as well as working alone.
                </p>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Services;