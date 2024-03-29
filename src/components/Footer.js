import React from 'react';
import { NavLink } from 'react-router-dom';
import sphere1 from '../../public/images/Ellipse 47.svg'
import sphere2 from '../../public/images/Ellipse 48.svg'
import anchor from '../../public/images/Polygon 6.svg';
import close from '../../public/images/Union.svg';
import { history } from 'history';

class Footer extends React.Component {

  constructor() {

    super()

    let user;
    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
    }

    this.state = {
      user
    }

    this.cl2 = React.createRef();
    this.cl = React.createRef();
  }

  closeModal = () => {
    this.cl.current.classList.contains('disp_change') ?
    this.cl.current.classList.remove('disp_change') :
    this.cl.current.classList.add('disp_change');
  }

  logOut = () => {
    window.location.replace('/profile/logout');
  }

  toHomePage ()
  {
    history.push('/');
  }

  render() {
    return (
      <div className='wrap_footer'>

      <div className='wrap_modal1_dark' ref={this.cl}>
       <div className='wrap_modal1 modalSignIn'>
         <div className='modal1 insideSignIn'>
           <p id='comp_reg'>Signin form</p>
           <form action='/database/signin' method='POST' className='companyForm signInForm'>
              <input type='email' name='email' placeholder='Enter your email' className='com_inp' required/>
              <input type='password' name='password' placeholder='Enter your password' className='com_inp' required/>
              <button type='submit' id='req_but'>Login</button>
           </form>
         </div>
         <span id='close2' className='signInClose' ref={this.cl2} onClick={this.closeModal}><img src={close} /></span>
        </div>
      </div>

        <div className='footer'>
            <NavLink className='wrap_spheres' to={{ pathname: `/`, state: 0 }} /*onClick={this.toHomePage}*/>
              <img src={sphere1} id='sphere1'/>
              <img src={sphere2} id='sphere2'/>
              <p className='global_bn'>Global Blockchain Network</p>
            </NavLink>
            <div className='wrap_linkes_footer'>
               <NavLink to='/Database' className='each_footer'>Database</NavLink>
                 {/* <NavLink to='#' className='each_footer'>Our people</NavLink>
                   <NavLink to='#' className='each_footer'>Conferences</NavLink> */}
                     {/* <NavLink to='#' className='each_footer'>Blog</NavLink> */}
                       <NavLink to='/HR' className='each_footer' id='hr_foot'>HR</NavLink>
                       {/* <NavLink to='#' className='each_footer'>About GBN</NavLink> */}
                     {/* <NavLink to='#' className='each_footer' id='floorPlan'>Floor plan</NavLink>
                   <NavLink to='#' className='each_footer' id='comNews'>Сommunity news</NavLink>
                 <NavLink to='#' className='each_footer' id='standSamples'>Stand samples</NavLink>
               <NavLink to='#' className='each_footer'>FAQ</NavLink> */}
            </div>
            <div className='wrap_contacts'>
              <a href="tel:+41 79 269 53 60" className='each_footer' id='footTel'>+41 79 269 5360</a>
              <a href="mailto:A.Yudina@qlstrategy.ch" className='each_footer' id='email'>A.Yudina@qlstrategy.ch</a>
              {/* <p className='each_footer' id='mrCnt'>More contacts</p> */}
              <p className='each_footer' id='mapSite'>Map site</p>
              <p className='each_footer' id='loginFor' onClick={this.state.user ? this.logOut : this.closeModal}>{this.state.user ? "Logout" : "Login"}</p>
            </div>
            <div id='second_foot'></div>
            <a href='#circle1' id='anchor_link'><img src={anchor} id='anchor' /></a>
        </div>
      </div>
    )
  }
}

export default Footer;
