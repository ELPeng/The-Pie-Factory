import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import pieImg from '../img/photos/pecan.jpg'
import mainImg from '../img/photos/main.jpg'
import dessertImg from '../img/photos/tarts.jpg'
import pastriesImg from '../img/photos/cakeslice1.jpg'

const Gallery = () => {
    return(
        <Carousel fade
            nextLabel={null}
            prevLabel={null}
            indicators={true}>
            <Carousel.Item>
                <img
                    src={pieImg}
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={mainImg}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img               
                    src={pastriesImg}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={dessertImg}
                    alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Gallery