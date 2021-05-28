import React from 'react'
import pieImg from '../img/photos/pie1.jpg'
import dessertImg from '../img/photos/dessert1.jpg'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function Homepage(){
    const titleStyle = {
        fontSize: 60
    }
    const homeStyle = {
        fontSize: 24,
        marginLeft: 40,
        marginRight: 40,
    }
    const pieStyle = {
        backgroundImage: `url(${pieImg})`
    }
    const dessertStyle = {
        backgroundImage: `url(${dessertImg})`
    }
    return(
        <div>
            <div className='top-container'>
                <h2 style={titleStyle}>Welcome to The Pie Factory!</h2>
                <p style={homeStyle}>The Pie Factory is a full service bakery making savory pies, cakes, pastries, cookies, and a full line of specialty dessert cakes, as well as wedding cakes, birthday cakes, and cakes for all occasions. We also design custom images on cakes and cookies. Through all of these edible delights, we believe we are making memories which will stay with you forever.</p>
            </div>
            <div className='mid-container'>
                <div className='pie-container mid-column' style={pieStyle}>   
                    <h4>Pies</h4>                 
                </div>
                <div className='dessert-container mid-column' style={dessertStyle}>
                   <h4>Desserts</h4> 
                </div>
            </div>
        </div>
        
    )
}


export default Homepage