import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/perro.css";
import perro from "../assets/perroperro.svg";

function Perro() {
  return (
    <div>
      <div class="grid__total texto__grande">
        <div class="grid__1">
          <p class="text-center">
            {" "}
            En Santuario Animal hace más de 30 años nos dedicamos a{" "}
            <span class="texto__rosa">rescatar, rehabilitar y reubicar</span> a
            todos los animales que podamos que necesiten nuestra ayuda.
          </p>
        </div>
        <div class="grid__2">
          <p class="text-center">
            {" "}
            Ofrecemos{" "}
            <span class="texto__rosa">
              seguridad y cuidado hasta que podamos encontrar nuevas familias
            </span>{" "}
            que los amen, o pueden vivir sus vidas con nosotros en nuestra aldea
            de jubilados si eso es lo que les conviene.
          </p>
          <p class="text-center">
            <b>
              Hasta que llegue ese día estaremos aquí, sirviendo a los animales
              y personas de nuestra comunidad.
            </b>
          </p>
        </div>
        <div class="grid__3">
          <div class="d-grid  col-10 mx-auto">
            <button class="btn boton" type="button">
              SOBRE NOSOTROS
            </button>
          </div>
        </div>
        <div class="tamaño-img grid__4">
          <img src={perro} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Perro;
