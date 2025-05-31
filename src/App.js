import { useState, useEffect } from 'react';
import './App.css';
import Github from "./Assets/heheeee.svg"
import Linkedin from "./Assets/final.svg"
import image from "./Assets/photo.svg" 
import certificate from "./Assets/Coursera-Certificate.png"
import certificate1 from "./Assets/advanced.png"
import certificate2 from "./Assets/unsupervised.png"
import certificate3 from "./Assets/visu.png"
import certificate4 from "./Assets/ts.png"
import certificate5 from "./Assets/rl.png"
import before from "./Assets/before.svg"
import after from "./Assets/after.svg"
import gmail from"./Assets/Gmail.svg"



function App() {

  useEffect(() => {
    document.title = 'PORTFOLIO';
  }, []);

  const certificates = [
    {id: 0, image: certificate, link: "https://coursera.org/share/8680bdda93a81ca21ba161d3805ecf7a"},
    {id: 1, image: certificate1, link: "https://www.coursera.org/account/accomplishments/verify/UBUVQQHYQAP3"},
    {id: 2, image: certificate2, link: "https://www.coursera.org/account/accomplishments/verify/44092QR8DNQT"},
    {id: 3, image: certificate3, link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/9f9ce2f19d5bb7f173a5cef9ad99c9e7385af29a"},
    {id: 4, image: certificate4, link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/87f4747315398af23f75ec23ad49b9f3f9e94f58"},
    {id: 5, image: certificate5, link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/af632cf37a26f798ebb489b3706a5001f2fbeccf"},

  ]

  const projects =[
    {id: 0, name: "Full MERN Stack Application with Real Time Messaging and Video Calls", description: "A comprehensive MERN stack application featuring a real-time messaging system with notifications, full authentication (sign-in, sign-up, and password recovery), and video calling functionality. Utilizes JWT for secure authentication, socket.io for real-time communication, and WebRTC for video calls.", technologies: ["React", "Express", "JWT", "WebRTC", "SOCKET.IO", "MongoDB"], link: "https://github.com/dihiaflz/Full-MERN-Stack-Application-with-Real-Time-Messaging-and-Video-Calls"},
    {id: 1, name: "Appointment-Calendar-App", description: " Full-stack MERN appointment scheduling application with a responsive design. Users can view, add, edit, and delete appointments through a visual calendar interface using React FullCalendar. The app also allows uploading an optional image for each appointment. Fully responsive down to 300px for mobile devices.", technologies: ["React", "Express", "MongoDB", "FullCalendar"], link: "https://github.com/dihiaflz/Appointment-Calendar-App"},
    {id: 2, name: "MERN-Stack-Sales-Dashboard-with-Chart.js", description: "This data visualization application is built with the MERN stack (MongoDB, Express, React, Node.js) and provides a user-friendly dashboard for analyzing sales data. It allows users to visualize sales performance through interactive charts. Fully responsive down to 300px for mobile devices.", technologies: ["React", "Express", "Chart.js", "MongoDB"], link: "https://github.com/dihiaflz/MERN-Stack-Sales-Dashboard-with-Chart.js"},
    {id: 3, name: "SQL-Backend-code-for-a-tv-show-management-website", description: "This Git repository hosts the backend code for an advanced admin panel dedicated to managing the operations of the iconic TV show 'Question pour un Champion' . With a robust set of functionalities, the admin panel serves as a comprehensive tool for efficiently overseeing various aspects of the show.", technologies: ["Express", "mySQL12", "JWT"], link: "https://github.com/dihiaflz/SQL-Backend-code-for-a-tv-show-management-website"},
    {id: 4, name: "Spreadsheet-Mailer-QR", description: "This project leverages the Google Sheets API to fetch participant information from a spreadsheet. It then dynamically generates personalized emails for each participant, incorporating their first and last names into the email content. Additionally, it generates a personalized QR code for each participant and embeds it within the email.", technologies: ["Express", "googleapis", "qrcode"], link: "https://github.com/dihiaflz/Spreadsheet-Mailer-QR"},
    {id: 5, name: "Check-In-App", description: "Train It Check-In App: A web application designed for seamless participant check-ins at the Train It datathon event. Featuring a QR code scanner, it swiftly retrieves participant information including fullName, team, and email, displaying it on screen. Integrated with an API, it updates the participant's spreadsheet with a 'yes' in the checked cell upon successful check-in", technologies: ["React", "Express", "googleapis", "html5-qrcode"], link: "https://github.com/dihiaflz/Check-In-App"},
    {id: 6, name: "HOTEL MANAGEMENT BACKEND CODE", description: "Backend code repository for a hotel management website admin panel. Includes functionality for staff management, room listing with availability status, client booking management, and other essential admin panel operations, incorporating robust security measures", technologies: ["Express", "MongoDB", "JWT"], link: "https://github.com/dihiaflz/Hotel-management-backend-code"},
    {id: 7, name: "Backend-code-of-nursery-management-website", description: "The backend code for a comprehensive nursery management website . The website provides distinct interfaces catering to administrators, nurses, speech therapists, and parents, each equipped with specialized functionalities tailored to their roles and responsibilities.", technologies: ["Express", "MongoDB", "JWT"], link: "https://github.com/dihiaflz/Backend-code-of-nursery-management-website"}
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const goToNext = () => {
    if (currentIndex < certificates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getContainerClassName = () => {
    if (currentIndex > 0 && currentIndex < certificates.length - 1) {
      return 'container'; 
    } else if (currentIndex > 0) {
      return 'container-before'; 
    } else if (currentIndex < certificates.length - 1) {
      return 'container-after'; 
    } else {
      return 'container';
    }
  };
  


  useEffect(() => {
    
    const handleScroll = () => {
      const offset = window.scrollY;
      // If the user scrolls down 50px, change the state
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    console.log(certificates[currentIndex].image)
    console.log(image)
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [certificates, currentIndex]);

  return (
    <div className="App">

      <div className={`nav-bar ${isScrolled ? 'scrolled' : 'begin'}`}>

        <div className='social-media'>
          
          
          <a href='https://github.com/dihiaflz'><img className='github' alt='github' src={Github}></img></a>
          <a href='https://www.linkedin.com/in/dihia-falouz/'><img className='linkedin' alt='linkedin' src={Linkedin}></img></a>
        </div>

        <div className='titles'>
          <a href="#about-section">
            <div className='item'>
              {/*<img className='square' alt='square' src={Square}></img>*/}
              <p>About</p>
            </div>
          </a>
          <a href="#certificates-section">
            <div className='item'>
              {/*<img className='square' alt='square' src={Square}></img>*/}
              <p>Certificates</p>
            </div>
          </a>
          <a href="#projects-section">
            <div className='item'>
              {/*<img className='square' alt='square' src={Square}></img>*/}
              <p>Projects</p>
            </div>
          </a>
          <a href="#contact-section">
            <div className='item'>
             {/*<img className='square' alt='square' src={Square}></img>*/}
              <p>Contact</p>
            </div>
          </a>
        </div>

      </div>

      <div className='first-section'>
        <div className='home'>
        <img className='image' alt='imageAlt' src={image}></img>

          <div className='left'>
            <div className='text'>
              <p>Hello 👋 my name is</p>
              <h1>Falouz Dihia</h1>
              <p className='bio'>I'm a MERN Stack Developer and Computer Science student passionate about building efficient and user-friendly web applications using technologies such as JavaScript, React, Node.js, and Express.</p>
            </div>
            <div className="buttons"> 
              <a href='#projects-section'>
                <button className='button1'>My work &#8594;</button>
              </a>
              <a href='#contact-section' className='buttons'>
                <button className='button2'>Get in touch</button>
              </a>
            </div>
            
            
          </div>
        </div>
        <div className='about' id='about-section'>
          <h1>About me</h1>
          <div className='about-me'>
          I am a MERN Stack Developer and a Computer Science student at ESTIN (École Nationale Supérieure en Sciences et Technologies de l'Informatique et du Numérique). I specialize in building robust and scalable web applications using JavaScript, React, Node.js, and Express.

          With a strong interest in Artificial Intelligence and Data Science, I am committed to integrating innovative technologies into my projects. I focus on developing seamless user experiences while ensuring my code is clean, maintainable, and efficient.

          I thrive on solving complex problems and enjoy working on challenging projects that enhance my skills. As a dedicated team player, I am eager to collaborate with others and continue growing in the dynamic field of web development.
          </div>
        </div>
      </div>

      <div className='second-section'>
        <div className='certificates-section' id='certificates-section'>
          <h1>Certificates</h1>

          <div className={getContainerClassName()}>
            {currentIndex > 0 && (
              <button className="button" onClick={goToPrevious}><img className='before-image' alt='before' src={before}></img></button>
            )}

            <div className="certificate-display">
              <a href={certificates[currentIndex].link} target="_blank" rel="noopener noreferrer">
                <img src={certificates[currentIndex].image} alt={`Certificat ${currentIndex + 1}`} className='certificate-image' />
              </a>
            </div>

            {currentIndex < certificates.length - 1 && (
              <button className="button" onClick={goToNext}><img className='after-image' alt='after' src={after}></img></button>
            )}            
          </div>
        </div>
        <div className='projects-section' id='projects-section'>
          <h1>Projects</h1>
          <div className='projects-display'>
            {projects.map((project, index) => (
              <div className="project" key={index}>
                <h3 className='name'>{project.name}</h3>
                <p className='decription'>{project.description}</p>
                <div className='technologies'>{project.technologies.map((technologie, index) => (<button className='technologie'>{technologie}</button>))}</div>
                <a className="button3" href={project.link}><button className='button1'>Source code &#8594;</button></a>
              </div>
            ))}
          </div>

        </div>
        <div className='contacts-section' id='contact-section'>
          <div className='titles2'>
            <h1>Contact me</h1>
            <h4>Find me on social platforms</h4>
          </div>
          <div className='contacts'>
            <a className='contact' href='mailto:d_falouz@estin.dz'>
              <img className='gmail' alt='gmail' src={gmail}></img>
            </a>
            <a className='contact' href='https://github.com/dihiaflz'>
              <img className='github' alt='github' src={Github}></img>
            </a>
            <a className='contact' href='https://www.linkedin.com/in/dihia-falouz/'>
              <img className='linkedin' alt='linkedin' src={Linkedin}></img>
            </a>
          </div>
          <div className='end'>Made with ❤️ by me</div>
        </div>
      </div>
    </div>
  );
}

export default App;
