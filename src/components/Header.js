import React from 'react';
import { NavLink } from 'react-router-dom';
import circle1 from '../../public/images/Ellipse 47.png';
import circle2 from '../../public/images/Ellipse 48.png';

class Header extends React.Component {

  constructor() {

    super()

    this.close1 = React.createRef();
    this.close2 = React.createRef();
    this.burger = React.createRef();
  }

  turnModal = () => {
    this.close1.current.classList.toggle('turn1');
    this.close2.current.classList.toggle('turn2');
    this.burger.current.classList.toggle('show_burber');
  }

  render() {
    return(
      <div className='wrap_mainHeader'>
        <div className='wrap_header'>
             <NavLink className='header__logo' to='/' exact>
              <p className='wrap_circle'>
                  <img src={circle1} id='circle1'/>
                  <img src={circle2} id='circle2'/>
              </p>
              <p id={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'global_black' : 'global'}>Global Blockchain Network</p>
             </NavLink>
             {/* <NavLink to='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'nav_header_black' : 'nav_header'} activeClassName='active_header' id='database'>Conference</NavLink> */}
             <NavLink to='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'nav_header_black' : 'nav_header'} activeClassName='active_header' id='conference'>Database</NavLink>
             <NavLink to='/hr' className={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'nav_header_black' : 'nav_header'} activeClassName='active_header' id='partners'>HR</NavLink>
             {/* <NavLink to='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'nav_header_black' : 'nav_header'} activeClassName='active_header' id='header_about'>Сommunity news</NavLink> */}
             {/* <NavLink to='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'nav_header_black' : 'nav_header'} activeClassName='active_header' id='blog'>Blog</NavLink> */}
             {/* <NavLink to='/database' className={typeof window !== "undefined" && window.location.pathname == '/profile' ? 'nav_header_black' : 'nav_header'} id='cont' activeClassName='active_header' id='header_contacts'>About GBN</NavLink> */}
             <p></p>
             <div className='closeBurger' onClick={this.turnModal}>
                 <p className='close1' ref={this.close1}></p>
                 <p className='close1 clDown' ref={this.close2}></p>
             </div>
        </div>
        <div className='wrap_burger' ref={this.burger}>
            <div className='burger'>
                {/* <NavLink to='/database' className='mobileNav'>Conference</NavLink> */}
                <NavLink to='/database' className='mobileNav'>Database</NavLink>
                <NavLink to='/hr' className='mobileNav'>HR</NavLink>
                <NavLink to='/database' className='mobileNav'>Our people</NavLink>
                {/* <NavLink to='/database' className='mobileNav'>Blog</NavLink>
                <NavLink to='/database' className='mobileNav'>About GBN</NavLink> */}
                {/* <NavLink to='/database' className='mobileNav'>Сommunity news</NavLink> */}
                <NavLink to='/database' className='mobileNav'>FAQ</NavLink>
            </div>
        </div>
      </div>
    )
  }
}

export default Header;
