// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-light navbar-expand-sm bg-light fixed-top">
        <div className="container-fluid">
          <button className="navbar-brand" style={{ border: 'none', background: 'none' }}>
            <img className="logo-style" src="/assets/logo/Capa 1.png" alt="Logo Santuario Animal" />
          </button>

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end w-75 fond-style" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav h-100 d-flex-wrow justify-content-around flex-grow-1 pe-3 menu-style">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/index.html">
                    <span className="text-style">HOME</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#sobre-nosotros">
                    <span className="text-style">SOBRE NOSOTROS</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/src/pages/adopciones.hmtl"><span class="text-style">ADOPCIONES</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#fdonacion">
                    <span className="text-style">CÓMO COLABORAR</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/src/pages/tienda.html"><span class="text-style">TIENDA</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact" id="contactbox">
                    <span className="text-style">CONTACTO</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
