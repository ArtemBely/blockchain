import React from 'react';
import { NavLink } from 'react-router-dom';
import sphere1 from '../../public/images/Ellipse 47.svg'
import sphere2 from '../../public/images/Ellipse 48.svg'

function Footer() {
    return (
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
              <NavLink to='#' className='each_footer'>+41 855 456 54 65</NavLink>
              <NavLink to='#' className='each_footer' id='email'>example@site.com</NavLink>
            </div>
            <div id='second_foot'></div>
        </div>
    )
}

export default Footer;
