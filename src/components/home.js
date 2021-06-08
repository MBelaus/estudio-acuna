import React from 'react';
import Hero from './hero.js';
import ServiciosHome from './home-servicios';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <ServiciosHome />
      </React.Fragment>
    );
  }
}

export default Home;
