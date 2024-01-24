import "./Contact.css";
import email from "./images/email.png";
import linkedinblack from "./images/linkedin-black.png";
import "bootstrap/dist/css/bootstrap.css";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div>
        <p className="title-1-contact">Get In Touch</p>
        <h1 className="title-2-contact">Contact Me</h1>
      </div>
      <div className="boxes-contact">
        <div className="box-contact">
          <article>
            <img src={email} className="logo-contact" />
            <a
              className="text-contact"
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=cabinav2005@gmail.com"
            >
              cabinav2005@gmail.com
            </a>
          </article>
          <article>
            <img src={linkedinblack} className="logo-contact" />
            <a
              className="text-contact"
              href="https://www.linkedin.com/in/abhinavchoudhary2005/"
            >
              LinkedIn
            </a>
          </article>
        </div>
      </div>
      <div className="navlinkdiv-contact">
        <a className="nav-link-p-contact" href="#about">
          About
        </a>
        <a className="nav-link-p-contact" href="#skill">
          Tech-Stack
        </a>
        <a className="nav-link-p-contact" href="#project">
          Project
        </a>
        <a className="nav-link-p-contact" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
}
