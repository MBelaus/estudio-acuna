import React from 'react';
import './navbar-mobile.css';

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
      <div className="container-fluid" id="mobile-navbar">
        <div className="row">
          <div className="col-lg-12">
            <div id="menu-bar">
              <div id="menu" onClick={this.toggleClass} className={this.state.activeMenu ? 'change' : null}>
                <div id="bar1" className="bar"></div>
                <div id="bar2" className="bar"></div>
                <div id="bar3" className="bar"></div>
              </div>
              <ul className={`nav ${this.state.activeNav ? 'change' : null}`} id="nav">
                <li>
                  <a href="/">Estudio Jurídico</a>
                </li>
                <li>
                  <a href="/">Especialidades</a>
                </li>
                <li>
                  <a href="/">Abogados</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Contacto</a>
                </li>
              </ul>
            </div>
            <div className={`menu-bg ${this.state.activeMenuBg ? 'change-bg' : null}`} id="menu-bg"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileNavbar;
