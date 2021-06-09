import React from 'react';
import './home-servicios.css';
import CardServicio from './card-servicios.js';
import fakeDocs from '../svg-services/fake-docs.svg';
import family from '../svg-services/family.svg';
import handcuffs from '../svg-services/handcuffs.svg';
import handshake from '../svg-services/handshake.svg';
import justice from '../svg-services/justice.svg';
import worker from '../svg-services/worker.svg';

class ServiciosHome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid nopadding">
          <div className="row align-items-center justify-content-center cards">
            <div className="col-lg-2">
              <h2 className="title">Nuestras Especialidades</h2>
              <br />
              <button className="btn hvr-sweep-to-right">
                <a href="/" id="link-services">
                  Conocé más!
                </a>
              </button>
            </div>
            <div className="col-lg-6">
              <div className="row justify-content-center">
                <CardServicio img={fakeDocs} title={'Derecho Penal de la Empresa'} />
                <CardServicio img={family} title={'Derecho de Familia'} />
                <CardServicio img={handcuffs} title={'Derecho Penal'} />
                <CardServicio img={handshake} title={'Derecho Societario'} />
                <CardServicio img={justice} title={'Derecho Civil y Comercial'} />
                <CardServicio img={worker} title={'Derecho Laboral'} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ServiciosHome;
