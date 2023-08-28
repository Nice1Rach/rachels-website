import React from 'react';
import '../main.css';

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="section-heading">
                    <h1>Contact</h1>
                    <h6>Let's work together</h6>
                </div>
                <form action=" " data-aos="fade-up" data-aos-delay="300">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name..." required />
  
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" placeholder="Enter your email..." required />
  
                    <label htmlFor="services">Services:</label>
                        <select id="services" name="services">
                            <option value="web-design">Web Design</option>
                            <option value="web-development">Web Development</option>
                    </select>
  
                    <label htmlFor="subject">Subject:</label>
                    <textarea id="subject" name="subject" cols="10" rows="10"></textarea>
  
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </section>
    );
}

export default Contact;