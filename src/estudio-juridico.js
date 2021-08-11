import React from 'react';
import './estudio-juridico.css';

class EstudioJuridico extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid nav-breakpoints band-title">
          <div className="row">
            <div className="col-lg-6 col-md-7 top50">
              <h2 className="estudio-title">¿POR QUÉ ELEGIRNOS?</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 top50">
              <p className="estudio-p">Contamos con una amplia trayectoria en el rubro, siempre trabajando de manera ética, honesta y sincera, procurando mantener relaciones a largo plazo con nuestros clientes. Somos recomendados permanentemente, lo que nos demuestra que vamos por el camino correcto.</p>
              <p className="estudio-p">Trabajamos y nos esforzamos por nuestros clientes, entendiendo su problema y generando todas las alternativas para solucionarlo.</p>
              <p className="estudio-p">Como consultores hemos generado resultados comprobables en las empresas donde hemos intervenido.</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EstudioJuridico;
