import React from 'react'
import {Link} from 'react-router-dom'
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
            <div className="top-bar">
                <a href="javascript:void(0);" className="menu-icon" onClick={handleClick}>
                    <div className="menu-icon-part"></div>
                    <div className="menu-icon-part"></div>
                    <div className="menu-icon-part"></div>
                </a>
                <span>The Pie Factory</span>
            </div>          
            <div className="topnav" id="myTopnav">

                <Link className='nav-link-button' to='/'>
                    <span>Home</span>
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


            </div>








            {/* <div className="top-bar">
                <span>Orders must be placed by 12 o'clock noon the day prior to the scheduled delivery date</span>
            </div> 
            <nav>
                <a href="javascript:void(0);" className="menu-icon">
                    <div className="menu-icon-part"></div>
                    <div className="menu-icon-part"></div>
                    <div className="menu-icon-part"></div>
                </a>
                <h2 className='navbar-mobile-title'>The Pie Factory</h2>
                <ul className="nav-links">
                    <Link className='nav-link-style' to='/'>
                        <li>Home</li>
                    </Link>
                    <Link className='nav-link-style' to='/products'>
                        <li>Products</li>
                    </Link>
                    <Link className='nav-link-style' to='/gallery'>
                        <li>Gallery</li>
                    </Link>
                    <Link className='nav-link-style' to='/about'>
                        <li>About Us</li>
                    </Link>
                    <Link className='nav-link-style' to='/faqs'>
                        <li>FAQs</li>
                    </Link>
                </ul>

            </nav> */}
        </>
    )
}


export default Nav