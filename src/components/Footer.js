import React from 'react';
import { NavLink } from 'react-router-dom';
import sphere1 from '../../public/images/Ellipse 47.svg'
import sphere2 from '../../public/images/Ellipse 48.svg'
import anchor from '../../public/images/Polygon 6.svg';
import close from '../../public/images/Union.svg';

class Footer extends React.Component {

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
      <div className='wrap_footer'>

      <div className='wrap_modal1_dark' ref={this.cl}>
       <div className='wrap_modal1'>
         <div className='modal1'>
           <p id='comp_reg'>Signin form</p>
           <form action='/database/signin' method='POST' className='companyForm'>
              <input type='email' name='email' placeholder='Enter your email' className='com_inp' required/>
              <input type='password' name='password' placeholder='Enter your password' className='com_inp' required/>
              <button type='submit' id='req_but'>Login</button>
           </form>
         </div>
         <span id='close2' ref={this.cl2} onClick={this.closeModal}><img src={close} /></span>
        </div>
      </div>

        <div className='footer'>
            <p className='wrap_spheres'>
              <img src={sphere1} id='sphere1'/>
                <img src={sphere2} id='sphere2'/>
              <p className='global_bn'>Global Blockchain Network</p>
            </p>
            <div className='wrap_linkes_footer'>
               <NavLink to='#' className='each_footer'>Event info</NavLink>
                 <NavLink to='#' className='each_footer'>Facebook</NavLink>
                   <NavLink to='#' className='each_footer'>Conferences</NavLink>
                     <NavLink to='#' className='each_footer'>Instagram</NavLink>
                       <NavLink to='#' className='each_footer'>Participants</NavLink>
                       <NavLink to='#' className='each_footer'>YouTube</NavLink>
                     <NavLink to='#' className='each_footer'>Floor plan</NavLink>
                   <NavLink to='#' className='each_footer'>Linkedin</NavLink>
                 <NavLink to='#' className='each_footer'>Stand samples</NavLink>
               <NavLink to='#' className='each_footer'>Medium</NavLink>
            </div>
            <div className='wrap_contacts'>
              <p className='each_footer'>+41 855 456 54 65</p>
              <p className='each_footer' id='email'>example@site.com</p>
              <p className='each_footer' id='mrCnt'>More contacts</p>
              <p className='each_footer' id='mapSite'>Map site</p>
              <p className='each_footer' id='loginFor' onClick={this.closeModal}>Login for partners</p>
            </div>
            <div id='second_foot'></div>
            <a href='#circle1' id='anchor_link'><img src={anchor} id='anchor' /></a>
        </div>
      </div>
    )
  }
}

export default Footer;
