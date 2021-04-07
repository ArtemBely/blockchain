import React from 'react';
import { NavLink } from 'react-router-dom';
import sphere1 from '../../public/images/Ellipse 47.svg'
import sphere2 from '../../public/images/Ellipse 48.svg'
import anchor from '../../public/images/Polygon 6.svg';

function Footer() {
    return (
      <div className='wrap_footer'>
        <div className='footer'>
            <p className='wrap_spheres'>
              <img src={sphere1} id='sphere1'/>
                <img src={sphere2} id='sphere2'/>
              <p className='global_bn'>Global Blockchain Network</p>
            </p>
            <div className='wrap_linkes_footer'>
               <NavLink to='#' className='each_footer'>Event info</NavLink>
                 <NavLink to='#' className='each_footer'>Facebook</NavLink>
                   <NavLink to='#' className='each_footer'>Conferences</NavLink>
                     <NavLink to='#' className='each_footer'>Instagram</NavLink>
                       <NavLink to='#' className='each_footer'>Participants</NavLink>
                       <NavLink to='#' className='each_footer'>YouTube</NavLink>
                     <NavLink to='#' className='each_footer'>Floor plan</NavLink>
                   <NavLink to='#' className='each_footer'>Linkedin</NavLink>
                 <NavLink to='#' className='each_footer'>Stand samples</NavLink>
               <NavLink to='#' className='each_footer'>Medium</NavLink>
            </div>
            <div className='wrap_contacts'>
              <p className='each_footer'>+41 855 456 54 65</p>
              <p className='each_footer' id='email'>example@site.com</p>
            </div>
            <div id='second_foot'></div>
            <a href='#circle1' id='anchor_link'><img src={anchor} id='anchor' /></a>
        </div>
      </div>
    )
}

export default Footer;
