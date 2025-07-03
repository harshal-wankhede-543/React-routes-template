import React from "react";
import "./style.css";

const Repertoire=()=>{
    return(
        <>
        <section className="repertoire p-5">
            <h1>Repertoire</h1>
            <div className="mt-5 repertoire-1">
                <div className="repertoire-img">
                    <img src="src/images/Repertoire/theatre-artist-template-repertoire-1-225x300.jpg" alt="" />
                </div>
                <div className="repertoire-img">
                    <img src="src/images/Repertoire/theatre-artist-template-repertoire-2-225x300.jpg" alt="" />
                </div>
                <div className="repertoire-img">
                    <img src="src/images/Repertoire/theatre-artist-template-repertoire-3-225x300.jpg" alt="" />
                </div>
                <div className="repertoire-img">
                    <img src="src/images/Repertoire/theatre-artist-template-repertoire-4-225x300.jpg" alt="" />
                </div>
            </div>
            <div className="upcoming">
                    <div className="upcoming-1">
                        <img src="src/images/theatre-artist-template-upcoming-event-img.jpg" alt="" />
                    </div>
                    <div className="upcoming-2s p-5">
                        <h4>Upcoming Show</h4>
                        <h1>Risus etiam dui</h1>
                        <div className="upcoming-2-adjust">
                            <div className="upcoming-2s-p">
                                <p>Ultricies nibh morbi amet fames in enim turpis aenean neque commodo nisi, tristique et nulla tellus</p>
                            </div>
                            <div className="date-1s m-0 p-0">
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
};

export default Repertoire;