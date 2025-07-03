import react from "react";
import "./style.css";

const Biography=()=>{
    return(
        <>
        <section className="container-fluid mt-0 p-5 bio-main">
            <div className="bio-1 mt-0 p-5">
            <h1>Biography</h1>
            <img src="src/images/Bio/theatre-artist-template-about-page-header-img.jpg" alt="" />
            </div>
            <div className="great">
            <h1>One of the greatest contemporary theatre actor</h1>
            <p>Neque facilisis a, faucibus orci orci nulla eget dictumst congue interdum etiam aliquam lobortis egestas pretium porttitor eget gravida urna, cursus imperdiet in arcu.

            Turpis elementum, ultrices dui maecenas quisque cras dui sed porttitor aliquam morbi libero egestas lacus sed.

            Commodo sit arcu curabitur egestas metus, dictum lectus vulputate sed pharetra nisl, sed eget pellentesque magna porttitor sed in maecenas             maecenas rhoncus neque imperdiet eget bibendum malesuada enim, eu eu ac id pharetra ultrices tempus accumsan aenean nullam egestas viverra.</p>
            <br/>
            <br/>
            <h2>1980</h2>
            <p>Dignissim egestas congue dolor netus nec eu, ut quis aliquam phasellus eu lectus arcu eget tellus commodo eleifend augue mattis sed.</p>
            <h2>1983</h2>
            <p>Dignissim egestas congue dolor netus nec eu, ut quis aliquam phasellus eu lectus arcu eget tellus commodo eleifend augue mattis sed.</p>
            <h2>1989</h2>
            <p>Dignissim egestas congue dolor netus nec eu, ut quis aliquam phasellus eu lectus arcu eget tellus commodo eleifend augue mattis sed.</p>
            <h2>1994</h2>
            <p>Dignissim egestas congue dolor netus nec eu, ut quis aliquam phasellus eu lectus arcu eget tellus commodo eleifend augue mattis sed.</p>

        </div>
        <div className="flexing pt-5">
            <div>
                <img src="src/images/Bio/theatre-artist-template-gallery-img-1-300x200.jpg" alt="" />
            </div>
            <div  className="long">
                <img src="src/images/Bio/theatre-artist-template-gallery-img-2-200x300.jpg" alt="" />
            </div>
            <div>
                <img src="src/images/Bio/theatre-artist-template-gallery-img-3-300x200.jpg" alt="" />
            </div>
            <div className="long">
                <img src="src/images/Bio/theatre-artist-template-gallery-img-4-200x300.jpg" alt="" />
            </div>
            <div>
                <img src="src/images/Bio/theatre-artist-template-gallery-img-5-300x200.jpg" alt="" />
            </div>
        </div>
        </section>
        </>
    )
}
export default Biography;