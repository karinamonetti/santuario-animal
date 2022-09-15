import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/footer.css";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";

function Footer() {
  return (
    <footer>
      <div className="w-100 px-5 foto">
        {/* <!---- ---Redes  --------> */}
        <div className="row margen">
          <div className="col-xl-6 col-lg-6 col-md-9 col-sm-8 col-8 text-center  ">
            <h1 className="chico">¡SEGUINOS EN NUESTRAS REDES SOCIALES!</h1>
            <div className="row justify-content-center ">
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-2">
                <img className="icon-size" src={facebook} alt="" />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-2">
                <img className="icon-size" src={instagram} alt="" />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-2">
                <img className="icon-size" src={twitter} alt="" />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-2">
                <button
                  className="enlace_redes"
                  target="_blank"
                  href="https://developer.mozilla.org/es/docs/Web/HTML/Element/a"
                >
                  {" "}
                  <img className="icon-size" src={youtube} alt="" />{" "}
                </button>
              </div>
            </div>
          </div>
          {/* <!---- ---Redes fin --------> */}

          {/* Satuario animal  */}
          <div className="col-xl-4 col-lg-4   arreglo">
            <h2 className="chico">SANTUARIO ANIMAL</h2>
            <ul className="ul_container">
              <li className="li-footer">
                <button className="enlace_footer" href="">
                  {" "}
                  Sobre Nosotros
                </button>
              </li>
              <li className="li-footer">
                <button className="enlace_footer" href="">
                  {" "}
                  Adopciones
                </button>
              </li>
              <li className="li-footer">
                <button className="enlace_footer" href="">
                  Cómo colaborar
                </button>
              </li>
              <li className="li-footer">
                <button className="enlace_footer" href="">
                  {" "}
                  Tienda
                </button>
              </li>
              <li className="li-footer">
                <button className="enlace_footer" href="">
                  {" "}
                  Contacto
                </button>
              </li>
            </ul>
          </div>
          {/* <!---- ---Santuario animal fin ------ --> */}

          {/* /*Donar  */}

          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-2 col-4   text-center ">
            <button href="" className="botoon">
              {" "}
              Donar
            </button>
          </div>
          {/* /* Donar fin  */}
        </div>
      </div>
    </footer>
  );
}
export default Footer;
