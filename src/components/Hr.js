import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Vacancies from './Vacancies';

class Hr extends React.Component {
    render() {
      return (
        <div className='wrap_hr'>
            <div className='wrap_hr_header'><Header /></div>
            <Vacancies />
            <div id='wrap_hr_footer'><Footer /></div>
        </div>
      )
    }
}

export default Hr;
