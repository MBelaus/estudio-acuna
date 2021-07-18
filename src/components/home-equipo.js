import React from 'react';
import CardEquipo from './card-equipo.js';
import santiago from '../santiago.png';
import camila from '../camila.png';
import './home-equipo.css';

class Equipo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center equipo-bg paddupdown50">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-12 mb-3 d-md-block d-sm-flex d-flex flex-column align-items-center">
              <h2 className="title">Los socios del estudio</h2>
              <br />
              <button className="btn hvr-sweep-to-right">
                <a href="/" className="links-home">
                  Conocer más
                </a>
              </button>
            </div>
            <div className="col-lg-6 col-md-3 col-sm-4 col-5">
              <div className="row justify-content-center">
                <CardEquipo img={santiago} title="Santiago Acuña" />
                <CardEquipo img={camila} title="Camila Obregón" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Equipo;
