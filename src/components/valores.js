import React from 'react';
import './valores.css';

class Valores extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid cultura">
          <div className="row paddupdown50">
            <div className="col-lg-12">
              <h1 id="valores-title">Cultura y Valores</h1>
              <div className="valores d-flex justify-content-center mt-5">
                <ul id="ul-valores">
                  <li>TRANSPARENCIA</li>
                  <li>CALIDAD PROFESIONAL</li>
                  <li>EXCELENCIA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Valores;
