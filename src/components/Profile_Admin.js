import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import circle1 from '../../public/images/Ellipse 47.png';
import circle2 from '../../public/images/Ellipse 48.png';
import close from '../../public/images/Union.svg';

class Profile_Admin extends React.Component {

  constructor() {
    super()

    let user;
    let candidates
    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
      candidates = window.__INITIAL_DATA__;
    }

    this.state = {
      user,
      candidates
    }

    this.close1 = React.createRef();
    this.close2 = React.createRef();
    this.burger = React.createRef();

  }

  turnModal = () => {
    this.close1.current.classList.toggle('turn1');
    this.close2.current.classList.toggle('turn2');
    this.burger.current.classList.toggle('show_burber');
  }

  showCandidates = () => {
    if(this.state.candidates) {
      return (
        <div className='wrapAll_cand'>
           {this.state.candidates.map(candidate => (
             <p className='wrap_cand'>
                 <p className='each_cand'><span className='titles_of'>Company name</span>{candidate.name}</p>
                 <p className='each_cand'><span className='titles_of'>Email</span>{candidate.email}</p>
                 <p className='each_cand'><span className='titles_of'>Language</span>{candidate.jurisdiction}</p>
                 <p className='each_cand' id='full_descr'><span className='titles_of'>Company description</span>{candidate.description}</p>

                 <a href={'/profile_admin/approve/' + candidate._id} className='approve_btn'>Одобрить</a>
                 <a href={"mailto:" + candidate.email} className='info_btn'>Запросить информацию</a>
                 <a href={"mailto:" + candidate.email} className='reject_btn'>Написать отказ</a>
             </p>
           ))}
        </div>
      )
    }
  }

  render() {
    return (
      <p className='wrap_profile_admin'>
        <p className='wrap_header head_forProfile'>
             <p className='wrap_circle circlesProfile'>
                <img src={circle1} id='circle1' className='downBall0'/>
                <img src={circle2} id='circle2' className='downBall'/>
             </p>
             <p id={typeof window !== "undefined" && window.location.pathname == '/profile_admin' ? 'global_black' : 'global'}>Global Blockchain Network</p>
               <a href='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile_admin' ? 'nav_header_black' : 'nav_header'} id='database'>Conference</a>
               <a href='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile_admin' ? 'nav_header_black data2' : 'nav_header'} id='conference'>Database</a>
               <a href='/hr' className={typeof window !== "undefined" && window.location.pathname == '/profile_admin' ? 'nav_header_black hr2' : 'nav_header'} id='partners'>HR</a>
               <a href='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile_admin' ? 'nav_header_black' : 'nav_header'} id='header_about'>Сommunity news</a>
               <a href='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile_admin' ? 'nav_header_black' : 'nav_header'} id='blog'>Blog</a>
               <a href='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile_admin' ? 'nav_header_black' : 'nav_header'} id='header_contacts'>About GBN</a>
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

        <div className='profile_admin'>
              <p className='admins_account'>Admin's account</p>
              <div className='wrap_common_links'>
                 <NavLink to='/profile_admin' className='common_links'>New companies</NavLink>
                 <NavLink to='/profile_admin' className='common_links' id='people_admin'>People</NavLink>
                 <NavLink to='/profile_admin' className='common_links' id='part_admin'>Participating companies</NavLink>
              </div>
              {this.showCandidates()}
        </div>

      <p className='wrpa_admin_footer'><Footer /></p>
      </p>
    )
  }
}

export default Profile_Admin;
