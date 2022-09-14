import React from "react";
import LogoDesktop from "../assets/logo-desktop.png";

function Header() {
  return (
    <nav className="navbar navbar-light navbar-expand-sm bg-light fixed-top">
      <div className="container-fluid">
        <button className="navbar-brand" href="#">
          <img
            className="logo-style"
            src={LogoDesktop}
            alt="Logo Santuario Animal"
          />
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end w-75 fond-style"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Hi
            </h5>
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
                <button
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  <span className="text-style">HOME</span>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" href="#">
                  <span className="text-style">SOBRE NOSOTROS</span>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" href="#">
                  <span className="text-style">ADOPCIONES</span>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" href="#">
                  <span className="text-style">CÓMO COLABORAR</span>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" href="#">
                  <span className="text-style">TIENDA</span>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" href="#">
                  <span className="text-style">CONTACTO</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
