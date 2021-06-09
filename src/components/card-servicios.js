import React from 'react';
import './card-servicios.css';

class CardServicio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card d-flex justify-content-center align-items-center flip-card-container">
          <img src={this.props.img} className="img-service filter" alt="..." />
          <h6 id="titulo">{this.props.title}</h6>
        </div>

        {/*         <div className="card">
          <img src={handshake} alt="" className="img-service" />
        </div> */}
      </React.Fragment>
    );
  }
}

export default CardServicio;
