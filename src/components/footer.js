import React from 'react';
import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row footer-bg align-items-center">
            <div className="col-lg-12 pad">
              <ul id="ul-footer-main">
                <li>
                  <h6>NUESRTAS REDES</h6>
                  <ul className="ul-footer-sub ul-redes nopadding">
                    <li>
                      <i class="fab fa-facebook-f"></i>
                    </li>
                    <li>
                      <i class="fab fa-instagram"></i>
                    </li>
                    <li>
                      <i class="fab fa-linkedin-in"></i>
                    </li>
                  </ul>
                </li>
                <li>
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
                  <h6>CONTACTO</h6>
                  <ul className="ul-footer-sub nopadding">
                    <li>
                      <i className="fas fa-map-marker-alt fa-lg footer-icon"></i>
                      Av. Pueyrredón 724. Torre 3 Piso 15 Dpto "D"
                    </li>
                    <li>
                      <i className="fas fa-phone fa-lg footer-icon"></i>
                      3512308918 - 3512071409
                    </li>
                    <li>
                      <i className="fas fa-envelope fa-lg footer-icon"></i>estudiojuridicosva@gmail.com
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
