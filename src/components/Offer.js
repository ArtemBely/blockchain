import React from 'react';
import loope from '../../public/images/Ellipse 40.svg';
import { getVacancies } from './fetchData';


class Offer extends React.Component {

  constructor() {
    super()

    this.state = {
      vacancies: [],
      mergedVacs: []
    }
  }

      componentDidMount() {
        if(this.state.vacancies && this.state.vacancies.length < 1) {
          getVacancies()
          .then(vacancies => this.setState({ vacancies: vacancies }))
          .catch(err => console.log(err))
        }
          setTimeout(() => {
            if(this.state.vacancies) {
              var mergedVacs1 = [].concat.apply([], this.state.vacancies);
              this.setState({
                mergedVacs: mergedVacs1
              })
              console.log(this.state.mergedVacs);
            }
          }, 300);
       }

    eachVacancie = () => {
      if(this.state.mergedVacs) {
        return(
          <div className='inside_vacs'>
             {this.state.mergedVacs.map((comp, index, arr) => (
               <div className='commVacs' style={{
                 borderRadius: index == 0 ? "20px 20px 0px 0px" :
                               index == arr.length - 1 ? "0px 0px 20px 20px" :
                               null
               }}>
                   <p className='eachVacs dir1'>{comp.direction}</p>
                   <p className='eachVacs loc1'>{comp.location}</p>
                   <p className='eachVacs sal1'>{comp.salary}</p>
                   <p className='eachVacs requir1'>{comp.requirements}</p>
                   <p className='eachVacs task1'>{comp.tasks}</p>
                   <p className='eachVacs exp1'>{comp.experience}</p>
               </div>
             ))}
          </div>
        )
      }
    }

    render() {
      return (
        <div className='wrap_eachVac'>
            {this.eachVacancie()}
            <div className='wrap_searchPositions'>
                <div className='searchPositions'>
                <form method='POST' id='searchForm'>
                     <input type='text' className='searchVacs' placeholder='Position'/>
                     <input type='text' className='searchVacs' placeholder='Region'/>
                     <input type='text' className='searchVacs' placeholder='Work experience'/>
                     <input type='text' className='searchVacs' placeholder='Starting salary'/>
                     <input type='text' className='searchVacs' placeholder='Languages'/>
                     <input type='checkbox' id='applFor' className='searchVacsCheck'/>
                     <label htmlFor='applFor' className='lblsFor' id='applFor2'>Apply for internship</label>
                     <input type='checkbox' id='receiveList' className='searchVacsCheck'/>
                     <label htmlFor='receiveList' className='lblsFor' id='receiveList2'>Receive list of job opportunities</label>
                     <button type='submit' id='req_but2'>Request</button>
                     <p id='resFil'>Reset filters </p>
                </form>
             </div>
          </div>
        </div>
      )
    }
}

export default Offer;
