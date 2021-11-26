import React from 'react';
import { NavLink } from 'react-router-dom';
import person from '../../public/images/Rectangle 34.png';
import person2 from '../../public/images/Rectangle 43.svg';
import person3 from '../../public/images/Rectangle 42.svg';

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
             {/* <NavLink to='#' className='seeAll'>See all →</NavLink> */}
           </p>
           <div className='each_person' id='person01'>
            <p className='grad_each' ref={this.square}></p>
             <img src={person} id='img_person' />
                <p className='name_of_person'>Tempor cupidata</p>
              <p className='descr_of_person'>Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim</p>
           </div>
           <div className='each_person' id='person02'>
            <p className='grad_each' ref={this.square}></p>
             <img src={person2} id='img_person' />
                <p className='name_of_person'>Tempor cupidata</p>
              <p className='descr_of_person'>Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim</p>
           </div>
           <div className='each_person' id='person03'>
            <p className='grad_each' ref={this.square}></p>
             <img src={person3} id='img_person' />
                <p className='name_of_person'>Tempor cupidata</p>
              <p className='descr_of_person'>Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim</p>
           </div>
           <div className='each_person' id='person04'>
            <p className='grad_each' ref={this.square}></p>
             <img src={person} id='img_person' />
                <p className='name_of_person'>Tempor cupidata</p>
              <p className='descr_of_person'>Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim</p>
           </div>
           <div className='each_person' id='person05'>
            <p className='grad_each' ref={this.square}></p>
             <img src={person3} id='img_person' />
                <p className='name_of_person'>Tempor cupidata</p>
              <p className='descr_of_person'>Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim</p>
           </div>
           <div className='each_person' id='person06'>
            <p className='grad_each' ref={this.square}></p>
             <img src={person2} id='img_person' />
                <p className='name_of_person'>Tempor cupidata</p>
              <p className='descr_of_person'>Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim</p>
           </div>
           <div className='each_person' id='person07'>
            <p className='grad_each' ref={this.square}></p>
             <img src={person} id='img_person' />
                <p className='name_of_person'>Tempor cupidata</p>
              <p className='descr_of_person'>Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim</p>
           </div>
           <div className='each_person' id='person08'>
            <p className='grad_each' ref={this.square}></p>
             <img src={person2} id='img_person' />
                <p className='name_of_person'>Tempor cupidata</p>
              <p className='descr_of_person'>Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim</p>
           </div>
           <div className='each_person' id='person09'>
            <p className='grad_each' ref={this.square}></p>
             <img src={person3} id='img_person' />
                <p className='name_of_person'>Tempor cupidata</p>
              <p className='descr_of_person'>Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim</p>
           </div>
           <div className='each_person' id='person10'>
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
