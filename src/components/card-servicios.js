import React from 'react';
import './card-servicios.css';

class CardServicio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card flip-card d-flex justify-content-center align-items-center">
          <div className="flip-card-inner">
            <div className="flip-card-front d-flex flex-column align-items-center justify-content-center">
              <img src={this.props.img} className="img-service filter" alt="..." />
              <h6 id="titulo">{this.props.title}</h6>
            </div>
            <div className="flip-card-back d-flex flex-column justify-content-center align-items-center">
              <h6 className="mb-4">{this.props.title}</h6>
              <p>{this.props.desc}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardServicio;
