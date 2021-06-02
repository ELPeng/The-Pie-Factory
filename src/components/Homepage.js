import React from 'react'
import pieImg from '../img/photos/pie1.jpg'
import mainImg from '../img/photos/main.jpg'
import storeImg from '../img/photos/storefront.png'
import logo2 from '../img/Pie Factory Logos CMYK/Two Color CMYK/Two Color Logo.png';
import Carousel from './Carousel.js'
import Image from 'react-bootstrap/Image'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function Homepage(){
    const titleStyle = {
        fontSize: 48,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50
    }
    const homeStyle = {
        fontSize: 24,
        marginTop: 20,
        marginBottom: 40
    }

    return(
        <div className='home-container'>  
            <img src={logo2} 
                display='block'
                margin='auto'/>
            <div className='top-container'>
                {/* <h2 style={titleStyle}>Welcome to The Pie Factory!</h2> */}
                <p style={homeStyle}>The Pie Factory is a full service bakery making savory pies, cakes, pastries, cookies, and a full line of specialty dessert cakes, as well as wedding cakes, birthday cakes, and cakes for all occasions. We also design custom images on cakes and cookies. Through all of these edible delights, we believe we are making memories which will stay with you forever.</p>
            </div>
            <div className='grid-container'>
                <div className='grid-item grid-item-main'>
                    <Carousel />
                </div>
                <div className='grid-item grid-item-products'><img src={pieImg} width="465" height="405"/></div>
                <div className='grid-item grid-item-orders' ><img src={storeImg} width="465" height="200"/></div>
                <div className='grid-item grid-item-aboutus' ><img src={storeImg} width="465" height="200"/></div>

            </div>
        </div>
        
    )
}


export default Homepage