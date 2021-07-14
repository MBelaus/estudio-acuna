import React from 'react';
import Hero from './hero.js';
import ServiciosHome from './home-servicios.js';
import Equipo from './home-equipo.js';
import Valores from './valores.js';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <Equipo />
        <Valores />
        <ServiciosHome />
      </React.Fragment>
    );
  }
}

export default Home;
