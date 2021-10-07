import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import circle1 from '../../public/images/Ellipse 47.png';
import circle2 from '../../public/images/Ellipse 48.png';
import close from '../../public/images/Union.svg';
import Managment from './Managment';

class Profile extends React.Component{

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

  closeModal = () => {
    this.cl.current.classList.contains('disp_change') ?
    this.cl.current.classList.remove('disp_change') :
    this.cl.current.classList.add('disp_change');
  }

  openVac = () => {
    this.cl.current.classList.add('disp_change');
  }

  vacancies = () => {
    if(this.state.user) {
      return (
        <div>
            {this.state.user.vasc.map(vac => (
                  <div className='wrap_eachVac'>
                      <p className='each_vac'>{vac.location}</p>
                      <a href={'/profile/delete/' + vac._id} id='clVac'><img src={close} /></a>
                  </div>
                ))}
        </div>
      )
    }
  }

  render() {
    return(
      <div className='wrap_profile'>

            <div className='wrap_title'>
                <div className='title_of'>
                    <p id='titleIn'>{this.state.user ? this.state.user.name : null}</p>
                    <p id='publIn'>Publish a company in a shared database</p>
                    <NavLink to='#' className='prof_reg'>Preregistration for the conference</NavLink>
                    <NavLink to='#' className='prof_reg'>Apply for sponsorship</NavLink>
                    <NavLink to='#' className='prof_reg'>Contact the manager </NavLink>
                </div>
            </div>
            <div className='companyCard'>

              <div className='wrap_modal1_dark' ref={this.cl}>
                <div className='wrap_modal1 modHr'>
                  <div className='modal1 profHr'>
                    <p id='comp_reg'>Add new vacancy</p>
                    <p id='fill_in'>Fill in the form details.</p>
                    <form action='/profile/sendVacancy' method='POST' className='companyForm'>
                      <input type='text' name='location' className='com_inp' placeholder='Location' required/>
                        <input type='text' name='direction' className='com_inp' placeholder='Direction' required/>
                        <input type='text' name='experience' className='com_inp' placeholder='Experience' required/>
                        <input type='text' name='salary' className='com_inp' placeholder='Salary' required/>
                        <input type='text' name='tasks' className='com_inp' placeholder='Tasks' required/>
                        <input type='text' name='requirements' className='com_inp' placeholder='Requirements' required/>
                     <button type='submit' id='req_but'>Send</button>
                    </form>
                    <p id='by_click'>By clicking on the «Request» button you confirm your consent to
                     the processing of data and agree to the privacy policy</p>
                  </div>
                  <span id='close2' className='profClose' ref={this.cl2} onClick={this.closeModal}><img src={close} /></span>
                 </div>
                </div>

               <div className='card1'>
                     <div className='prt1 comPrt'>
                               <p className='titOdCred' id='cCard'>Company card</p>
                               <NavLink to='/profile/edit' className='common_Cred' id='profEd'> Edit </NavLink>
                     </div>
                     <div className='prt2 comPrt'>
                              <p className='titOdCred'>Logo</p>
                              <p id='impComp'>Import company logo</p>
                     </div>
                     <div className='prt3 comPrt'>
                             <p className='titOdCred'>Company request</p>
                             <p className='common_Cred'>{this.state.user ? this.state.user.request : null}</p>
                     </div>
                     <div className='prt4 comPrt'>
                            <p className='titOdCred'>Industry</p>
                            <p className='common_Cred'>{this.state.user ? this.state.user.industry : null}</p>
                     </div>
                     <div className='prt5 comPrt'>
                           <p className='titOdCred'>Jurisdiction</p>
                           <p className='common_Cred'>{this.state.user ? this.state.user.jurisdiction : null}</p>
                     </div>
                     <div className='prt6 comPrt'>
                            <p className='titOdCred'>Company  description</p>
                            <p className='common_Cred'>{this.state.user ? this.state.user.description : null}</p>
                     </div>
                     <div className='prt7 comPrt'>
                           <p className='titOdCred'>Problem solved</p>
                           <p className='common_Cred'>{this.state.user ? this.state.user.solved : null}</p>
                    </div>
                    <div className='prt8 comPrt'>
                          <p className='titOdCred'>Contacts</p>
                          <p className='common_Cred'>{this.state.user ? this.state.user.phone : null}
                          <p className='common_Cred'>{this.state.user ? this.state.user.email : null}</p>
                          </p>
                   </div>
              </div>

              <div className='hr2'>
                   <div className='postVac'>Posting vacancies</div>
                   <div className='blockOfHiring'>
                        <p id='hr1'>Hiring</p>
                        <NavLink to='#' id='navHr' onClick={this.openVac}>Create new vacancy +</NavLink>
                   </div>
                   {this.vacancies()}
                   <div id='hrHelp'>HR-help</div>
              </div>
          </div>
          <Managment />
      </div>
    )
  }
}

export default Profile;
