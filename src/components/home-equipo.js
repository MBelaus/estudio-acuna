import React from 'react';
import './home-equipo.css';
import CardEquipo from './card-equipo.js';
import img from '../svg-services/img.png';

class Equipo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center cards paddupdown50">
            <div className="col-lg-2 col-md-2 col-sm-2 col-12">
              <h2 className="title">Los socios del estudio</h2>
              <br />
              <button className="btn hvr-sweep-to-right">
                <a href="/" className="links-home">
                  Nuestro equipo
                </a>
              </button>
            </div>
            <div className="col-lg-6 col-md-3 col-sm-3 col-3">
              <div className="row justify-content-center">
                <CardEquipo img={img} title="Santiago Acuña" />
                <CardEquipo img={img} title="Camila Obregón" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Equipo;
