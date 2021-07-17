import React from 'react';
import './home-servicios.css';
import CardServicio from './card-servicios.js';
import law from '../svg-services/law.svg';
import family from '../svg-services/family.svg';
import handcuffs from '../svg-services/handcuffs.svg';
import handshake from '../svg-services/handshake.svg';
import justice from '../svg-services/justice.svg';
import worker from '../svg-services/worker.svg';

class ServiciosHome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center cards paddupdown50">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-12 mb-3 d-md-block d-sm-flex d-flex flex-column align-items-center">
              <h2 className="title">Nuestras Especialidades</h2>
              <br />
              <button className="btn hvr-sweep-to-right">
                <a href="/" className="links-home">
                  Más servicios
                </a>
              </button>
            </div>
            <div className="col-lg-6 col-md-3 col-sm-4 col-7">
              <div className="row justify-content-center">
                <CardServicio img={law} title={'Derecho Penal de la Empresa'} desc={'Somos una firma que se especializa en derecho penal económico y tributario, siendo una de los estudios más reconocidos en esta materia.'} />
                <CardServicio img={family} title={'Derecho de Familia'} desc={'El estudio cuenta con personal capacitado para asesorarlo en el trámites de divorcios, cuotas alimentarias, regímenes de visita, declaratorias de herederos y juicios sucesorios.'} />
                <CardServicio img={handcuffs} title={'Derecho Penal'} desc={'El derecho penal en todas sus dimensiones, conforma una de las áreas de mayor especialización del estudio y se encuentra a cargo del Dr. Santiago Acuña.'} />
                <CardServicio img={handshake} title={'Governance, Risk & Compliance'} desc={'En construccion...'} />
                <CardServicio img={justice} title={'Asesoramiento para Empresas'} desc={'En construccion...'} />
                <CardServicio img={worker} title={'Derecho Laboral'} desc={'Otra de nuestras ramas de mayor desempeño, es el derecho laboral, contamos con un equipo especializado en Derecho del Trabajo, dirigido por la Dra. Camila Obregón.'} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ServiciosHome;
