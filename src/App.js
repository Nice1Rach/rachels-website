import React from 'react';
import './main.css';
import Header from './Components/Header';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
      <div className="App">
          <Header>
          <div className="menu-toggler">
                <div className="bar half start"></div>
                <div className="bar"></div>
                <div className="bar half end"></div>
            </div>
            <nav className="top-nav">
                <ul className="nav-list">
                <li>
                <a href="index.html" class="nav-link">Home</a>
                </li>
                <li>
                    <a href="#about" class="nav-link">About</a>
                </li>
                <li>
                    <a href="#services" class="nav-link">Services</a>
                </li>
                <li>
                    <a href="#portfolio" class="nav-link">Portfolio</a>
                </li>
                <li>
                    <a href="#experience" class="nav-link">Experience</a>
                </li>
                <li>
                    <a href="#contact" class="nav-link">Contact</a>
                </li>
                </ul>
            </nav>
            <div className="landing-text">
                <h1>Rachel Heke</h1>
                <h6>Full Stack Web Developer</h6>
            </div>
          </Header>
          <About>
          <section className="about" id="about">
            <div className="container">
              <div className="profile-img" data-aos="fade-right" data-aos-delay="300">
                <img src="images/profile.jpeg"alt=""></img>
              </div>
              <div className="about-details" data-aos="fade-left" data-aos-delay="600">
                <div class="about-heading">
                  <h1>About</h1>
                  <h6>Myself</h6>
                  <p> Hello I'm Rachel.
                  </p>
                </div>   
                <div class="social-media">
                <ul class="nav-list">
                  <li>
                    <a href="https://www.facebook.com/rachel.sheets.376/" class="icon-link">
                      <i class="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/rachel-heke-7ba0b01b6/" class="icon-link">
                      <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Nice1Rach" class="icon-link">
                      <i class="fa fa-github" aria-hidden="true"></i>"
                    </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          </About>
          <Services>
          <section className="services" id="services">
            <div className="container">
                <div className="section-heading">
                    <h1>Services</h1>
                    <h6>What I can do for you</h6>
                </div>
                <div className="my-skills">
                    <div class="skill" data-aos="fade-in" data-aos-delay="300">
                    <div class="icon-container">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <h1>Web Design</h1>
                    <p>I am interested in technical work, I have creative mind with this combination I can design and bring to life website's.
                    </p>
                </div>
                <div class="skill" data-aos="fade-in" data-aos-delay="600">
                <div class="icon-container">
                    <i class="fas fa-code"></i>
                </div>
                <h1>Web Development</h1>
                <p>I am competent in designing, building, creating and maintaining websites, servers and databases. I can contribute anywhere I am needed on a development team, as well as working alone.
                </p>
                </div>
            </div>
            </div>
        </section>
          </Services>
          <Portfolio>
          <section className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-heading">
                    <h1>Portfolio</h1>
                    <h6>View some of my recent work</h6>
                </div>
                <div className="portfolio-item">
                <div class="portfolio-img" data-aos="fade-right" data-aos-delay="300">
                <img src="images/portitem2.jpeg" alt=""></img>
                </div>
                <div class="portfolio-description" data-aos="fade-right" data-aos-delay="300">
                    <h6>Web Development</h6>
                    <h1>Contact Tracing Application</h1>
                    <p>Coming Soon!
                    </p>
                </div>
                <br></br>
                <div className="portfolio-item">
                <div class="portfolio-img" data-aos="fade-left" data-aos-delay="600">
                    <img src="images/portitem1.jpeg" alt=""></img>
                </div>
                <div class="portfolio-description" data-aos="fade-left" data-aos-delay="900">
                    <h6>Web Development</h6>
                    <h1>Personal Portfolio Website</h1>
                    <p>This is my first time building a responsive portfolio website with HTML, CSS, JavaScript, React JS, Node JS. Also using elements such as CSS Flexbox, Grid and loads more.
                    </p>
                    <a href="#" class="cta">View Details</a>
                </div>
            </div>
            </div>
            </div>
        </section>
          </Portfolio>
          <Experience>
          <section className="experience" id="experience">
            <div className="container">
                <div className="section-heading">
                    <h1>Education</h1>
                    <h6>Courses</h6>
                </div>
                <div className="timeline" data-aos="fade-down" data-aos-delay="300">
                    <ul>
                    <li class="date " data-date="2020">
                    <h1>Duke University: Coursera: Java Programming: Solving Problems with Software.</h1>
                    <p>I learned to code in Java and improve on my programming and problem-solving skills, and how to design algorithms as well as develop and debug programs. I can write programs that access and transform images, websites, and other
                        types of data.
                    </p>
                    </li>
                    <li class="date " data-date="2020">
                        <h1>Duke University: Coursera: Programming Foundations with JavaScript, HTML and CSS</h1>
                        <p>I improved my critical thinking with solving problems by using programming. I developed on my ability to to write JavaScript programs using functions, for loops, and conditional statements etc. This was more of a refresher course.
                        </p>
                    </li>
                    <li class="date " data-date="2020">
                        <h1>Otago Polytechnic: Mission Ready HQ: Certificate in Technology Product Development Essentials (Level 4)</h1>
                        <p> I am still in the middle of this course but have learned so much already about programming, and different product tools to use. I love working front end and back end so I definitely will be happy with working as a Full-Stack Web
                            Developer.
                        </p>
                    </li>
                    </ul>
                </div>
            </div>
        </section>
          </Experience>
          <Contact>
          <section className="contact" id="contact">
            <div className="container">
                <div className="section-heading">
                    <h1>Contact</h1>
                    <h6>Let's work together</h6>
                </div>
                <form action=" " data-aos="fade-up" data-aos-delay="300">
                    <label for="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name... " required />
                    <label for="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email... " required />
                    <label for="services">Services:</label>
                    <label>
                        <select name="services" id="service">
                            <option value=" ">Web Design</option>
                            <option value=" ">Web Development</option>
                        </select>
                    </label>
                    <label for="subject">Subject:</label>
                    <textarea name="subject" id="subject" cols="10" rows="10"></textarea>
                        <input type="submit" value="Submit" />
                </form>   
            </div>
        </section>
          </Contact>
          <Footer>
          <footer class="copyright">
            <div class="up" id="up">
                <i class="fas fa-chevron-circle-up fa-3x"></i>
            </div>
            <p>&copy 2023 Rachel Heke</p>
        </footer>
          </Footer>
      </div>
  );
}

export default App;
