import React from 'react';
import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row footer-bg align-items-center">
            <div className="col-lg-12">
              <ul id="ul-footer-main">
                <li id="footer-redes">
                  <h6>NUESRTAS REDES</h6>
                  <ul className="ul-footer-sub ul-redes nopadding">
                    <li>
                      <a href="https://www.facebook.com/estudiojuridicosva" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/estudiojuridicosva/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/acu%C3%B1a-y-asociados-estudio-jur%C3%ADdico-integral-9b20201a7/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="footer-estudio">
                  <h6>EL ESTUDIO</h6>
                  <ul className="ul-footer-sub nopadding">
                    <li>Abogados</li>
                    <li>Blog</li>
                    <li>Noticias</li>
                  </ul>
                </li>
                <li id="footer-especialidades">
                  <h6>ESPECIALIDADES</h6>
                  <ul className="ul-footer-sub nopadding">
                    <li>Derecho Penal de la Empresa</li>
                    <li>Derecho de Familia</li>
                    <li>Derecho Penal</li>
                    <li>Governance, Risk & Compliance</li>
                    <li>Asesoramiento para Empresas</li>
                    <li>Derecho Laboral</li>
                  </ul>
                </li>
                <li>
                  <h6 id="footer-contact-title">CONTACTO</h6>
                  <ul className="ul-footer-sub nopadding footer-contact">
                    <li>
                      <i className="fas fa-map-marker-alt fa-lg footer-icon"></i>
                      <a href="https://www.google.com/maps/place/Acu%C3%B1a+Estudio+Jur%C3%ADdico+Integral/@-31.4243694,-64.200093,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a348be27d627:0xa9904094ed00176f!8m2!3d-31.4243694!4d-64.1979043" target="_blank" rel="noopener noreferrer">
                        Av. Pueyrredón 724. Torre 3 Piso 16 Dpto. 4
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-phone fa-lg footer-icon"></i>
                      <a href="tel:3512308918">3512308918</a> - <a href="tel:3512071409">3512071409</a>
                    </li>
                    <li>
                      <i className="fas fa-envelope fa-lg footer-icon"></i>
                      <a href="mailto:estudiojuridicosva@gmail.com">estudiojuridicosva@gmail.com</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span>
          <a href="http://wa.link/yzkaoa" className="whatsapp" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </span>
      </React.Fragment>
    );
  }
}

export default Footer;
