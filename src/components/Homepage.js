import React from 'react'
import pieImg from '../img/photos/pie1.jpg'
import storeImg from '../img/photos/storefront.png'
import Carousel from './Carousel.js'
import {Link} from 'react-router-dom'
function Homepage(){
    return(
        <div className='home-container'>  
            <div className='grid-container'>
                <div className='grid-item grid-item-main'>
                    <Carousel />
                </div>    
                <div className='grid-item grid-item-m grid-item-products'>
                    <Link to='/products'>
                        <img src={pieImg} />    
                        <span className="grid-item-text">Products</span>
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
                        <div className = "item-test">
                        <span>FAQs</span>
                        </div>
                    </Link>
                </div>

                
            </div>
        </div>
        
    )
}


export default Homepage