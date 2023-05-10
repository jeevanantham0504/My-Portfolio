import React from "react";
import './home.css'
import profileimg from './jeeva5.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Menu from "../menu/menu";
import resume from './Jeeva Resume.jpg'
function Home() {
    return (
        <>
            {/* aboutme */}
            <div className="container-fluid aboutmemaindiv row mr-auto ml-auto">
                <div className="col-lg-6">
                    <div className="shapedivabout">
                        <img className="pphoto col-lg-8 mr-auto ml-auto d-flex" src={profileimg} />
                    </div>
                </div>
                <div className="col-lg-4 aboutrightdiv">
                    <h1 className="text-white font-weight-bold headingabout">
                        Hi, I'm <span className="aboutmename ">Jeevanantham.</span>
                        A Fullstack Developer.
                    </h1>

                    <p className="text-white aboutpara pt-3">Solution-driven web developer adept at contributing to highly collaborative work environment and finding solutions. Proven experience developing consumer-focused websites using HTML, CSS, React JS, Node JS, MySQL, Java and JavaScript. Good knowledge of the best practices for web design, user experience, and speed.</p>

                    <a href={resume} download={resume} target="_blank"><button className="btn buttonabout rounded-pill col-lg-5 mt-3">Download CV <span><FontAwesomeIcon icon={faDownload} /></span></button></a>

                </div>
                <div className="col-lg-2  lastdivhome">
                    <Menu/>
                </div>
            </div>



        </>
    );
}
export default Home