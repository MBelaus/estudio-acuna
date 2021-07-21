import React from 'react';
import logo_side from '../svg-services/logo_side.svg';
import './nabvar-full.css';
import { Link } from 'react-router-dom';

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
    window.removeEventListener('scroll');
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

    if (window.pageYOffset == 0) {
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
                <Link to="/">
                  <img src={logo_side} alt="" className={this.state.logo ? 'logo-nav' : 'sticky-logo'} />
                </Link>
              </div>
              <div className="col-xl-8 col-lg-12 nav-full">
                <ul className="nav-full">
                  <li className="hvr-underline-from-center" id="estudio-page-link">
                    Estudio Jurídico
                  </li>

                  <li className="hvr-underline-from-center">Abogados</li>

                  <li className="hvr-underline-from-center">Especialidades</li>

                  <Link to="/contacto">
                    <li className="hvr-underline-from-center">Contacto</li>
                  </Link>

                  <li className="dropdown hvr-underline-from-center">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Otros
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link to="/blog">
                        <li className="dropdown-item">Blog</li>
                      </Link>
                      <li className="dropdown-item">Prensa</li>
                      <li className="dropdown-item">Noticias</li>
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
