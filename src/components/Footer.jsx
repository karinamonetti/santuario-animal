// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="w-100 px-5 foto">
                <div className="row margen">
                    <div className="col-xl-6 col-lg-6 col-md-9 col-sm-8 col-8 text-center">
                        <h1 className="chico">¡SEGUINOS EN NUESTRAS REDES SOCIALES!</h1>
                        <div className="row justify-content-center">
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-2">
                                <img className="icon-size"src="/assets/facebook.svg"   alt="Logo icono facebook"/>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-2">
                                <img className="icon-size"  src="/assets/instagram.svg" alt="Logo icono instagram" />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-2">
                                <img className="icon-size" src="/assets/twitter.svg"  alt="Logo icono twitter"/>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-2">
                                <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/es/docs/Web/HTML/Element/a"   >
                                    <img className="icon-size" src="/assets/youtube.svg" alt="Web Accessibility Initiative" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 arreglo">
                        <h2 className="chico">REFUGIO ANIMAL</h2>
                        <ul className="contenedor_lista">
                            <li className="lista">
                                <a href="/frontend/src/pages/sobrenosotros.html" className="item"> Sobre Nosotros </a>
                            </li>
                            <li className="lista">
                                <a href="/frontend/src/pages/adopciones.html" className="item">
                                    Adopciones
                                </a>
                            </li>
                            <li className="lista">
                                <a href="/frontend/src/pages/" className="item">
                                    Cómo colaborar
                                </a>
                            </li>
                            <li className="lista">
                                <a href="/frontend/src/pages/tienda.html" className="item">
                                    Tienda
                                </a>
                            </li>
                            <li className="lista">
                                <a href="/frontend/src/pages/contacto.html" className="item">Contacto</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-2 col-4 Donar">
                        <a href="#" className="botoon"> Donar </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
