import React from 'react';
import { getCompanies } from './fetchData';

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
             {this.state.company.map(comp => (
               <div className='commComp'>
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
