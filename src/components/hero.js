import React from 'react';
import './hero.css';

class Hero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cantata+One&display=swap" rel="stylesheet" />
        <div className="container-fluid">
          <div className="row hero-bg justify-content-center align-items-center paddupdown50">
            <div className="col-xl-4 col-lg-4 col-md-8 col-sm-8 col-9 descripcion">
              <h1 className="titulo">Acuña & Asociados</h1>
              <div className="col-lg-12 col-md-12 col-xs-12 col-12 hr"></div>
              <p>
                Somos un grupo de abogados especialistas en diversas ramas del derecho, siendo por ello un <strong>estudio jurídico integral</strong>. <br /> Asesoramos a personas físicas y empresas de la provincia de Córdoba y todo el país.
              </p>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-3 col-md-8 col-sm-8 col-9 form-contacto">
              <h1 id="form-title">Hablemos!</h1>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" id="nombre" aria-describedby="nombreHelp" placeholder="Tu nombre" />
                </div>
                <div className="mb-3">
                  <input type="number" className="form-control" id="telefono" placeholder="Teléfono" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="E-mail" />
                </div>
                <div className="mb-3">
                  {/* <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label> */}
                  <textarea name="descripcion" className="form-control" id="descripcion" rows="3" placeholder="Contanos brevemente tu caso..."></textarea>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn hvr-sweep-to-right">
                    <span className="links-home">Enviar</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Hero;
