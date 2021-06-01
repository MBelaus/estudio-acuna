import React from 'react';
import './nabvar-full.css';

class FullNavbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid nopadding" id="full-navbar">
          <div className="row">
            <div className="col-lg-12 nopadding">
              <ul className="nav-full">
                <li>Estudio Jurídico</li>
                <li className="esp">Especialidades</li>
                <li>Abogados</li>
                <li className="pub">Blog</li>
                <li>Contacto</li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FullNavbar;
