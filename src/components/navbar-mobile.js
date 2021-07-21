import React from 'react';
import { Link } from 'react-router-dom';
import './navbar-mobile.css';
import logo_mobile from '../svg-services/logo_mobile.svg';

class MobileNavbar extends React.Component {
  state = {
    activeMenu: '',
    activeNav: '',
    activeMenuBg: '',
  };

  toggleClass = () => {
    const currentStateMenu = this.state.activeMenu;
    const currentStateNav = this.state.activeNav;
    const currentStateMenuBg = this.state.activeMenuBg;
    this.setState({
      activeMenu: !currentStateMenu,
      activeNav: !currentStateNav,
      activeMenuBg: !currentStateMenuBg,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-12 d-flex justify-content-center" id="logo">
              <Link to="/">
                <img src={logo_mobile} alt="logo" onClick={this.toggleClass} className="logo" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12" id="mobile-navbar">
            <div id="menu-bar">
              <div id="menu" onClick={this.toggleClass} className={this.state.activeMenu ? 'change' : null}>
                <div id="bar1" className="bar"></div>
                <div id="bar2" className="bar"></div>
                <div id="bar3" className="bar"></div>
              </div>
              <ul className={`nav ${this.state.activeNav ? 'change' : null}`} id="nav">
                <Link to="/">
                  <li onClick={this.toggleClass}>Inicio</li>
                </Link>
                <Link to="/estudio">
                  <li>Estudio Jurídico</li>
                </Link>
                <Link to="/especialidades">
                  <li>Especialidades</li>
                </Link>
                <Link to="/abogados">
                  <li>Abogados</li>
                </Link>
                <Link to="/blog">
                  <li>Blog</li>
                </Link>
                <Link to="/contacto">
                  <li onClick={this.toggleClass}>Contacto</li>
                </Link>
              </ul>
            </div>
            <div className={`menu-bg ${this.state.activeMenuBg ? 'change-bg' : null}`} id="menu-bg"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MobileNavbar;
