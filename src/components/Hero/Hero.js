import { Carousel } from "react-bootstrap"
import "./Hero.css"

const Hero = () => {
  return (
    <Carousel className="app__hero-content">
      <Carousel.Item >
        <img src={require('../../assets/images/progress1.jpg')} alt="1" text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={require('../../assets/images/progress2.jpg')} alt="2" text="Second slide" />
      </Carousel.Item>
      <Carousel.Item >
        <img src={require('../../assets/images/progress3.jpg')} alt="3" text="Third slide" />
      </Carousel.Item>
    </Carousel>
  )
}

export default Hero