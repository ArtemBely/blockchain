import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import circle1 from '../../public/images/Ellipse 47.png';
import circle2 from '../../public/images/Ellipse 48.png';
import close from '../../public/images/Union.svg';
import uploadImg from '../../public/images/Down 16px.svg';
import Managment from './Managment';
import Documents from './Documents';
import Footer from './Footer';
import Header from './Header';

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
    this.inp = React.createRef();
    this.underInp = React.createRef();
    this.close1 = React.createRef();
    this.close2 = React.createRef();
    this.burger = React.createRef();
    this.beforeLock = React.createRef();
    this.switchLock = React.createRef();
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
                  <div className='wrap_eachVac2'>
                      <p className='each_vac'>{vac.location}</p>
                      <a href={'/profile/delete/' + vac._id} id='clVac'><img src={close} /></a>
                  </div>
                ))}
        </div>
      )
    }
  }

  checkInp = () => {
    let a = setInterval(() => {
      if(this.inp.current.value.length > 0) {
        this.underInp.current.classList.add('forAvatar');
        clearInterval(a);
      }
    }, 700);
  }
  turnModal = () => {
    this.close1.current.classList.toggle('turn1');
    this.close2.current.classList.toggle('turn2');
    this.burger.current.classList.toggle('show_burber');
  }

  changeStatus = () => {
      document.querySelector('.switch').classList.toggle('switchLock');
      document.querySelector('.slider').classList.toggle('beforeLock');
  }

  showSwitch = () => {
    if(this.state.user) {
      return (
        <a href={'/profile/changeStatus/' + this.state.user._id}>
          <p className={this.state.user.showVacs == 'no' ? 'switch switchLock' : 'switch'}>
          <span className={this.state.user.showVacs == 'no' ? 'slider beforeLock' : 'slider'}></span>
        </p></a>
      )
    }
  }

  render() {
    return(
      <div className='wrap_profile'>


            <div className='wrap_title'>

                <p className='wrap_header head_forProfile'>
                     <p className='wrap_circle circlesProfile'>
                        <img src={circle1} id='circle1'/>
                        <img src={circle2} id='circle2'/>
                     </p>
                     <p id={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'global_black' : 'global'}>Global Blockchain Network</p>
                       <a href='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'nav_header_black' : 'nav_header'} id='database'>Conference</a>
                       <a href='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'nav_header_black' : 'nav_header'} id='conference'>Database</a>
                       <a href='/hr' className={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'nav_header_black' : 'nav_header'} id='partners'>HR</a>
                       <a href='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'nav_header_black' : 'nav_header'} id='header_about'>Сommunity news</a>
                       <a href='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'nav_header_black' : 'nav_header'} id='blog'>Blog</a>
                       <a href='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'nav_header_black' : 'nav_header'} id='header_contacts'>About GBN</a>
                     <p></p>
                     <div className='closeBurger' onClick={this.turnModal}>
                         <p className='close1 darkBurger' ref={this.close1}></p>
                         <p className='close1 clDown darkBurger' ref={this.close2}></p>
                     </div>
                </p>
                <div className='wrap_burger' ref={this.burger}>
                    <div className='burger'>
                        <NavLink to='/database' className='mobileNav'>Conference</NavLink>
                        <NavLink to='/database' className='mobileNav'>Database</NavLink>
                        <NavLink to='/hr' className='mobileNav'>HR</NavLink>
                        <NavLink to='/database' className='mobileNav'>Our people</NavLink>
                        <NavLink to='/database' className='mobileNav'>Blog</NavLink>
                        <NavLink to='/database' className='mobileNav'>About GBN</NavLink>
                        <NavLink to='/database' className='mobileNav'>Сommunity news</NavLink>
                        <NavLink to='/database' className='mobileNav'>FAQ</NavLink>
                    </div>
                </div>

                <div className='title_of'>
                    <p id='titleIn'>{this.state.user ? this.state.user.name : null}</p>
                    <p id='publIn'>Publish a company in a shared database</p>
                    <p className='wrap_linksProf'>
                    <NavLink to='#' className='prof_reg'>Preregistration for the conference</NavLink>
                    <NavLink to='#' className='prof_reg'>Apply for sponsorship</NavLink>
                    <NavLink to='#' className='prof_reg'>Contact the manager </NavLink>
                    </p>
                </div>
            </div>
            <div className='companyCard'>

              <div className='wrap_modal1_dark' ref={this.cl}>
                <div className='wrap_modal1 modHr2'>
                  <div className='modal1 profHr2'>
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
                    <p id='by_click' className='reqHr'>By clicking on the «Request» button you confirm your consent to
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

                              <form method="POST" action="/profile/uploadProfileImage" className="forma" encType="multipart/form-data">
                                  <p id='impComp'>{this.state.user && this.state.user.profileImage != null ? "Change company logo " : "Choose company logo "}
                                  <input type='file' name='cover' className='fileUpload' ref={this.inp} onClick={this.checkInp}/>
                                  <img src={uploadImg} id='logoComp'/>
                                  </p>
                                  <button type='submit' className='sendAvatar' ref={this.underInp}>Import logo</button>
                              </form>

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

                        {this.showSwitch()}

                        <NavLink to='#' id='navHr' onClick={this.openVac}>Create new vacancy +</NavLink>
                   </div>
                   {this.vacancies()}
                   <div id='hrHelp'>HR-help</div>
              </div>
          </div>
          <Managment />
          <Documents />
          <div className='wrap_footer_profile'><Footer /></div>
      </div>
    )
  }
}

export default Profile;
