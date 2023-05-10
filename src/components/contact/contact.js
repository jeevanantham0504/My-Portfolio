import React from "react";
import './contact.css'
import Menu from "../menu/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact(){
    return(
        <>
        <div className="container-fluid mr-auto ml-auto row contactmaindiv">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
                <h1 className="text-white text-center font-weight-bold contactmainhead mt-5 mb-5">CONTACT<span className="contacthead1">ME</span></h1>
                <div className="container mr-auto ml-auto row">
                <div className="col-lg-1"></div>
                    <div className="col-lg-10 mt-3">
                        <h2 className="text-white contactspanhead"><FontAwesomeIcon className="mr-1" icon={faEnvelope} />EMAIL :  <a className="spanlink"  href="#"> jeevarangaraj46@gmail.com</a> </h2>
                        <h2 className="text-white contactspanhead mt-4"><FontAwesomeIcon className="mr-1" icon={faPhone} />MOBILE :  <a className="spanlink"  href="#">+91 9384223844</a> </h2>
                        <h2 className="text-white contactspanhead mt-4"><FontAwesomeIcon className="mr-1" icon={faLocationDot} />LOCATION :  <a className="spanlink"  href="#">Coimbatore,Tamilnadu</a> </h2>
                        <h2 className="text-white contactspanhead mt-4"><FontAwesomeIcon className="mr-1" icon={faLanguage} />LANGUAGES : <a className="spanlink"  href="#">English,Tamil</a> </h2>
                        <h2 className="text-white contactspanhead mt-4"><FontAwesomeIcon className="mr-1" icon={faUserGraduate} />EDUCATION : <a className="spanlink"  href="#">KGISL Micro College</a> </h2>
                        
                        <div className="pr-auto pl-auto d-flex justify-content-around">
                        <button className="btn buttonemail rounded-pill col-lg-3 mt-5 mb-5 align-items-start"> <a href="mailto:jeevarangaraj46@gmail.com" className="contactlastbuttons1 ">Email Me<span><FontAwesomeIcon icon={faEnvelope} /></span></a></button>
                        <button className="btn buttoncontact rounded-pill col-lg-3 mt-5 mb-5 align-items-center"><a className="contactlastbuttons" href="https://github.com/jeevanantham0504">GitHub 
                        <span><GitHubIcon/></span></a></button>
                        <button className="btn  buttoncall rounded-pill col-lg-3 mt-5 mb-5 align-items-end"><a className="contactlastbuttons" href="tel:9384223844">Hire Me<span><FontAwesomeIcon icon={faPhone} /></span></a></button>
                        </div>
                    
                    </div>
                   <div className="col-lg-1 "></div>
                    </div>
            </div>
            <div className="col-lg-2 lastdivcontact"><Menu/></div>

        </div>
        </>
    );
}
export default Contact