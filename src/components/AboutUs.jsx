// src/components/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <section id="sobre-nosotros">
      <div className="titulo-sobre-nosotros">
        <h1>SOBRE NOSOTROS</h1>
      </div>

      <div className="contendor-sobre-nosotros">
        <div className="contenedor-texto">
          <p className="texto-nosotros">
            En el Refugio Animal hace más de 30 años nos dedicamos a{' '}
            <span className="texto-rosita">rescatar, rehabilitar y reubicar</span> a todos los animales que
            podamos, que necesiten nuestra ayuda.
          </p>

          <div className="contenedor-img-perro-mov">
            <img
              className="img-perro-movil"
              src="/assets/fotos/perroperro.svg"
              alt="Perro"
            />
          </div>

          <p className="texto-nosotros">
            Ofrecemos{' '}
            <span className="texto-rosita">
              seguridad y cuidado hasta que podamos encontrar nuevas familias
            </span>{' '}
            que los amen, o pueden vivir sus vidas con nosotros en nuestra aldea de jubilados si eso es lo que les conviene.
          </p>

          <p className="texto-nosotros">
            <span className="texto-negrita">
              Hasta que llegue ese día estaremos aquí, sirviendo a los animales y personas de nuestra comunidad.
            </span>
          </p>
        </div>

        <div className="contenedor-img">
          <img
            className="img-perro"
            src="/assets/fotos/perroperro.svg"
            alt="Perro"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
