import React from 'react';
import Hero from './components/hero.js';
import ServiciosHome from './components/home-servicios.js';
import Equipo from './components/home-equipo.js';
import Valores from './components/valores.js';
import Frase from './components/frase.js';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <Frase />
        <Equipo />
        <Valores />
        <ServiciosHome />
      </React.Fragment>
    );
  }
}

export default Home;
