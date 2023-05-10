import React from "react";
import './menu.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Style } from "@mui/icons-material";
function Menu(){
   
    
    return(
        <>
         <div className='float-right  menudiv'>
        <Link to='/' className="aboutlinkmain"><div onClick={()=>{}} id="btndiv" className="icondivs shadow"><FontAwesomeIcon className="iconmenu  p-3 text-center" icon={faHouse} /></div></Link>
        <Link to='/Aboutme'><div className="icondivs shadow"><FontAwesomeIcon className="iconmenu  p-3 text-center" icon={faUser} /></div></Link>
        <Link to='/Projects'><div className="icondivs shadow"><FontAwesomeIcon className="iconmenu  p-3 text-center" icon={faBagShopping} /></div></Link>
        <Link to='/certificates'><div className="icondivs shadow"><FontAwesomeIcon className="iconmenu  p-3 text-center" icon={faNewspaper} /></div></Link>
        <Link to='/Contact'><div className="icondivs shadow"><FontAwesomeIcon className="iconmenu  p-3 text-center" icon={faEnvelope} /></div></Link>
        
        </div> 
        </>
    );
}
export default Menu