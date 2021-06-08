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
        <div className="container-fluid header nopadding">
          <div className="row datos-contato">
            <div className="col-lg-12">
              <div className="col-lg-4 datos">
                <ul className="datos-contato">
                  <li>
                    <i className="fas fa-map-marker-alt fa-lg"></i>
                    Av. Pueyrredón 724. Torre 3 Piso 15 Dpto "D"
                  </li>
                  <li>
                    <i className="fas fa-phone fa-lg"></i>
                    3512308918 - 3512071409
                  </li>
                  <li>
                    <i className="fas fa-envelope fa-lg"></i>estudiojuridicosva@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-12 d-flex justify-content-center" id="logo">
              <img src={logo} alt="as" className="logo" />
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
