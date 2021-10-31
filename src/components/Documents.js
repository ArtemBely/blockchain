import React from 'react';
import { NavLink } from 'react-router-dom';
import close from '../../public/images/Union.svg';
import close1 from '../../public/images/Cross 16px.svg';
import close3 from '../../public/images/Vector (1) — копия.svg';


class Documents extends React.Component {

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

  openPer = () => {
    this.cl.current.classList.add('disp_change');
  }

  closeModal = () => {
    this.cl.current.classList.contains('disp_change') ?
    this.cl.current.classList.remove('disp_change') :
    this.cl.current.classList.add('disp_change');
  }

  showDocs = () => {
    if(this.state.user && typeof this.state.user.docs[0] == 'object') {
      return(
        <div className='wrapOfDocs'>
           {this.state.user.docs.map(doc => (
            <div className='eachDoc'>
               <p className='nameOfDoc1'>{doc.nameOfDoc}</p>
               <p className='descrOfDoc1'>{doc.descrOfDoc}</p>
               <p className='eachCloseDocs'><a href={'/profile/deleteDocs/' + doc._id}>
               <img src={close3} /></a></p>
            </div>
           ))}
        </div>
      )
    }
  }

    render() {
      return (
        <div className='wrap_docs'>

          <div className='wrap_modal1_dark' ref={this.cl}>
            <div className='wrap_modal1 modDoc2'>
              <div className='modal1 profDoc2'>
                <p id='comp_reg'>Add new document</p>
                <p id='fill_in'>Fill in the form details.</p>
                <form action='/profile/sendDoc' method='POST' className='companyForm'>
                  <input type='text' name='nameOfDoc' className='com_inp' placeholder='Title of document' required/>
                    <input type='text' name='descrOfDoc' className='com_inp' placeholder='Description' required/>
                    <input type='text' name='linkToDoc' className='com_inp' placeholder='Link' required/>
                 <button type='submit' id='req_but'>Send</button>
                </form>
                <p id='by_click' className='clickForDocs'>By clicking on the «Request» button you confirm your consent to
                 the processing of data and agree to the privacy policy</p>
              </div>
              <span id='close2' className='profClose docsClose' ref={this.cl2} onClick={this.closeModal}><img src={close} /></span>
             </div>
            </div>

            <div id='docs1'>Documents</div>
            <p id='crNew' onClick={this.openPer}>Create new doc <img src={close3} id='spanPlus1' /></p>
            {this.showDocs()}
        </div>
      )
    }
}

export default Documents;
