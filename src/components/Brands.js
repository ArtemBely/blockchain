import React from 'react';
import { NavLink } from 'react-router-dom';
import stand from '../../public/images/Rectangle 88.png';
import stand1 from '../../public/images/Rectangle 87.svg';


function Brands() {
    return (
        <div className='wrap_brands'>
            <div className='brands'>
          		<p className='info_brands'>
          			<p className='VR_Stand'>Brand your own VR Stand</p>
          			<p className='brands_text'>Do one more step and see your business is in virtual reality. Real feeling, real people, easy access from any device or location. VR GBN is more than an event.<p> Watch a promo, get a feeling, make it real.</p></p>
          			{/* <NavLink to='#' className='seeAll_2'>See all →</NavLink> */}
          		</p>

        		<div className='stand_one'>
        			<img src={stand1} id='img_stand' />
              <p className='square_projects1'></p>
              <p className='square_projects2'></p>
        			<NavLink to='#' className='reserve' id='res_one'>Reserve</NavLink>
        			<NavLink to='#' className='discover_more' id='dis_one'>Discover more</NavLink>
        		</div>

            <div className='stand_between'>
              <img src={stand1} id='img_standBetween' />
              <p className='square_projects3'></p>
              <p className='square_projects33'></p>
              <NavLink to='#' className='reserve3'>Reserve</NavLink>
              <NavLink to='#' className='discover_more3'>Discover more</NavLink>
            </div>

        		<div className='stand_two'>
        		  <img src={stand1} id='img_stand2'/>
              <p className='square_projects11'></p>
              <p className='square_projects22'></p>
              <NavLink to='#' className='reserve2 specRes'>Reserve</NavLink>
              <NavLink to='#' className='discover_more2 specDis'>Discover more</NavLink>
        		</div>
            </div>
        </div>
    )
}

export default Brands;
