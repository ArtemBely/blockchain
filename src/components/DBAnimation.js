import React from 'react';
import { NavLink } from 'react-router-dom';
import close from '../../public/images/Union.svg';

class DBAnimation extends React.Component {

  constructor() {
    super()

    this.cl2 = React.createRef();
    this.cl = React.createRef();
  }

  closeModal = () => {
    this.cl.current.classList.contains('disp_change') ?
    this.cl.current.classList.remove('disp_change') :
    this.cl.current.classList.add('disp_change');
  }

  render() {
    return (
      <div className='wrapDB'>

          <div className='wrap_modal1_dark' ref={this.cl}>
           <div className='wrap_modal1'>
             <div className='modal1'>
               <p id='comp_reg'>Company registration</p>
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
                 <input type='hidden' name='docs' value=''/>
                 <input type='hidden' name='show' value='yes'/>
               <button type='submit' id='req_but'>Request</button>
               </form>
               <p id='by_click'>By clicking on the «Request» button you confirm your consent to
                the processing of data and agree to the privacy policy</p>
             </div>
             <span id='close2' ref={this.cl2} onClick={this.closeModal}><img src={close} /></span>
            </div>
          </div>

         <div className='dB'>
            <div className='firstDb'>
                <p className='glDb'>Global Blockchain Network database</p>
                  <p className='comDb'>Community of open blockchain companies</p>
                  <p className='addDb' onClick={this.closeModal}>Add company →</p>
                <NavLink to='#' className='moreDb'>More about GBN →</NavLink>
            </div>
            <div className='secondDb'>
              animation
            </div>
         </div>
      </div>
    )
  }
}

export default DBAnimation;