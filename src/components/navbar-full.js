import React from 'react';
import './nabvar-full.css';

class FullNavbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid" id="full-navbar">
          <div className="row">
            <div className="col-lg-12 nav-full">
              <ul className="nav-full">
                <li className="hvr-underline-from-center">Estudio Jurídico</li>
                <li className="hvr-underline-from-center">Especialidades</li>
                <li className="hvr-underline-from-center">Abogados</li>
                <li className="hvr-underline-from-center">Blog</li>
                <li className="hvr-underline-from-center">Contacto</li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FullNavbar;
