import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/perro.css";
import perro from "../assets/perroperro.svg";

function Perro() {
  return (
    <div>
      <div className="grid__total texto__grande">
        <div className="grid__1">
          <p className="text-center">
            {" "}
            En Santuario Animal hace más de 30 años nos dedicamos a{" "}
            <span className="texto__rosa">
              rescatar, rehabilitar y reubicar
            </span>{" "}
            a todos los animales que podamos que necesiten nuestra ayuda.
          </p>
        </div>
        <div className="grid__2">
          <p className="text-center">
            {" "}
            Ofrecemos{" "}
            <span className="texto__rosa">
              seguridad y cuidado hasta que podamos encontrar nuevas familias
            </span>{" "}
            que los amen, o pueden vivir sus vidas con nosotros en nuestra aldea
            de jubilados si eso es lo que les conviene.
          </p>
          <p className="text-center">
            <b>
              Hasta que llegue ese día estaremos aquí, sirviendo a los animales
              y personas de nuestra comunidad.
            </b>
          </p>
        </div>
        <div className="grid__3">
          <div className="d-grid  col-10 mx-auto">
            <button className="btn boton" type="button">
              SOBRE NOSOTROS
            </button>
          </div>
        </div>
        <div className="tamaño-img grid__4">
          <img src={perro} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Perro;
