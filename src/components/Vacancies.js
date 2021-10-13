import React from 'react';
import Offer from './Offer';
import loope from '../../public/images/Ellipse 40.svg';
import { getVacancies } from './fetchData';


class Vacancies extends React.Component {

  constructor() {
    super()

  }

    render() {
      return (
        <div className='wrap_vac'>
            <div className='vac'>
               <div className='industry_vac'>
                   <div className='left_ind'>
                      <p id='block_hr'>Blockchain industry vacancies from the best community</p>
                      <p id='for_hr'>For employers and job seekers</p>
                      <input type='text' id='job_hr' placeholder='Start writing your job title' /><img src={loope} id='loope'/>
                   </div>
                   <div className='right_ind'>
                      <p className='all_vac'>Systems Analyst</p><p className='all_vac'>С#</p><p className='all_vac'>Risk manager</p><p className='all_vac'>Mobile developer</p><p className='all_vac'>Web developer</p>
                      <p className='all_vac'>Blockchain engineer</p><p className='all_vac'>Big Data Analyst</p><p className='all_vac'>Blockchain Marketing Specialist</p><p className='all_vac'>С++</p>
                   </div>
               </div>
               <div className='wrap_hrHelp'>
                   <div className='hrHelp'>
                       <span id='sp1'>HR HELP</span> <span id='sp2'>Take your time and get results</span> <span id='sp3'>Help me</span>
                   </div>
               </div>
               <div className='wrap_Filters'>
                   <div className='hrHelp'>
                       <span id='sp1'>HR HELP</span> <span id='sp2'>Take your time and get results</span> <span id='sp3'>Help me</span>
                   </div>
               </div>
               <Offer />
            </div>
        </div>
      )
    }
}

export default Vacancies;
