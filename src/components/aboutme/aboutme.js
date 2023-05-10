import React from "react";
import './aboutme.css'
import Menu from "../menu/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import resume from './Jeeva Resume.jpg'

function Aboutme() {
    return (
        <>
            
            <div className="container-fluid maindivhome row mr-auto ml-auto">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 maindivhome1">
                    <h1 className="text-white text-center homemainheading font-weight-bold pt-5 pb-5">ABOUT <span className="homeheading">ME</span></h1>
                    <h3 className="text-white text-center font-weight-bold">INFORMATION ABOUT ME</h3>
                    <div className="col-lg-12 row mr-0">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6 pr-0 text-center">
                            <p className="mt-3 text-white text-center homepara">Hi i'm jeevanantham rangaraj from coimbatore,Tamilnadu.completed B.sc computer science and certified in Full stack development in kgisl college coimbatore.</p>
                            <p className="mt-3 text-white text-center homepara">Searching for the role of Web Developer at an innovative company where I can utilize my experience in designing, coding, testing, debugging, and deploying web applications.</p>
                            <a href={resume} download={resume} target="_blank"><button className="btn buttonhome rounded-pill col-lg-5 mt-5 mb-5">Download CV <span><FontAwesomeIcon icon={faDownload} /></span></button></a>
                        </div>
                        <div className="col-lg-3 pl-0"></div>
                        
                    </div>

                    <hr className="bg-white"/>



                    <div class="about-stats">
                <h4 class="stat-title text-white text-center font-weight-bold">My Skills</h4>
                <div class="progress-bars">
                    <div class="progress-bar">
                        <p class="prog-title">html5</p>
                        <div class="progress-con">
                            <p class="prog-text">80%</p>
                            <div class="progress">
                                <span class="html"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">css3</p>
                        <div class="progress-con">
                            <p class="prog-text">95%</p>
                            <div class="progress">
                                <span class="css"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">javascript</p>
                        <div class="progress-con">
                            <p class="prog-text">75%</p>
                            <div class="progress">
                                <span class="js"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">ReactJS</p>
                        <div class="progress-con">
                            <p class="prog-text">75%</p>
                            <div class="progress">
                                <span class="react"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">MySQL</p>
                        <div class="progress-con">
                            <p class="prog-text">87%</p>
                            <div class="progress">
                                <span class="node"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">Java</p>
                        <div class="progress-con">
                            <p class="prog-text">70%</p>
                            <div class="progress">
                                <span class="python"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="bg-white"/>
            <h4 className="text-white font-weight-bold text-center mt-5 mb-5">EDUCATION</h4>
            <div className="row mr-auto ml-auto">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 text-center">
                    <p className="font-weight-bold text-white dateedu rounded-pill col-lg-10 mr-auto ml-auto">2022-2023</p>
                    <h1 className="font-weight-bold  eduqua">Full Stack Development</h1>
                    <p className=" text-white paraedu">KGISL Micro College</p>
                </div>
                <div className="col-lg-2"></div>
            </div>
            <div className="row mr-auto ml-auto mt-5">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 text-center">
                    <p className="font-weight-bold text-white dateedu rounded-pill col-lg-10 mr-auto ml-auto">2019-2022</p>
                    <h1 className="font-weight-bold  eduqua">B.sc Computer Science</h1>
                    <p className=" text-white paraedu">KG College of Arts and Science</p>
                </div>
                <div className="col-lg-2"></div>
            </div>
            <div className="row mr-auto ml-auto mt-5">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 text-center">
                    <p className="font-weight-bold text-white dateedu rounded-pill col-lg-10 mr-auto ml-auto">2017-2019</p>
                    <h1 className="font-weight-bold eduqua">HSC</h1>
                    <p className=" text-white paraedu">Devanga Higher Secondary School</p>
                </div>
                <div className="col-lg-2"></div>
            </div>
            <div className="row mr-auto ml-auto mt-5">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 text-center">
                    <p className="font-weight-bold text-white dateedu rounded-pill col-lg-10 mr-auto ml-auto">2016-2017</p>
                    <h1 className="font-weight-bold  eduqua">SSLC</h1>
                    <p className=" text-white paraedu">Devanga Higher Secondary School</p>
                </div>
                <div className="col-lg-2"></div>
            </div>
            
                </div>
                <div className="col-lg-2  lastdivaboutme"><Menu /></div>
            </div>
        </>
    );
}
export default Aboutme