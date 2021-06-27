import React from 'react'
import footerImg1 from '../img/The Pie Factory Icon Elements/SVG/Family Owned Pie.svg'
import footerImg2 from '../img/The Pie Factory Icon Elements/SVG/Family Owned Texas.svg'
import footerImg3 from '../img/The Pie Factory Icon Elements/SVG/Fresh Daily.svg'

function Footer(){
    const hrStyle = {
        height: 4,
        background: '#967a3d'
    }
    return(
        <footer>
            <br />
            <hr style={hrStyle}/> 
            <div className="footer-main">
                <div className="footer-col">
                    <img 
                        src={footerImg1} 
                        width="170"
                        className="footer-img"
                     />
                </div>
                <div className="footer-col">
                    <ul>
                        <li className="footer-title">THE PIE FACTORY</li>
                        <li>5611 Bellaire Blvd. Suite 128</li>
                        <li>Houston, TX 77081</li>
                        <li>(713) 666-8501</li>
                    </ul>                 
                </div>
                <div className="footer-col">
                    <img 
                        src={footerImg2} 
                        width="170"
                        className="footer-img"
                     />
                </div>
                <div className="footer-col">
                    <ul>
                        <li className="footer-title">HOURS</li>
                        <li>Mon thru Fri 8:00am - 5:00pm</li>
                        <li>Saturday 9:00am - 2:00pm</li>
                        <li>Sunday Closed</li>
                    </ul> 
                </div>
                <div className="footer-col">
                    <img 
                        src={footerImg3} 
                        width="170"
                        className="footer-img"
                     />
                </div>
            </div>
        </footer>
    )
}

export default Footer