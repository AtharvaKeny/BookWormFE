import React from "react";
import Carousel from "react-bootstrap/Carousel";

export function CarouselFadeExample() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={"Images/Slideshow/1img.jpg"}
                    alt='First slide'
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={"Images/Slideshow/book7.jpg"}
                    alt='First slide'
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={"Images/Slideshow/ebook8.jpg"}
                    alt='First slide'
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={"Images/Slideshow/ebook9.jpg"}
                    alt='First slide'
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}