import React from 'react';
import './home-servicios.css';
import CardServicio from './card-servicios.js';

class ServiciosHome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid bg">
          <div className="row align-items-center cards">
            <div className="col-lg-1"></div>
            <div className="col-lg-1">
              <h2>Nuestras Especialidades</h2>
            </div>
            <div className="col-lg-10 d-flex flex-column align-items-center">
              <CardServicio />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ServiciosHome;
