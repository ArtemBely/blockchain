import React from 'react';
import { NavLink } from 'react-router-dom';
import person from '../../public/images/Rectangle 34.png';

class People extends React.Component{

  constructor() {

    super()

    this.square = React.createRef();
  }

  render() {
    return(
      <div className='wrap_people'>
        <div className='people'>
           <p className='info_people'>
             <p className='our_people'>Our people</p>
               <p className='description_people'>If you would like to become a member of the GBN personally, feel free to send us more information about yourself. Let the community know you. </p>
             <NavLink to='#' className='seeAll'>See all →</NavLink>
           </p>
           <div className='each_person'>
            <p className='grad_each' ref={this.square}></p>
             <img src={person} id='img_person' />
                <p className='name_of_person'>Tempor cupidata</p>
              <p className='descr_of_person'>Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim</p>
           </div>
        </div>
      </div>
    )
  }
}

export default People;
