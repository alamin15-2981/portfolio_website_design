import React,{useEffect} from "react";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  useEffect(()=>{
    document.getElementById('myForm').reset()
  },[])
  return (
    <section className="container p-80">
      <div className="row">
        <h3 className="display-3 fw-bold text-center mb-5">Contact Me</h3>
        <p className="text-center" style={{ marginBottom: "40px" }}>
        You can contact me on these social media <a href="https://www.facebook.com/Shovon193" target="_blank"><FaFacebook style={{fontSize: "32px",margin: "0px 5px"}} /></a> <a href="mailto:alamin15-2981@diu.edu.bd"><SiGmail style={{color: "red",fontSize: "32px",margin: "0px 5px"}} /></a> and through the form below
        </p>
        <div className="col-md-6 text-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7299.937396253743!2d90.4282963!3d23.819712099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1715011389263!5m2!1sen!2sbd" className="w-100 h-100" loading="lazy"></iframe>
        </div>
        <div className="col-md-6 contact-form">
          <form action="https://formspree.io/f/xpzvnaqw" method="POST" id="myForm">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
              <label>Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
              />
              <label>Email</label>
            </div>
            <div className="form-floating mb-3">
              <textarea className="form-control message-area" placeholder="Message" name="message" id="" cols="40" rows="16"></textarea>
              <label>Message</label>
            </div>
            <button type="submit" className="btn btn-lg btn-primary w-100 fw-bold">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;