import React from 'react';
import { NavLink } from 'react-router-dom';
import circle1 from '../../public/images/Ellipse 47.png';
import circle2 from '../../public/images/Ellipse 48.png';

function Header() {
  return(
    <div className='wrap_header'>
         <p className='wrap_circle'>
            <img src={circle1} id='circle1'/>
            <img src={circle2} id='circle2'/>
         </p>
         <p id='global'>Global Blockchain Network</p>
         <NavLink to='/database' className='nav_header' activeClassName='active_header' id='database'>Database</NavLink>
         <NavLink to='/database' className='nav_header' activeClassName='active_header' id='conference'>VR EXPO and Conference</NavLink>
         <NavLink to='/database' className='nav_header' activeClassName='active_header' id='partners'>Partners</NavLink>
         <NavLink to='/database' className='nav_header' activeClassName='active_header' id='header_about'>About</NavLink>
         <NavLink to='/database' className='nav_header' activeClassName='active_header' id='blog'>Blog</NavLink>
         <NavLink to='/database' className='nav_header' activeClassName='active_header' id='header_contacts'>Contacts</NavLink>
         <p></p>
    </div>
  )
}

export default Header;
