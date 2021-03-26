import React from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../../public/images/Rectangle 7.svg';

function Logos() {
    return (
    <div className='wrap_logos'>
        <div className='logos'>
          <p className='explain2'>
            <p className='participating1'>Participating companies</p>
              <NavLink to='#' className='seeAll_3'>See all →</NavLink>
              <p className='join2'>Join GBN VR Expro and give a full experience of what you do to the world.</p>
             </p>
          <img src={logo1} className='each_logo' id='bmw' />
        <div className='wrap_vacancies'>
         <p className='vacancies'>Vacancies</p>
           <p className='block_v'>Blockchain is a rapidly developing field with a constant demand for high-profile specialists.
            If you are interested in leveraging your team or looking for a new position — let the community know. Match and watch how the magic happens.</p>
             <p className='we_wish'>We wish you mutually beneficial cooperation!</p>
           </div>
        </div>
    </div>
    )
}

export default Logos;
