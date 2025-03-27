// src/components/Carousel.js
import React from 'react';

const Carousel = () => {
  return (
    <section id="carrusel">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <figure>
              <img src="/assets/fotos/dog-1.png" className="d-block w-100" alt="Perro 1" />
              <div className="capaCarousel">
                <div className="carousel-caption d-none d-md-block">
                  <h3 className="h3Carousel">Trabajamos para el cuidado y protección de nuestros animales.</h3>
                </div>
              </div>
            </figure>
          </div>
          <div className="carousel-item">
            <figure>
              <img src="/assets/fotos/dog-2.png" className="d-block w-100" alt="Perro 2" />
              <div className="capaCarousel">
                <div className="carousel-caption d-none d-md-block">
                  <h3 className="h3Carousel">Trabajamos para el cuidado y protección de nuestros animales.</h3>
                </div>
              </div>
            </figure>
          </div>
          <div className="carousel-item">
            <figure>
              <img src="/assets/fotos/cat-1.png" className="d-block w-100" alt="Gato 1" />
              <div className="capaCarousel">
                <div className="carousel-caption d-none d-md-block">
                  <h3 className="h3Carousel">Trabajamos para el cuidado y protección de nuestros animales.</h3>
                </div>
              </div>
            </figure>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
