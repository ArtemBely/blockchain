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
import close from '../../public/images/Union.svg';

class Sponsors extends React.Component{

  constructor() {
    super()

    this.cl2  = React.createRef();
    this.cl   = React.createRef();
  }

  closeModal = () => {
    this.cl.current.classList.contains('disp_change') ? this.cl.current.classList.remove('disp_change') : this.cl.current.classList.add('disp_change');
  }

  render() {
    return(
      <div className='wrap_sponsors'>
        <div className='wrap_modal1_dark' ref={this.cl}>
          <div className='wrap_modal1 modelAddComp2'>
            <div className='modal1 insideAddModal2'>
              <p id='comp_reg'>Become a sponsor and support community</p>
              <p id='fill_in'>Fill in the form details. Our manager will contact you to clarify the details.</p>
              <form action='/database/sendRequest' method='POST' className='companyForm'>
                <input type='text' name='name' className='com_inp' placeholder='Company name' required/>
                <input type='text' name='request' className='com_inp' placeholder='Company request' required/>
                  <input type='text' name='industry' className='com_inp' placeholder='Industry' required/>
                  <input type='text' name='solved' className='com_inp' placeholder='Problem solved' required/>
                  <input type='text' name='description' className='com_inp' placeholder='Company description' required/>
                  <input type='text' name='email' className='com_inp' placeholder='Contact Email' required/>
                  <input type='text' name='phone' className='com_inp' placeholder='Phone number' required/>
                  <input type='text' name='password' className='com_inp' placeholder='Your password' required/>
                  <input type='text' name='jurisdiction' className='com_inp' placeholder='Jurisdiction' required/>
                  <input type='hidden' name='vacs' value=''/>
                  <input type='hidden' name='hrs' value=''/>
                  <input type='hidden' name='profileImage' value=''/>
                  <input type='hidden' name='docs' value=''/>
                  <input type='hidden' name='show' value='yes'/>
                  <input type='hidden' name='showVacs' value='yes'/>
              <button type='submit' id='req_but'>Request</button>
              </form>
              <p id='by_click' className='forCompReg'>By clicking on the «Request» button you confirm your consent to
              the processing of data and agree to the privacy policy</p>
            </div>
            <span id='close2' className='closeDataModal2' ref={this.cl2} onClick={this.closeModal}><img src={close} /></span>
          </div>
        </div>

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
              <div className='becomeSponsor' onClick={this.closeModal}>
                  Become a sponsor and support community
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Sponsors;
