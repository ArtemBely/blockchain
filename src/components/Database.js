import React from 'react';
import Header from './Header';
import DBAnimation from './DBAnimation';
import Table from './Table';
import Footer from './Footer';


class Database extends React.Component {

    componentDidMount() {
        if(typeof window != 'undefined') {
          window.scrollTo(0, 0);
        }
  }

    render() {
      return (
        <div className='wrap_database'>
            <div><Header /></div>
            <DBAnimation />
            <Table />

        </div>
      )
    }
}

export default Database;
