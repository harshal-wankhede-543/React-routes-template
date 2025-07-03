import react from "react";
import "./style.css";
import Subscribe from "./Subscribe";


const Home=()=>{
    return(
        <>
            <section className="home-main mt-0">
                <div className="home-1 m-0 p-0">
                    <h1>William Gilbert</h1>
                    <h3>Scroll down</h3>
                    
                </div>
                <div className="biography p-5">
                    <div className="biography-1 m-5">
                        <h3>Biography & Awards</h3>
                        <h2>One of the greates contemporary theatre actor</h2>
                    </div>
                    <div className="biography-2 m-5 p-4">
                        <p>Neque facilisis a, faucibus orci orci nulla eget dictumst congue interdum etiam aliquam lobortis egestas pretium porttitor eget gravida urna, cursus imperdiet in arcu.<br/>
                        <br/>

                        Turpis elementum, ultrices dui maecenas quisque cras dui sed porttitor aliquam morbi libero egestas lacus sed.<br/>
                        <br/>

                        Commodo sit arcu curabitur egestas metus, dictum lectus vulputate sed pharetra nisl, sed eget pellentesque magna porttitor sed in maecenas maecenas rhoncus neque imperdiet eget bibendum malesuada enim, eu eu ac id pharetra ultrices tempus accumsan aenean nullam egestas viverra.</p>
                        <a href="">Read more</a>
                    </div>
                </div>
                <div className="history">
                    <div className="history-1 pt-0">
                        <div className="history-2">
                            <h1>1990</h1>
                            <h3>Vestibulum vitae mattis turpis fusce aliquam eu aliquam</h3>
                            <p>Non ut consequat hendrerit neque at</p>
                        </div>
                        <div className="history-2">
                            <h1>1992</h1>
                            <h3>Praesent et lectus eleifend feugiat placerat</h3>
                            <p>Lorem et fermentum mauris vitae sit</p>
                        </div>
                        <div className="history-2">
                            <h1>1997</h1>
                            <h3>Suspendisse rutrum consequat imperdiet tellus sed</h3>
                            <p>Pellentesque pulvinar ultrices morbi at</p>
                        </div>
                    </div>
                    <div className="history-1 pt-0">
                        <div className="history-2">
                            <h1>2000</h1>
                            <h3>Imperdiet egestas justo nunc, nunc sed consequat</h3>
                            <p>Non ut consequat hendrerit neque at</p>
                        </div>
                        <div className="history-2">
                            <h1>2005</h1>
                            <h3>Viverra luctus in habitant arcu placerat consectetur</h3>
                            <p>Lorem et fermentum mauris vitae sit</p>
                        </div>
                        <div className="history-2">
                            <h1>2012</h1>
                            <h3>Velit lacus porttitor urna vitae</h3>
                            <p>Pellentesque pulvinar ultrices morbi at</p>
                        </div>
                    </div>
                </div>
                <div className="rep p-5">
                    <div className="rep-1">
                        <h4>Repertoire</h4>
                        <h1>William Gillbert has over fourty roles in his repertoire</h1>
                    </div>
                    <div className="rep-2 pt-5 mt-5">
                        <div className="rep-img">
                            <img src="src/images/theatre-artist-template-repertoire-img-1.jpg" alt="" />
                            <h4>Tempor odio condimentum</h4>
                            <h2>As Etiam Mauris in Augue Eleifend Porttitor</h2>
                        </div>
                        <div className="rep-img">
                            <img src="src/images/theatre-artist-template-repertoire-img-2.jpg" alt="" />
                            <h4>Tempor odio condimentum</h4>
                            <h2>As Etiam Mauris in Augue Eleifend Porttitor</h2>
                        </div>
                        <div className="rep-img">
                            <img src="src/images/theatre-artist-template-repertoire-img-3.jpg" alt="" />
                            <h4>Tempor odio condimentum</h4>
                            <h2>As Etiam Mauris in Augue Eleifend Porttitor</h2>
                        </div>
                    </div>
                </div>
                <div className="upcoming">
                    <div className="upcoming-1">
                        <img src="src/images/theatre-artist-template-upcoming-event-img.jpg" alt="" />
                    </div>
                    <div className="upcoming-2 p-5">
                        <h4>Upcoming Show</h4>
                        <h1>Risus etiam dui</h1>
                        <div className="upcoming-2-adjust">
                            <div className="upcoming-2-p">
                                <p>Ultricies nibh morbi amet fames in enim turpis aenean neque commodo nisi, tristique et nulla tellus</p>
                            </div>
                            <div className="date-1 m-0 p-0">
                                <h1><span className="date-modify">06 / 14</span><br/>
                                2021</h1>
                            </div>
                        </div>
                        <div className="ticket">
                            <h4>Buy Tickets</h4>
                        </div>
                    </div>

                </div>
            </section>
            
        </>
    )
}
export default Home;