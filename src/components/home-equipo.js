import React from 'react'
import './home-equipo.css'

class Equipo extends React.Component {
    render() {
      return (
        <React.Fragment>
<div className="container-fluid nopadding">
          <div className="row align-items-center justify-content-center cards">
            <div className="col-lg-2">
              <h2 className="title">Los socios del estudio</h2>
              <br />
              <button className="btn hvr-sweep-to-right">
                <a href="/" id="links-home">
                  Nuestro equipo
                </a>
              </button>
            </div>
            <div className="col-lg-6">
              <div className="row justify-content-center">
                <h1>ACA VAN LAS FOTOS</h1>
              </div>
            </div>
          </div>
        </div>
        </React.Fragment>
      );
    }
  }

export default Equipo