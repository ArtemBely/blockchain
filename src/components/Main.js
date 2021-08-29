import React from 'react';
import Header from './Header';
import MainScreen from './MainScreen';
import Fone from './Fone';
import Collaboration from './Collaboration';
import Table1 from './Table1';
import People from './People';
import Wide from './Wide';
import Brands from './Brands';
import Logos from './Logos';
import Footer from './Footer';

class Main extends React.Component{
  render() {
    return(
      <div className='bubble'>
          <Header />
          <MainScreen />
          <Fone />
          <Collaboration />
          <Table1 />
          <People />
          <Wide />
          <Brands />
          <Logos />
          <Footer />
      </div>
    )
  }
}

export default Main;
