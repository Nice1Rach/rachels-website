import React from 'react';
import '../main.css';

function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="container">
                <div className="section-heading">
                    <h1>Education</h1>
                    <h6>Courses</h6>
                </div>
                <div className="timeline" data-aos="fade-down" data-aos-delay="300">
                    <ul>
                    <li className="date " data-date="2020">
                    <h1>Duke University: Coursera: Java Programming: Solving Problems with Software.</h1>
                    <p>I learned to code in Java and improve on my programming and problem-solving skills, and how to design algorithms as well as develop and debug programs. I can write programs that access and transform images, websites, and other
                        types of data.
                    </p>
                    </li>
                    <li className="date " data-date="2020">
                        <h1>Duke University: Coursera: Programming Foundations with JavaScript, HTML and CSS</h1>
                        <p>I improved my critical thinking with solving problems by using programming. I developed on my ability to to write JavaScript programs using functions, for loops, and conditional statements etc. This was more of a refresher course.
                        </p>
                    </li>
                    <li className="date " data-date="2020">
                        <h1>Otago Polytechnic: Mission Ready HQ: Certificate in Technology Product Development Essentials (Level 4)</h1>
                        <p> I am still in the middle of this course but have learned so much already about programming, and different product tools to use. I love working front end and back end so I definitely will be happy with working as a Full-Stack Web
                            Developer.
                        </p>
                    </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Experience;