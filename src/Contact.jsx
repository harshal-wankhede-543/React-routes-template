import react from "react";
import "./style.css"
import Navbar from "./Navbar";

const Contact=()=>{
    return(
        <>
        <section className="contact-main">
          <div className="contact-1 pt-5">
            <div className="contact-heading m-3 p-5">
              <h1>Contact</h1>
            </div>
          </div>
          <div className="contact-2">
            <div className="d-flex">
              <div className=" ">
                <img src="src/images/contact/location (1).png" alt="" width='25px' height='25px'/>
              </div>
              <div>
                <h4>My Studio Address</h4>
                <p>123 Carolina St, San Francisco, CA 94103, United States.</p>
              </div>
            </div>
            <div>
              <div className="d-flex ">
                <img src="src/images/contact/phone.png" alt="" width='25px' height='25px' />
                <p>+01 - 123 456 7890<br/>
                +01 - 123 456 7891</p>
              </div>
            </div>
            <div>
                <div className="d-flex ">
                  <div>
                    <img src="src/images/contact/email.png" alt="" width="25px" height="25px"/>
                  </div>
                  <div>
                    <h4>Mail me</h4>
                    <p>mail@example.com</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="location mt-5">
            <div className="frame m-5">
              <iframe src="https://www.google.com/maps/embed?pb
              =!1m18!1m12!1m3!1d4291.745453141256!2d
              77.39914006293347!3d28.504393188935435!
              2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1
              !3m3!1m2!1s0x390ce626851f7009%3A0x62118
              5133cfd1ad1!2sGeeksforGeeks%20%7C%20
              Coding%20Classes%20%7C%20Noida!5e0!3m2!1
              sen!2sin!4v1725395799894!5m2!1sen!2sin" frameborder="0"></iframe>
            </div>
            <div className="forms">
              <h1>Send a Message</h1>
              <p>Ultrices dui maecenas quisque cras dui sed porttitor aliquam morbi libero egestas lacus sed.</p>
              <form action="">
                <div className="form-adjust">
                  <input type="text" placeholder="First name"/>
                  <input type="text" placeholder="Last name" />
                </div>
                <div className="form1-adjust">
                <input type="e-mail" placeholder="Email Address"/>
                <input type="text" placeholder="Your Subject"/>
                <textarea name="" id="" placeholder="Your Message"></textarea>
                <button type="button" className="btn btn-dark"> Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        </>
    )
}
export default Contact;