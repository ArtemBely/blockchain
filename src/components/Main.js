import React from 'react';
import Header from './Header';
import MainScreen from './MainScreen';
import Fone from './Fone';
import Collaboration from './Collaboration';
import Table1 from './Table1';

class Main extends React.Component{
  render() {
    return(
      <div>
          <Header />
          <MainScreen />
          <Fone />
          <Collaboration />
          <Table1 />
      </div>
    )
  }
}

export default Main;
