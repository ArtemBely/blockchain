import React from 'react';
import Header from './Header';
import MainScreen from './MainScreen';
import Fone from './Fone';
import Collaboration from './Collaboration';

class Main extends React.Component{
  render() {
    return(
      <div>
          <Header />
          <MainScreen />
          <Fone />
          <Collaboration />
      </div>
    )
  }
}

export default Main;
