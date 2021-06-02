import React from 'react';
import './hero.css';

class Hero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cantata+One&display=swap" rel="stylesheet" />
        <div className="container-fluid nopadding">
          <div className="row hero-bg">
            <div className="col-lg-1"></div>
            <div className="col-lg-4 descripcion">
              <h1 className="titulo">Acuña & Asociados</h1>
              <div className="hr"></div>
              <p>
                Somos un grupo de abogados especialistas en diversas ramas del derecho, siendo por ello un <strong>estudio jurídico integral</strong>. <br /> Asesoramos a personas físicas y empresas de todo el país. No dudes en hacer tu consulta, te estamos esperando!
              </p>
            </div>
            <div className="col-lg-3"></div>
            <div className="col-lg-3 form-contacto">
              <h1>Hablemos!</h1>
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
                <div className="col-3 mx-auto">
                  <button type="submit" className="btn-1 btn btn-lg">
                    <span>Enviar</span>
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
