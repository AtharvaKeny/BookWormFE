import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export function CarouselFadeExample() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel fade activeIndex={index} onSelect={handleSelect} interval={5000}>
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
                    alt='Second slide'
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={"Images/Slideshow/ebook8.jpg"}
                    alt='Third slide'
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={"Images/Slideshow/ebook9.jpg"}
                    alt='Fourth slide'
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
