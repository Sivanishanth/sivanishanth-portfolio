import '../styles/Contact.css'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";
import emailjs from '@emailjs/browser'

export default function Contact(){
    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm(
            "service_osrrp0s",
            "template_d3hctw7",
            e.target,
            "qd71KRru0TvAuzBda"
        )
    }
    return(
        <footer className="footer-container" id="contact">
            <div className="contact-title">
                <h1>Contact</h1>
            </div>
            <div className="contact-content">
                <div className="form">
                    <form onSubmit={sendEmail} className="contact-form">
                        <input type="text" name='name' placeholder='Your Name' required/>
                        <input type="email" name='email' placeholder='E-Mail' required/>
                        <textarea name="message" placeholder='Your Message' required></textarea>
                        <button type='submit'>send message</button>
                    </form>
                </div>
                <div className="contact-info">
                    <a href="mailto:sivanishanth303@gmail.com" target='-blank' rel='noopener noreferrer'><FaEnvelope/>Email</a>
                    <a href="https://github.com/Sivanishanth" target='-blank' rel='noopener noreferrer'><FaGithub/>Github</a>
                    <a href="https://www.linkedin.com/in/sivanishanth303/" target='-blank' rel='noopener noreferrer'><FaLinkedin/>Linkedin</a>
                    <a href="https://wa.me/918825433842" target='-blank' rel='noopener noreferrer'><FaWhatsapp/>Whatsapp</a>
                </div>
                <div className="resume">
                    <a href="/assets/SIVANISHANTH.pdf" className="download-resume" download>Download Resume</a>
                </div>
            </div>
        </footer>
    )
}