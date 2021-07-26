import React from 'react';
import './contacto.css';

class Contacto extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid paddupdown50 nav-breakpoints" id="contacto-comp">
          <div className="container ">
            <div className="row top50 bottom100">
              <div className="col-lg-4 col-md-12 data-side paddupdown50">
                <h1 className="contact-title">Contactanos</h1>
                <ul id="contact-data" className="top50">
                  <li>
                    <h6>Teléfono</h6>
                    <a href="tel:3512308918">3512308918</a> - <a href="tel:3512071409">3512071409</a>
                  </li>
                  <li>
                    <h6>E-mail</h6>
                    <a href="mailto:estudiojuridicosva@gmail.com">estudiojuridicosva@gmail.com</a>
                  </li>
                  <li>
                    <h6>Dirección</h6>
                    <a href="https://www.google.com/maps/place/Acu%C3%B1a+Estudio+Jur%C3%ADdico+Integral/@-31.4243694,-64.200093,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a348be27d627:0xa9904094ed00176f!8m2!3d-31.4243694!4d-64.1979043" target="_blank" rel="noopener noreferrer">
                      Av. Pueyrredón 724. Torre 3 Piso 16 Dpto. 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-7 col-md-12 offset-lg-1 data-side paddupdown50">
                <h1 className="contact-title">Formulario de contacto</h1>
                <form class="row g-3 top50">
                  <div class="col-md-4">
                    {/*                     <label for="inputEmail4" class="form-label">
                      Email
                    </label> */}
                    <input type="text" class="form-control" id="inputName" placeholder="Tu nombre" />
                  </div>
                  <div class="col-md-4">
                    {/*                     <label for="inputPassword4" class="form-label">
                      Password
                    </label> */}
                    <input type="email" class="form-control" id="inputEmail" placeholder="E-mail" />
                  </div>
                  <div class="col-md-4">
                    {/*                     <label for="inputPassword4" class="form-label">
                      Password
                    </label> */}
                    <input type="number" class="form-control" id="inputTelefono" placeholder="Teléfono" />
                  </div>
                  <div class="col-12">
                    <textarea name="descripcion" className="form-control" id="descripcion" rows="10" placeholder="Contanos brevemente tu caso..."></textarea>
                  </div>
                  <div class="col-12 d-flex justify-content-end">
                    <button type="submit" class="btn">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 nopadding">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.628327101129!2d-64.20009298424817!3d-31.424364803783657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a348be27d627%3A0xa9904094ed00176f!2sAcu%C3%B1a%20Estudio%20Jur%C3%ADdico%20Integral!5e0!3m2!1ses-419!2sar!4v1626820385242!5m2!1ses-419!2sar" width="100%" height="400" allowfullscreen="" loading="eager" title="mapa" id="contact-map"></iframe>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contacto;
