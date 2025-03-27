// src/components/Donation.jsx
import React from 'react';

const Donation = () => {
  return (
        <section className="fondo-donacion" id="fdonacion">
        <div className="contenedor-donacion">
          <div className="contenedor-img-donacion">
          <img src="/assets/fotos-perros/perro555.jpg" alt="Animales" style={{ width: '200px' }} />
            {/* <img className="img-donacion" src="/assets/fotos/Group 4.png" alt="Animales" /> */}
          </div>

          <div className="contenedor-texto">
            <p className="texto-donacion">
              Nuestro Refugio no recibe fondos del gobierno ni de ninguna entidad estatal. Para poder ayudar a nuestros animales confiamos en la generosidad de personas como vos.
            </p>

            <p className="texto-donacion">
              Poder financiar el Refugio animal conlleva muchos gastos: veterinarios, alimentos, medicamentos, traslados y facturas de calefacción para todos nuestros animales, algunos de los cuales estarán con nosotros por el resto de sus vidas.
            </p>

            <p className="texto-donacion">
              También todo lo recaudado en la tienda de productos será 100% destinado al refugio y sus habitantes.
            </p>

            <p className="texto-donacion">Cada donación cuenta.</p>

            <div className="contenedor-boton">
              <button className="submit-btn"> Realiza una donación </button>
            </div>

            {/* <div className="contenedor-boton">
              <button className="boton-donacion">REALIZAR UNA DONACIÓN</button>
            </div> */}
          </div>
        </div>
      </section>

  );
};

export default Donation;
