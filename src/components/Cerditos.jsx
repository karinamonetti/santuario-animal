import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/cerditos.css";
import corazones from "../assets/corazones amarillos.png";
import group from "../assets/Group 4.png";
import vector from "../assets/Vector.png";
import linea from "../assets/12 1.png";

function Cerditos() {
  return (
    <section class="donacion" id="comoColaborar">
      <div class="container">
        <div class="donacionGrupoUno">
          <div>
            <img src={corazones} alt="" id="imgUno" />
          </div>
          <div>
            <img src={group} alt="" id="imgDos" />
          </div>
          <div>
            <img src={vector} alt="" id="imgTres" />
          </div>
        </div>{" "}
      </div>
      <div class="donacionGrupoDos">
        <p>
          Nuestro Santuario no recibe fondos del gobierno ni de ninguna entidad
          estatal. Para poder ayudar a nuestros animales confiamos en la
          generosidad de personas como vos. Poder financiar el Santuario
          conlleva muchos gastos... veterinarios, alimentos, medicamentos,
          traslados y facturas de calefacción para todos nuestros animales,
          algunos de los cuales estarán con nosotros por el resto de sus vidas.
          Cada donación cuenta, por pequeña que sea.
        </p>
        <div>
          <img src={linea} alt="" />
        </div>
        <button>
          <button href="#" id="textoButton">
            Realiza una donación
          </button>
        </button>
      </div>
    </section>
  );
}
export default Cerditos;
