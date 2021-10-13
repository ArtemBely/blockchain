import React from 'react';
import { NavLink } from 'react-router-dom';
import person from '../../public/images/Rectangle 239.png';
import person2 from '../../public/images/Rectangle 240.png';
import person3 from '../../public/images/Rectangle 241.png';
import person4 from '../../public/images/Rectangle 242.png';
import person5 from '../../public/images/Rectangle 243.png';
import person6 from '../../public/images/Rectangle 244.png';
import logo from '../../public/images/Rectangle 245.svg';
import logo2 from '../../public/images/Rectangle 246.svg';
import logo3 from '../../public/images/Rectangle 247.svg';
import logo4 from '../../public/images/Rectangle 248.svg';
import logo5 from '../../public/images/Rectangle 249.svg';
import logo6 from '../../public/images/Rectangle 250.svg';

class Sponsors extends React.Component{

  constructor() {

    super()

  }

  render() {
    return(
      <div className='wrap_sponsors'>
        <div className='sponsors'>
            <p className='ourSponsors'>Our sponsors</p>
            <p className='talkedAbout'>Our sponsors talked about why it is important to become part of the community</p>
            <div className='wrap_allSponsors'>
              <div className='sponsorsPhotos'>
                  <img src={person} className='sponsorsPhotosOriginal'/><img src={person2} className='sponsorsPhotosOriginal'/>
                  <img src={person3} className='sponsorsPhotosOriginal'/><img src={person4} className='sponsorsPhotosOriginal'/>
                  <img src={person5} className='sponsorsPhotosOriginal'/><img src={person6} className='sponsorsPhotosOriginal'/>
              </div>
              <div className='sponsorsLogos'>
                  <img src={logo} className='sponsorsLogosOriginal'/><img src={logo2} className='sponsorsLogosOriginal'/>
                  <img src={logo3} className='sponsorsLogosOriginal'/><img src={logo4} className='sponsorsLogosOriginal'/>
                  <img src={logo5} className='sponsorsLogosOriginal'/><img src={logo6} className='sponsorsLogosOriginal'/>
              </div>
              <div className='becomeSponsor'>
                  Become a sponsor and support community
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Sponsors;
