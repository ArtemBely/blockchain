import React from 'react';
import { NavLink } from 'react-router-dom';
import wide from '../../public/images/acdc 2.svg';
import wide2 from '../../public/images/acdc 2.jpg';


function Wide() {
    return (
      <div className='wide'>
          <img src={wide} id='wide1'/>
          <img src={wide2} id='wide2'/>
          <p className='water'>
             <p className='vr_gl'>VR Global Blockchain Network</p>
             <p className='expo1'>Expo and conference</p>
             <p className='dates1'>1 May — 3 June</p>
             <NavLink to='#' className='reg_bottom1'>Registration</NavLink>
          </p>
      </div>
    )
}

export default Wide;
