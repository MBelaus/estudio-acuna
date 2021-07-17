import React from 'react';
import './card-equipo.css';

class CardEquipo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-5 col-md-8 mx-4 my-2">
          <div className="card-equipo nopadding">
            <img src={this.props.img} className="card-img-top img-card-equipo" alt="..." />
            <div className="card-body d-flex align-items-end justify-content-center nopadding">
              <h5>{this.props.title}</h5>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardEquipo;
