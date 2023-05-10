import React from "react";
import './certificates.css'
import Menu from "../menu/menu";
import rdbmsimg from "./RDBMS.png"
import htmlimg from './HTML.png'
import cssimg from './CSS.png'
import jsimg from './JS.png'
import frendimg from './FREND.png'
import backendimg from './BKEND.png' 

function Certificates(){
    return(
        <>
        <div className="container-fluid row mr-auto ml-auto certimaindiv">
        <div className="col-lg-2"></div>
            <div className="col-lg-8">
            <div class="blogs-content">
                <div class="main-title">
                    <h2 className="text-white text-center font-weight-bold mainheadcerti">MY <span className="headcerti">CERTIFICATES</span></h2>
                </div>
                <div class="blogs">
                    <div class="blog">
                        <a href="#"><img className="" src={htmlimg} alt=""/></a>
                        <div class="blog-text">
                            <h4 className="text-white">
                                Certificate for completing HTML in Coursera
                            </h4>
                            {/* <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Doloribus natus voluptas, eos obcaecati recusandae amet?
                            </p> */}
                        </div>
                    </div>
                    <div class="blog">
                    <a href="#"><img src={cssimg} alt=""/></a>
                        <div class="blog-text">
                            <h4 className="text-white">
                            Certificate for completing CSS in Coursera
                            </h4>
                            {/* <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Doloribus natus voluptas, eos obcaecati recusandae amet?
                            </p> */}
                        </div>
                    </div>
                    <div class="blog">
                    <a href="#"><img src={jsimg} alt=""/></a>
                        <div class="blog-text">
                            <h4 className="text-white">
                            Meta Certificate for completing Javascript in Coursera
                            </h4>
                            {/* <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Doloribus natus voluptas, eos obcaecati recusandae amet?
                            </p> */}
                        </div>
                    </div>
                    <div class="blog">
                    <a href="#"><img src={frendimg} alt=""/></a>
                        <div class="blog-text">
                            <h4 className="text-white">
                            Meta Certificate for completing Frontend in Coursera
                            </h4>
                            {/* <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Doloribus natus voluptas, eos obcaecati recusandae amet?
                            </p> */}
                        </div>
                    </div>
                    <div class="blog">
                        <a href="#"><img src={backendimg} alt=""/></a>
                        <div class="blog-text">
                            <h4 className="text-white">
                            Meta Certificate for completing Backend in Coursera
                            </h4>
                            {/* <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Doloribus natus voluptas, eos obcaecati recusandae amet?
                            </p> */}
                        </div>
                    </div>
                    <div class="blog">
                    <a href="#"><img src={rdbmsimg} alt=""/></a>
                        <div class="blog-text">
                            <h4 className="text-white">
                            Certificate for completing RDBMS in Coursera by IBM
                            </h4>
                            {/* <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Doloribus natus voluptas, eos obcaecati recusandae amet?
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-2 lastdivcertificate">
        <Menu/>
        </div>
        </div>
        </>
    );
}
export default Certificates