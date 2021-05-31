import React from 'react'
import logo from '../img/The Pie Factory Icon Elements/SVG/Pie.svg';
import Map from './Map'

function About(){

    return(
        <div className="about-main">
            <h2 className="page-title">About Us</h2>
            <p>The Pie Factory has proudly served the Houston community through two generations for over 40 years. From our kitchen to yours, we create wonderful pies, tasty cakes, and much more. Each is hand-made to order from the freshest ingredients and baked to perfection.</p>
            <p>We are known for the quality of products and reasonable prices. We deliver wholesale with dependable, on-time delivery and the flexibility to handle short-lead requests.</p>
            <p>All of our special occasion cakes are custom creations, so if you have something special in mind, just let us know. We will do our best to produce something that satisfy you!</p>
            <Map />
        </div>
    )
}


export default About