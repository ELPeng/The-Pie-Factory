import React from 'react'
import {Link} from 'react-router-dom'
import logo2 from '../img/Pie Factory Logos CMYK/Two Color CMYK/Two Color Logo.png';
import Image from 'react-bootstrap/Image'


function Nav(){
    const handleClick = () =>  {
        const navbar = document.getElementById("myTopnav");
        if (navbar.className === "topnav") {
          navbar.className += " responsive";
        } else {
          navbar.className = "topnav";
        }
      }
    return(
        <>  
            {/* <div className="top-bar">
                <a href="javascript:void(0);" className="menu-icon" onClick={handleClick}>
                    <div className="menu-icon-part"></div>
                    <div className="menu-icon-part"></div>
                    <div className="menu-icon-part"></div>
                </a>
                <span>The Pie Factory</span>
            </div>          
            <div className="topnav" id="myTopnav">
                <Link className='nav-link-button' to='/'>
                    <img src={logo2} width='300'/>
                </Link>
                <Link className='nav-link-button' to='/products'>
                    <span>Products</span>
                </Link>
                <Link className='nav-link-button' to='/gallery'>
                    <span>Gallery</span>
                </Link>
                <Link className='nav-link-button' to='/about'>
                    <span>About Us</span>
                </Link>
                <Link className='nav-link-button' to='/faqs'>
                    <span>FAQs</span>
                </Link>

            </div> */}

            <div className="top-bar">
                <a href="javascript:void(0);" className="menu-icon" onClick={handleClick}>
                    <div className="menu-icon-part"></div>
                    <div className="menu-icon-part"></div>
                    <div className="menu-icon-part"></div>
                </a>
                <span>The Pie Factory</span>
            </div>          
            <div className="topnav" id="myTopnav">
                <div className="nav-flex-container">
                    <div className='nav-flex-left'>
                        <Link className='nav-link-button' to='/'>
                            <img src={logo2} width='300'/>
                        </Link>
                    </div>
                    <div className='nav-flex-right'>
                        <div className='nav-flex-right_top'>
                            <span className='call-text'>Call Now to Order : </span>
                            <span>713.666.8501</span>
                        </div>
                        <div className='nav-flex-right_bot'>
                            <Link className='nav-link-button' to='/products'>
                                <span>Products</span>
                            </Link>
                            <Link className='nav-link-button' to='/gallery'>
                                <span>Gallery</span>
                            </Link>
                            <Link className='nav-link-button' to='/about'>
                                <span>About Us</span>
                            </Link>
                            <Link className='nav-link-button' to='/faqs'>
                                <span>FAQs</span>
                            </Link>
                        </div>
                    </div>
                </div>




                

            </div>





        </>
    )
}


export default Nav