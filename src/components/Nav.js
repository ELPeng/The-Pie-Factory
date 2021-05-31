import React from 'react'
import {Link} from 'react-router-dom'
import logo1 from '../img/The Pie Factory Icon Elements/SVG/Pie.svg';
import logo2 from '../img/Pie Factory Logos CMYK/Two Color CMYK/Two Color CMYKVector.svg';
import logo3 from '../img/Pie Factory Logos CMYK/One Color CMYK/One Color CMYKPNG.png';


function Nav(){
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    return(
        <>      
            <div className="top-bar">
                <span className="top-bar">Orders must be placed by 12 o'clock noon the day prior to the scheduled delivery date</span>
            </div> 
            <nav>
                <ul className="nav-links">
                    <Link style={navStyle} to='/products'>
                        <li>Products</li>
                    </Link>
                    <Link style={navStyle} to='/gallery'>
                        <li>Gallery</li>
                    </Link>
                    <Link to='/'>
                        <img src={logo3} width={500} />
                    </Link>
                    <Link style={navStyle} to='/about'>
                        <li>About Us</li>
                    </Link>
                    <Link style={navStyle} to='/faqs'>
                        <li>FAQs</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}


export default Nav