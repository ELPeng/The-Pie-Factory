import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import pieImg from '../img/photos/pie1.jpg'
import mainImg from '../img/photos/main.jpg'
import dessertImg from '../img/photos/dessert1.jpg'
import pastriesImg from '../img/photos/pastries.jpg'

const Gallery = () => {
    return(
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                width='935'
                height='535'
                src={pieImg}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                width='935'
                height='535'
                src={mainImg}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={dessertImg}
                width='935'
                height='535'
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={pastriesImg}
                width='935'
                height='535'
                alt="Fourth slide"
                />

                <Carousel.Caption>
                <h3>Fourth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Gallery