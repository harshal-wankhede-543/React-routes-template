import React from "react";
import "./style.css";

const Subscribe=()=>{
    return(
        <>
        <div className="updated">
            <h3>STAY UPDATED!</h3>
            <h1>SUBSCRIBE TO MY SHOW UPDATES</h1>
            <div className="update-input">
              <input type="email" placeholder="Email Address"/>
              <button type="button" className="btn btn-dark">Subscribe</button>
            </div>
          </div>
          <div className="navbar-min">
            <div className="navbar-1-img m-0 p-0">
              <img src="src/images/theatre-artist-site-logo.svg" alt="" />    
            </div>
        
            <nav className="navbar-1">
                <ul className="">
                    <li><a href="">Home</a></li>
                    <li><a href="">Biography</a></li>
                    <li><a href="">Repertoire</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <div className="navbar-2-img mb-5">
                <img src="src/images/instagram (2).png" alt="" width="25px" height="25px"/>
                <img src="src/images/social-media.png" alt="" width="25px" height="25px"/>
                <img src="src/images/twitter (2).png" alt="" width="25px" height="25px"/>
            </div>
          </div>
          <div className="contact-foot text-center text-white p-4">
            <p>© 2025 Theatre Artist. Powered by Theatre Artist</p>
          </div>
        </>
    )
}
export default Subscribe;