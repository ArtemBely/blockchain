import React from 'react';
import { NavLink } from 'react-router-dom';
import sphere1 from '../../public/images/Ellipse 47.svg'
import sphere2 from '../../public/images/Ellipse 48.svg'
import anchor from '../../public/images/Polygon 6.svg';
import close from '../../public/images/Union.svg';
import { history } from 'history';

class Administrator_Registration extends React.Component {


  render() {
    return (
      <div className='wrap_admin_reg'>
        <div className='admin_reg'>
            <form action='/database/sendRequest' method='POST'>
               <input type='email' name='email' placeholder='email' required />
               <input type='password' name='password' placeholder='password' required />
               <input type='hidden' name='admin' value='true'/>
               <button type='submit'>Registration</button>
            </form>
        </div>
      </div>
    )
  }
}

export default Administrator_Registration;
