import React from 'react';
import Header from './Header';
import DBAnimation from './DBAnimation';
import Table from './Table';
import Footer from './Footer';


class Database extends React.Component {

    render() {
      return (
        <div className='wrap_database'>
            <Header />
            <DBAnimation />
            <Table />
            <div id='wrap_data_footer'><Footer /></div>
        </div>
      )
    }
}

export default Database;
