import React from "react";
import './projects.css'
import Menu from "../menu/menu";
import { Grid } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
function Project(){
    return(
        <>
        <div className="container-fluid row mr-auto ml-auto projectmaindiv">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
                <h1 className="font-weight-bold text-white text-center projectheadingmain mt-5 mb-5">MY <span className="projectheading1">PROJECTS</span></h1>
                <p className="projectparamain text-center mb-5">Here is some of my work that I've done in various programming languages.</p>
                <div className="col-lg-12 row mr-auto ml-auto justify-content-around">
                    
                    <div className="col-lg-3 projectdivs">
                        <h3 className="text-center text-black font-weight-bold mt-5 projectnames">Amazon Webpage</h3>
                        <h1 className="text-center text-white font-weight-bold "> 
                        <Grid item xs={1}>
                            <a className="iconlinkproject" href="https://github.com/jeevanantham0504/amazon"><GitHubIcon className="projecticon" /></a>
                            </Grid>
                        </h1>
                    </div>
                    <div className="col-lg-3 projectdivs">
                    <h3 className="text-center text-black font-weight-bold mt-5 projectnames">Jiomart Webpage</h3>
                    <h1 className="text-center text-white font-weight-bold "> 
                        <Grid item xs={1}>
                        <a className="iconlinkproject" href="https://github.com/jeevanantham0504/jiomart"><GitHubIcon className="projecticon" /></a>
                            </Grid>
                        </h1>
                    </div>
                    <div className="col-lg-3 projectdivs">
                    <h3 className="text-center text-black font-weight-bold mt-5 projectnames">Movie Details Project</h3>
                    <h1 className="text-center text-white font-weight-bold "> 
                        <Grid item xs={1}>
                        <a className="iconlinkproject" href="#"><GitHubIcon className="projecticon" /></a>
                            </Grid>
                        </h1>
                    </div>
                    </div>
                    <div className="col-lg-12 row mr-auto ml-auto justify-content-around mt-5 mb-5">
                    <div className="col-lg-3 projectdivs">
                    <h3 className="text-center text-black font-weight-bold mt-5 projectnames">My portfolio</h3>
                    <h1 className="text-center text-white font-weight-bold "> 
                        <Grid item xs={1}>
                        <a className="iconlinkproject" href="#"><GitHubIcon className="projecticon" /></a>
                            </Grid>
                        </h1>
                    </div>
                    <div className="col-lg-3 projectdivs">
                    <h3 className="text-center text-black font-weight-bold mt-5 projectnames">Responsive Webpage</h3>
                    <h1 className="text-center text-white font-weight-bold "> 
                        <Grid item xs={1}>
                        <a className="iconlinkproject" href="https://github.com/jeevanantham0504/Responsive-web-pages-using-bootsrap"><GitHubIcon className="projecticon" /></a>
                            </Grid>
                        </h1>
                    </div>
                    <div className="col-lg-3 projectdivs">
                    <h3 className="text-center text-black font-weight-bold mt-5 projectnames">See More on My practices</h3>
                    <h1 className="text-center text-white font-weight-bold "> 
                        <Grid item xs={1}>
                        <a className="iconlinkproject" href="https://github.com/jeevanantham0504"><GitHubIcon className="projecticon" /></a>
                            </Grid>
                        </h1>
                    </div>
                    </div>
                
            </div>
            <div className="col-lg-2 lastdivproject">
                <Menu/>
            </div>

        </div>
    
        </>
    );
}
export default Project