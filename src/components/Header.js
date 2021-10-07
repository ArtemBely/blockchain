import React from 'react';
import { NavLink } from 'react-router-dom';
import circle1 from '../../public/images/Ellipse 47.png';
import circle2 from '../../public/images/Ellipse 48.png';

function Header() {
  return(
    <div className='wrap_mainHeader'>
      <div className='wrap_header'>
           <p className='wrap_circle'>
              <img src={circle1} id='circle1'/>
              <img src={circle2} id='circle2'/>
           </p>
           <p id={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'global_black' : 'global'}>Global Blockchain Network</p>
           <NavLink to='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'nav_header_black' : 'nav_header'} activeClassName='active_header' id='database'>Conference</NavLink>
           <NavLink to='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'nav_header_black' : 'nav_header'} activeClassName='active_header' id='conference'>Database</NavLink>
           <NavLink to='/hr' className={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'nav_header_black' : 'nav_header'} activeClassName='active_header' id='partners'>HR</NavLink>
           <NavLink to='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'nav_header_black' : 'nav_header'} activeClassName='active_header' id='header_about'>Сommunity news</NavLink>
           <NavLink to='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'nav_header_black' : 'nav_header'} activeClassName='active_header' id='blog'>Blog</NavLink>
           <NavLink to='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'nav_header_black' : 'nav_header'} id='cont' activeClassName='active_header' id='header_contacts'>About GBN</NavLink>
           <p></p>
      </div>
    </div>
  )
}

export default Header;
