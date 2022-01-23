import React from 'react';
import Header from './Header';
import MainScreen from './MainScreen';
import Fone from './Fone';
import Collaboration from './Collaboration';
import Table1 from './Table1';
import Sponsors from './Sponsors';
import People from './People';
// import Wide from './Wide';
import Brands from './Brands';
import Logos from './Logos';
import Footer from './Footer';

class Main extends React.Component{
  componentDidMount()
  {
    console.log( 'componentDidMount' );

    setTimeout(window.scrollTo({ left: 0, top: 0 }));
  }

  render() {
    return(
      <div className='bubble'>
        <Header />
        <MainScreen />
        <Fone />
        <Collaboration />
        <Table1 />
        <Sponsors />
        <People />
        {/* <Wide /> */}
        <Brands />
        <Logos />
        <p className='wrap_main_footer'><Footer /></p>
      </div>
    )
  }
}

export default Main;
