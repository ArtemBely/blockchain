import React from 'react';
import { NavLink } from 'react-router-dom';
import stand from '../../public/images/Rectangle 88.png';
import stand1 from '../../public/images/Rectangle 87.svg';


function Brands() {
    return (
    <div className='brands'>
  		<p className='info_brands'>
  			<p className='VR_Stand'>Brand your own VR Stand</p>
  			<p className='brands_text'>Do one more step and see your business is in virtual reality. Real feeling, real people, easy access from any device or location. VR GBN is more than an event. Watch a promo, get a feeling, make it real.</p>
  			<NavLink to='#' className='seeAll_2'>See all →</NavLink>
  		</p>

		<div className='stand_one'>
			<img src={stand1} id='img_stand' />
      <p className='square_projects1'></p>
      <p className='square_projects2'></p>
			<NavLink to='#' className='reserve'>Reserve</NavLink>
			<NavLink to='#' className='discover_more'>Discover more</NavLink>
		</div>

		<div className='stand_two'>
			<p id='img_stand'><img src={stand1} id='img_stand2'/></p>
		</div>
    </div>
    )
}

export default Brands;
