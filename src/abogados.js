import React from 'react';
import './abogados.css';

class Abogados extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid nav-breakpoints abogados">
          <div className="row justify-content-around">
            <div className="col-lg-1"></div>
            <div className="col-xl-3 col-lg-4 col-md-8 col-sm-8 col-9 top100">
              <h1 className="titulo-abogados">ABOGADO PENALISTA</h1>
              <div className="col-lg-12 col-md-12 col-xs-12 col-12 hr"></div>
              <p className="p-abogados">Santiago Virgilio Acuña</p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="p-titulo">Santiago Virgilio Acuña</p>
              <p className="p-descripcion">Nació en el mes de Mayo del año 1987 en la ciudad de Córdoba...</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Abogados;
