import React from 'react';
import '../main.css';
import portfolioImage1 from '../images/portitem1.jpeg';
import portfolioImage2 from '../images/portitem2.jpeg';

function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-heading">
                    <h1>Portfolio</h1>
                    <h6>View some of my recent work</h6>
                </div>
                <div className="portfolio-item">
                <div className="portfolio-img" data-aos="fade-right" data-aos-delay="300">
                <img src="images/portitem2.jpeg" alt=""></img>
                </div>
                <br></br>
                <div className="portfolio-item">
                <div className="portfolio-img" data-aos="fade-left" data-aos-delay="600">
                    <img src="images/portitem1.jpeg" alt=""></img>
                </div>
                <div className="portfolio-description" data-aos="fade-left" data-aos-delay="900">
                    <h6>Web Development</h6>
                    <h1>Personal Portfolio Website</h1>
                    <p>This is my first time building a responsive portfolio website with HTML, CSS, JavaScript, React JS, Node JS. Also using elements such as CSS Flexbox, Grid and loads more.
                    </p>
                    <a href="#" className="cta">View Details</a>
                </div>
            </div>
            </div>
            </div>
        </section>
    );
}

export default Portfolio;