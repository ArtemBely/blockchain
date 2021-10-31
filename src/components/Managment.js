import React from 'react';
import { NavLink } from 'react-router-dom';
import close from '../../public/images/Union.svg';
import close1 from '../../public/images/Cross 16px.svg';
import girl from '../../public/images/Rectangle 204.png';
import ln from '../../public/images/Vector (1).svg';
import uploadImg from '../../public/images/Down 16px.svg';
import userByDefault from '../../public/images/user.png';


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
    this.imgProf = React.createRef();
    this.wrapInp2 = React.createRef();
    this.newImg = React.createRef();
  }

  changeColor = () => {
    let int = setInterval(() => {
      if(this.imgProf.current && this.imgProf.current.value.length > 0) {
        this.wrapInp2.current.classList.add('changeColorClass');
        this.newImg.current.style.display = 'none';
        clearInterval(int);
      }
    }, 700);
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
                           <p className='photoHr'><img src={hr.hrPhoto ? hr.hrPhoto : userByDefault} className='eachHrPerson'/>
                           <a href={'/profile/deleteHr/' + hr._id} className='cl_prof'>
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
              <form action='/profile/sendHr' method='POST' className='companyForm' encType="multipart/form-data">
                <input type='text' name='fullName' className='com_inp' placeholder='Full name' required/>
                  <input type='text' name='position' className='com_inp' placeholder='Position' required/>
                  <input type='text' name='professional' className='com_inp' placeholder='Professional interest' required/>
                  <input type='checkbox' name='experience2' id='check1' className='com_inp check1Class' />
                  <label htmlFor="check1" id='lblFor1' className='labelForSpeakers'>Available as speaker</label>
                  <input type='checkbox' name='experience3' id='check2' className='com_inp check1Class' />
                  <label htmlFor="check2" id='lblFor2' className='labelForSpeakers'>Available as advisor</label>
                  <input type='text' name='details' className='com_inp publDet' placeholder='Public contact details' required/>
                  <input type='text' name='linkedin' className='com_inp publDet' placeholder='Linkedin' required/>
                  <p className='addPersonProfile' ref={this.wrapInp2}><input type='file' name='hrPhoto' id='addPhotoPerson' onClick={this.changeColor} ref={this.imgProf}/>
                  {this.imgProf.current && this.imgProf.current.value.length > 0 ? 'Change photo' : 'Add photo'}
                  <img src={uploadImg} id='imgUp2' ref={this.newImg}/></p>
               <button type='submit' id='req_but' className='profAddButton'>Send</button>
              </form>
              <p id='by_click' className='profAddButton2'>By clicking on the «Request» button you confirm your consent to
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
