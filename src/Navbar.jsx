import react from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Navbar=()=>{
    return(
        <>
        <section className="navbar-main mt-3 pt-0">
            <div className="m-0 p-0">
                <img src="src/images/theatre-artist-site-logo.svg" alt="" />    
            </div>
        
            <nav className="navbar">
                <ul className="">
                    <li><a href=""><Link to="/">Home</Link></a></li>
                    <li><a href=""><Link to="/Biography">Biography</Link></a></li>
                    <li><a href=""><Link to="/Repertoire">Repertoire</Link></a></li>
                    <li><a href=""><Link to="/Contact">Contact</Link></a></li>
                </ul>
            </nav>
            <div className="navbar-img">
                <img src="src/images/instagram (2).png" alt="" width="25px" height="25px"/>
                <img src="src/images/social-media.png" alt="" width="25px" height="25px"/>
                <img src="src/images/twitter (2).png" alt="" width="25px" height="25px"/>
            </div>

        </section>
        </>
        
        
        
       
    )
}
export default Navbar;