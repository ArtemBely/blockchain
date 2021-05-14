import React from 'react';
import { NavLink } from 'react-router-dom';
import mobile from '../../public/images/iPhone.svg';
import oculus from '../../public/images/oculus.png';
import macbook from '../../public/images/Macbook.png';
import play from '../../public/images/Play.png';

class MainScreen extends React.Component{
  render() {
    return(
      <div className='wrap_mainScreen'>
        <div className='main_screen'>
            <p></p>
            <div className='blockchain_network'>
               <p id='block_net'>Global Blockchain <br/>Network</p>
               <p id='reality'>New business reality <br/>from virtual to real</p>
               <NavLink to='/join' id='join_for'>Join for us</NavLink>
               <NavLink to='/explore' id='explore'>Explore →</NavLink>
            </div>
            <div className='watch_vr'>
                <p className='watch_inside'>
                   <img src={mobile} id='mobile'/>
                   <img src={oculus} id='oculus'/>
                   <img src={macbook} id='macbook'/>
                   <img src={play} id='play1'/>
                   <NavLink to='/vr_tour' className='vr'>Watch VR-tour</NavLink>
                </p>
            </div>
         </div>
      </div>
    )
  }
}

export default MainScreen;
