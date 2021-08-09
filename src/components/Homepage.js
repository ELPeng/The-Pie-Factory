import React from 'react'
import pieImg from '../img/photos/applepie.jpg'
import storeImg from '../img/photos/houston.jpg'
import Carousel from './Carousel.js'
import {Link} from 'react-router-dom'
function Homepage(){
    return(
        <div className='home-container'>  
            <div className='grid-container'>
                <div className='grid-item-main'>
                    <Carousel />
                </div>    
                <div className='grid-item grid-item-m grid-item-products'>
                    <Link to='/products'>
                        <img src={pieImg} />    
                        <div className="grid-item-text">Products</div>
                    </Link>
                </div>
                <div className='grid-item grid-item-s grid-item-about'>
                    <Link to='/about'>
                        <img src={storeImg} />
                            <span className="grid-item-text">About Us</span>
 
                    </Link>
                </div>
                <div className='grid-item grid-item-s grid-item-faqs'>
                    <Link to='/faqs'>
                            <span className="grid-item-text">FAQs</span>
                    </Link>
                </div>

                
            </div>
        </div>
        
    )
}


export default Homepage