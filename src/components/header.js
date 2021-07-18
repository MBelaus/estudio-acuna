import React from 'react';
import './header.css';
import logo from '../logo2.png';
import FullNavbar from './navbar-full';
import MobileNavbar from './navbar-mobile';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
        <div className="container-fluid">
          <div className="row row-contacto">
            <div className="col-lg-12">
              <div className="col-lg-4 datos">
                <ul className="datos-contacto">
                  <li>
                    <i className="fas fa-map-marker-alt fa-lg header-icon"></i>{' '}
                    <a href="https://www.google.com/maps/place/Acu%C3%B1a+Estudio+Jur%C3%ADdico+Integral/@-31.4243694,-64.200093,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a348be27d627:0xa9904094ed00176f!8m2!3d-31.4243694!4d-64.1979043" target="_blank" rel="noopener noreferrer">
                      Av. Pueyrredón 724. Torre 3 Piso 15 Dpto "D"
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-phone fa-lg header-icon"></i>
                    <a href="tel:3512308918">3512308918 - 3512071409</a>
                  </li>
                  <li>
                    <i className="fas fa-envelope fa-lg header-icon"></i>
                    <a href="mailto:estudiojuridicosva@gmail.com">estudiojuridicosva@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-12 d-flex justify-content-center" id="logo">
              <img src={logo} alt="logo" className="logo" />
            </div>
          </div>
        </div>

        <FullNavbar />
        <MobileNavbar />
      </React.Fragment>
    );
  }
}

export default Header;
