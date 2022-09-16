import Carousel from "react-bootstrap/Carousel";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide11 from "../assets/slide1.1.jpg";
import "../styles/carouselsantuario.css";

function Carouselsantuario() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 img-size-carousel"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="h3-carousel-text">
            En el Santuario Animal trabajamos para el cuidado y protección de
            nuestros más de 350 animales
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="img-cover">
        <img
          className="d-block w-100 img-size-carousel"
          src={slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="h3-carousel-text">
            En el Santuario Animal trabajamos para el cuidado y protección de
            nuestros más de 350 animales
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-size-carousel"
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="h3-carousel-text">
            En el Santuario Animal trabajamos para el cuidado y protección de
            nuestros más de 350 animales
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselsantuario;
