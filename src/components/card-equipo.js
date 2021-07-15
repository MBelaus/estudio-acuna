import React from 'react';
import './card-equipo.css';

class CardEquipo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <img src={this.props.img} className="card-img-top card-img" alt="..." />
          <div className="card-body d-flex align-items-end justify-content-center nopadding">
            <h5>{this.props.title}</h5>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardEquipo;
