import React from 'react';
import { getCompanies } from './fetchData';
import arrow from '../../public/images/Vector 8.svg';
import filter from '../../public/images/Union — копия.svg';
import close3 from '../../public/images/Vector (1) — копия 3.svg';
import searching from '../../public/images/Group 33.svg';
import person from '../../public/images/Rectangle 204.png';
import lnk from '../../public/images/Vector (1).svg';
import userByDefault from '../../public/images/user.png';
import Footer from './Footer';

class Table extends React.Component{

  constructor() {
    super()

    this.state = {
      company: [],
      query: '',
    }

    this.card = React.createRef();
    this.tabl = React.createRef();
    this.dataFooter = React.createRef();

    this.handleChange = this.handleChange.bind(this);
  }

      componentDidMount() {
        if(this.state.company && this.state.company.length < 1) {
          getCompanies()
          .then(company => this.setState({ company: company }))
          .catch(err => console.log(err))
        }
          /*setTimeout(() => {
            if(this.state.company) console.log(this.state.company);

          }, 300);*/
       }

        handleChange(event) {  
          let query = event.target.value;  
          let filteredComp = this.state.company.filter(comp => {
            return comp.name.toLowerCase().includes(query.toLowerCase());
          });

          this.setState({
            company: filteredComp,
            query: query,
          });

          if (!query) {
            getCompanies()
              .then(company => this.setState({ company: company }))
              .catch(err => console.log(err))
          }
        }  


  eachComp = () => {
    if(this.state.company) {
      return(
         <div className='inside_table'>
          <div className='searchingBlock'>
             <span className='searchingType com1'>Company <img src={arrow} className='arrowDown'/></span>
             <span className='searchingType req2'>Request<img src={arrow} className='arrowDown'/></span>
             <span className='searchingType ind2'>Industry<img src={arrow} className='arrowDown'/></span>
             <span className='searchingType jur1'>Jurisdiction<img src={arrow} className='arrowDown'/></span>
             <span className='searchingType hir1'>Hiring<img src={arrow} className='arrowDown'/></span>
             <span className='searchingType fil1'>Filter<img src={filter} className='arrowDown'/></span>
             <span className='loop1'><img src={searching} className='searchCompany'/><input value={this.state.query} onChange={this.handleChange} type='text' id='findComp'/></span>
          </div>
             {this.state.company.map((comp, index, arr) => (
               <div className={'commComp ' + 'company' + index}
                   style={{
                    borderRadius: index == 0 ? "20px 20px 0px 0px" :
                                  index == arr.length - 1 ? "0px 0px 20px 20px" :
                                  null
                  }} ref={this.card} onClick={function() {
                      document.querySelector(`.company${index}`).classList.toggle('showCard');
                      let i;
                      let companyTable = document.querySelectorAll('.commComp');
                      for(i=0; i<companyTable.length; i++) {
                        if(companyTable[i].classList.contains('showCard')) {
                          document.querySelector('.wrapTable').classList.add('wrapTable2');
                          document.querySelector('#wrap_data_footer').classList.add('forDataFooter');
                          document.querySelector('.inside_table').classList.add('for_inside_table');
                          break;
                        }
                        document.querySelector('.wrapTable').classList.remove('wrapTable2');
                        document.querySelector('#wrap_data_footer').classList.remove('forDataFooter');
                        document.querySelector('.inside_table').classList.remove('for_inside_table');
                        console.log(companyTable[i]);
                      }
                    }
                  }>

                   <div className={'shortVariant ' + 'eachProfile' + index} onClick={() => {     // --> show by default, disappear in full view
                     document.querySelector(`.eachProfile${index}`).classList.add('dispNone');
                     document.querySelector(`.eachProfileLong${index}`).classList.add('dispGrid');
                   }}>
                         <p className='eachData com2'>{comp.name}</p>
                         <p className='eachData req1'>{comp.request}</p>
                         <p className='eachData ind1'>{comp.industry}</p>
                         <p className='eachData jur1'>{comp.jurisdiction}</p>
                         <p className='eachData jur1 jur2'>{typeof comp.hrs[0] == 'object' ? 'yes' : 'no'}</p>
                         <p className='eachData mail1'>{comp.email}</p>
                   </div>

                   <div className={'longVariant ' + 'eachProfileLong' + index} onClick={() => {   // --> show in full view, disappear by default
                     document.querySelector(`.eachProfile${index}`).classList.remove('dispNone');
                     document.querySelector(`.eachProfileLong${index}`).classList.remove('dispGrid');
                   }}>
                         <p className='eachData2 fullAppearTitles'>{comp.name}
                           <p className='wrap_compProfiles'><img src={comp.profileImage ? comp.profileImage  : null} id='compProfilesImg' style={{
                             display: comp.profileImage ? 'block' : 'none'
                           }}/></p>
                           </p>
                           <p className='fullAppearTitles'>Request
                             <p className='eachData2 businessGrowth'>{comp.request}</p>
                           </p>

                           <p className='fullAppearTitles'>Industry
                              <p className='eachData2'>{comp.industry}</p>
                           </p>

                           <p className='fullAppearTitles'>Jurisdiction
                              <p className='eachData2'>{comp.jurisdiction}</p>
                           </p>

                           <p className='fullAppearTitles'>Hiring
                              <p className='eachData2' style={{
                                textDecoration: 'underline'
                              }}>
                              {typeof comp.hrs[0] == 'object' ? 'Yes' : 'No'}
                              </p>
                           </p>

                           <p className='closeComp'><img src={close3} /></p>

                           <p className='fullAppearTitles'>Company description
                              <p className='eachData2 popup-paragraph'>{comp.description}</p>
                           </p>

                           <p className='fullAppearTitles'>Problem solved
                               <p className='eachData2 popup-paragraph'>{comp.solved}</p>
                           </p>

                           <p className='fullAppearTitles'>Contacts
                               <p className='eachData2'>{comp.phone}</p>
                               <p className='eachData2'>{comp.email}</p>
                           </p>

                           <div className='manageFull'><span className='textMnFull'>Managment and representatives</span>
                                {comp.hrs.map(hr => (
                                  <div className='eachFull'>
                                    <p className='fullImage'><img src={hr.hrPhoto != null ? hr.hrPhoto : userByDefault} className='eachFullPerson' /></p>
                                    <p className='fullName'>{hr.fullName}</p>
                                    <p className='fullDescr'>{hr.details}</p>
                                    <img src={lnk} className='lnkFull'/>
                                    <p className='fullMail'>{hr.linkedin}</p>
                                  </div>
                                ))}
                           </div>

                           <div className='wrap_fullDocs'>
                               <span id='titDocFull'>Documents</span>
                               {comp.docs.map(doc => (
                                 <p className='eachFullDoc'>
                                     <p className='fullNameOfDoc fullNameOfDoc2'>{doc.nameOfDoc}</p>
                                     <p className='fullDescrOfDoc fullDescrOfDoc2'>{doc.descrOfDoc}</p>
                                 </p>
                               ))}
                           </div>

                   </div>
              </div>
          ))}
        </div>
       )
    }
  }

  render() {
    return(
      <div className='wrapTable' ref={this.tabl}>
         <div className='tableMain'>
            {this.eachComp()}
         </div>
         <div id='wrap_data_footer' ref={this.dataFooter}><Footer /></div>
      </div>
    )
  }
}

export default Table;
