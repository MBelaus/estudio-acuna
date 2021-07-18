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
              {/* <div className="col-lg-1"></div> */}
              <div className="col-xl-4 col-lg-12 d-xl-block d-lg-flex d-md-flex justify-content-center">
                <Link to="/">
                  <img src={logo_side} alt="" id="logo-nav" />
                </Link>
              </div>
              <div className="col-xl-8 col-lg-12 nav-full">
                <ul className="nav-full">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <li className="hvr-underline-from-center">Estudio Jurídico</li>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <li className="hvr-underline-from-center">Abogados</li>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <li className="hvr-underline-from-center">Especialidades</li>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <li className="hvr-underline-from-center">Contacto</li>
                  </a>

                  <li class="dropdown hvr-underline-from-center">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Otros
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="#">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Prensa
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Noticias
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="hvr-underline-from-center">Blog</li>
                <li className="hvr-underline-from-center">Prensa</li>
                <li className="hvr-underline-from-center">Noticias</li> */}
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
