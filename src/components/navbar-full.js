import React from 'react';
import logo_side from '../logo-side.png';
import './nabvar-full.css';
import { Link } from 'react-router-dom';

class FullNavbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid" id="full-navbar">
          <div className="container">
            <div className="row align-items-center flex-wrap">
              <div className="col-xl-4 col-lg-12 d-xl-block d-lg-flex d-md-flex justify-content-center">
                <Link to="/">
                  <img src={logo_side} alt="" id="logo-nav" />
                </Link>
              </div>
              <div className="col-xl-8 col-lg-12 nav-full">
                <ul className="nav-full">
                  <li className="hvr-underline-from-center" id="estudio-page-link">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      Estudio Jurídico
                    </a>
                  </li>

                  <li className="hvr-underline-from-center">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      Abogados
                    </a>
                  </li>

                  <li className="hvr-underline-from-center">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      Especialidades
                    </a>
                  </li>

                  <li className="hvr-underline-from-center">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      Contacto
                    </a>
                  </li>

                  <li className="dropdown hvr-underline-from-center">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Otros
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a className="dropdown-item" href="#">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Prensa
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Noticias
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FullNavbar;
