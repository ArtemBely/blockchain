import React from 'react';
import { NavLink } from 'react-router-dom';
import close from '../../public/images/Union.svg';
import close1 from '../../public/images/Cross 16px.svg';
import girl from '../../public/images/Rectangle 204.png';
import ln from '../../public/images/Vector (1).svg';


class Managment extends React.Component {

  constructor() {
    super()

    let user;
    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
    }
    this.state = {
      user
    }

    this.cl = React.createRef();
    this.cl2 = React.createRef();
  }

  openPer = () => {
    this.cl.current.classList.add('disp_change');
  }
  closeModal = () => {
    this.cl.current.classList.contains('disp_change') ?
    this.cl.current.classList.remove('disp_change') :
    this.cl.current.classList.add('disp_change');
  }
  showHr = () => {
    if(this.state.user && typeof this.state.user.hrs[0] == 'object') {
      return(
        <div className='wrapOfHr'>
               {this.state.user.hrs.map(hr => (
                      <div className='hr3'>
                           <p className='photoHr'><img src={girl} /><a href={'/profile/deleteHr/' + hr._id} id='cl_prof'>
                           <img src={close1} /></a></p>
                           <p className='nameHr'>{hr.fullName}</p>
                           <p className='detHr'>{hr.details}</p>
                           <p className='lnHr'><img src={ln} /><span className='linHr'>{hr.linkedin}</span></p>
                      </div>
               ))}
        </div>
      )
    }
  }

    render() {
      return (
        <div className='wrap_mng'>

        <div className='wrap_modal1_dark' ref={this.cl}>
          <div className='wrap_modal1 modHr'>
            <div className='modal1 profHr'>
              <p id='comp_reg'>Add new person</p>
              <p id='fill_in'>Fill in the form details.</p>
              <form action='/profile/sendHr' method='POST' className='companyForm'>
                <input type='text' name='fullName' className='com_inp' placeholder='Full name' required/>
                  <input type='text' name='position' className='com_inp' placeholder='Position' required/>
                  <input type='text' name='professional' className='com_inp' placeholder='Professional interest' required/>
                  <input type='checkbox' name='experience2' id='check1' className='com_inp' />
                  <label htmlFor="check1">Available as speaker</label>
                  <input type='checkbox' name='experience3' id='check2' className='com_inp' />
                  <label htmlFor="check2">Available as advisor</label>
                  <input type='text' name='details' className='com_inp' placeholder='Public contact details' required/>
                  <input type='text' name='linkedin' className='com_inp' placeholder='Linkedin' required/>
               <button type='submit' id='req_but'>Send</button>
              </form>
              <p id='by_click'>By clicking on the «Request» button you confirm your consent to
               the processing of data and agree to the privacy policy</p>
            </div>
            <span id='close2' className='profClose2' ref={this.cl2} onClick={this.closeModal}><img src={close} /></span>
           </div>
          </div>

            <div className='mng'>
              <p id='manage_title'>Managment and representatives</p>
                <p id='cr_newP' onClick={this.openPer}>Create new person <span id='plus_pr'>+</span></p>
                {this.showHr()}
            </div>
        </div>
      )
    }
}

export default Managment;
