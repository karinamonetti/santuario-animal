import React from "react";
import "../styles/footer.css";
import instagramImg from "../assets/instagram.svg";
import twitterImg from "../assets/twitter.svg";
import youtubeImg from "../assets/youtube.svg";
import facebookImg from "../assets/facebook.svg";

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
                <img className="icon-size" src={facebookImg} alt="" />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-2">
                <img className="icon-size" src={instagramImg} alt="" />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-2">
                <img className="icon-size" src={twitterImg} alt="" />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-2">
                <button
                  target="_blank"
                  href="https://developer.mozilla.org/es/docs/Web/HTML/Element/a"
                >
                  <img className="icon-size" src={youtubeImg} alt="" />
                </button>
              </div>
            </div>
          </div>
          {/* <!---- ---Redes fin --------> */}

          {/* <!-- -- ---Satuario animal --------> */}
          <div className="col-xl-4 col-lg-4   arreglo">
            <h2 className="chico">SANTUARIO ANIMAL</h2>
            <ul>
              <li>
                <button className="button-footer-style" href="">
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button href=""> Adopciones</button>
              </li>
              <li>
                <button href="">Cómo colaborar</button>
              </li>
              <li>
                <button href=""> Tienda</button>
              </li>
              <li>
                <button href=""> Contacto</button>
              </li>
            </ul>
          </div>
          {/* <!---- ---Santuario animal fin ------ --> */}

          {/* <!---- ---Donar --------> */}
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-2 col-4  Donar ">
            <button href="" className="botoon">
              Donar
            </button>
          </div>
          {/* <!---- ---Donar fin --------> */}
        </div>
        <div className="row">
          <div className="col-12">
            <p>
              Copyright © 2022 Santuario Animal | Realizado con mucho por los
              alumnos de Fundación Pescar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
