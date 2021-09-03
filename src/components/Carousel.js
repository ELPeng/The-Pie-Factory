import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import pieImg from '../img/photos/pie1.jpg'
import mainImg from '../img/photos/main.jpg'
import dessertImg from '../img/photos/assortCupcakes.jpeg'
import pastriesImg from '../img/photos/pastries.jpg'

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
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
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
                    src={dessertImg}
                    alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={pastriesImg}
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