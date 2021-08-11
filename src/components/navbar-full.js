import React from 'react';
import logo_side from '../svg-services/logo_side.svg';
import './nabvar-full.css';
import { NavLink, Link } from 'react-router-dom';

class FullNavbar extends React.Component {
  listener = null;
  state = {
    nav: false,
    logo: true,
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    if (window.pageYOffset > 10) {
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }

    if (window.pageYOffset === 0) {
      if (!this.state.logo) {
        this.setState({ logo: true });
      }
    } else {
      if (this.state.logo) {
        this.setState({ logo: false });
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className={` container-fluid ${this.state.nav && 'sticky'}`} id="full-navbar">
          <div className="container">
            <div className="row align-items-center flex-wrap">
              <div className="col-xl-4 col-lg-12 d-xl-block d-lg-flex d-md-flex justify-content-center">
                <NavLink exact to="/">
                  <img src={logo_side} alt="" className={this.state.logo ? 'logo-nav' : 'sticky-logo'} />
                </NavLink>
              </div>
              <div className="col-xl-8 col-lg-12 nav-full">
                <ul className="nav-full">
                  <Link to="estudio-juridico">
                    <li className="hvr-underline-from-center principal" id="estudio-page-link">
                      <NavLink activeClassName="current" to="/estudio-juridico">
                        Estudio Jurídico
                      </NavLink>
                    </li>
                  </Link>

                  <Link to="/abogados">
                    <li className="hvr-underline-from-center principal">
                      <NavLink activeClassName="current" to="/abogados">
                        Abogados
                      </NavLink>
                    </li>
                  </Link>

                  <li className="hvr-underline-from-center principal">Especialidades</li>

                  <Link to="/contacto">
                    <li className="hvr-underline-from-center principal">
                      <NavLink activeClassName="current" to="/contacto">
                        Contacto
                      </NavLink>
                    </li>
                  </Link>

                  <li className="dropdown hvr-underline-from-center principal">
                    <button className="nav-link dropdown-toggle button-toggle" href="#" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                      <NavLink activeClassName="current" to="/blog">
                        Otros
                      </NavLink>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link to="/blog">
                        <li className="dropdown-item secundario">Blog</li>
                      </Link>

                      <li className="dropdown-item secundario">Prensa</li>
                      <li className="dropdown-item secundario">Novedades</li>
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
