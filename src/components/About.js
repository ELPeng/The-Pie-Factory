function About(){
    return(
        <>
            <div className="page-banner">
                <h2>About Us</h2>
            </div>
            <div className="main-page">
                <p className="page-text">The Pie Factory has proudly served the Houston community through two generations for over 40 years. From our kitchen to yours, we create wonderful pies, tasty cakes, and much more. Each is hand-made to order from the freshest ingredients and baked to perfection.</p>
                <p className="page-text">We are known for the quality of products and reasonable prices. We deliver wholesale with dependable, on-time delivery and the flexibility to handle short-lead requests.</p>
                <p className="page-text"> All of our special occasion cakes are custom creations, so if you have something special in mind, just let us know. We will do our best to produce something that satisfy you!</p>
                <h3>Our Location</h3>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6931.281910632802!2d-95.48788405027074!3d29.701187596989087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c227337b7551%3A0x35d3850c87d621cf!2sPie%20Factory!5e0!3m2!1sen!2sus!4v1622098062864!5m2!1sen!2sus" 
                    loading="lazy"
                    id="map">     
                </iframe>
            </div>
        </>
    )
}


export default About