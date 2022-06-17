import { Carousel } from "react-bootstrap";
import image from '../Images/1.png'
import image2 from '../Images/2.jpg'
import image3 from '../Images/3.jpg'


export default function ControlledCarousel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}