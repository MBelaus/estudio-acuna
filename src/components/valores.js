import React from 'react';
import './valores.css';
import avatar from '../svg-services/avatar.svg';
/* import professional from '../svg-services/3professional.svg'; */
import professional from '../svg-services/professional.svg';
import star from '../svg-services/star.svg';

class Valores extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid cultura">
          <div className="row paddupdown50">
            <div className="col-lg-12">
              <h1 id="valores-title">Cultura y Valores</h1>
              <div className="valores d-flex justify-content-center mt-5 col-lg-12">
                <ul id="ul-valores">
                  <li>
                    <img src={avatar} alt="" />
                    <p>EXPERIENCIA</p>
                  </li>
                  <li>
                    <img src={professional} alt="" />
                    <p>PROFESIONALISMO</p>
                  </li>
                  <li>
                    <img src={star} alt="" />
                    <p>EXCELENCIA</p>
                  </li>
                </ul>
              </div>
              <div className="container">
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Valores;
