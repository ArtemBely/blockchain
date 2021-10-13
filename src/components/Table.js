import React from 'react';
import { getCompanies } from './fetchData';
import arrow from '../../public/images/Vector 8.svg';
import filter from '../../public/images/Union — копия.svg';
import searching from '../../public/images/Group 33.svg';

class Table extends React.Component{

  constructor() {
    super()

    this.state = {
      company: []
    }
  }

      componentDidMount() {
        if(this.state.company && this.state.company.length < 1) {
          getCompanies()
          .then(company => this.setState({ company: company }))
          .catch(err => console.log(err))
        }
          setTimeout(() => {
            if(this.state.company) console.log(this.state.company);

          }, 300);
       }

  eachComp = () => {
    if(this.state.company) {
      return(
          <div className='inside_table'>
          <div className='searchingBlock'>
             <span className='searchingType'>Company <img src={arrow} className='arrowDown'/></span>
             <span className='searchingType'>Request<img src={arrow} className='arrowDown'/></span>
             <span className='searchingType'>Industry<img src={arrow} className='arrowDown'/></span>
             <span className='searchingType'>Jurisdiction<img src={arrow} className='arrowDown'/></span>
             <span className='searchingType'>Hiring<img src={arrow} className='arrowDown'/></span>
             <span className='searchingType'>Filter<img src={filter} className='arrowDown'/></span>
             <span><img src={searching} className='searchCompany'/><input type='text' id='findComp'/></span>
          </div>
             {this.state.company.map((comp, index, arr) => (
               <div className='commComp' style={{
                 borderRadius: index == 0 ? "20px 20px 0px 0px" :
                               index == arr.length - 1 ? "0px 0px 20px 20px" :
                               null
               }}>
                   <p className='eachData'>{comp.name}</p>
                   <p className='eachData'>{comp.request}</p>
                   <p className='eachData'>{comp.industry}</p>
                   <p className='eachData'>{comp.jurisdiction}</p>
                   <p className='eachData'>{typeof comp.hrs[0] == 'object' ? 'yes' : 'null'}</p>
                   <p className='eachData'>{comp.email}</p>
               </div>
             ))}
          </div>
      )
    }
  }

  render() {
    return(
      <div className='wrapTable'>
         <div className='tableMain'>
            {this.eachComp()}
         </div>
      </div>
    )
  }
}

export default Table;
